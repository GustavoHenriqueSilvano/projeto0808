package user

import (
	"errors"
	"log"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

func RegisterUsers(c *gin.Context) {
	var req RegisterRequest

	if err := c.ShouldBindJSON(&req); err != nil {
		abortWithBindError(c, err)
		return
	}

	ctx := c.Request.Context()

	_, err := findByEmail(ctx, req.Email)

	if err == nil {
		c.JSON(http.StatusConflict, gin.H{"error": "Email já registrado"})
		return
	}

	if !errors.Is(err, ErrNotFound) {
		log.Printf("register: findByEmail(%q): %v", req.Email, err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Erro ao verificar email"})
		return
	}

	hash, err := bcrypt.GenerateFromPassword([]byte(req.Password), bcrypt.DefaultCost)
	if err != nil {
		log.Printf("register: bcrypt: %v", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Erro ao gerar hash da senha"})
		return
	}

	u := User{
		Name:     req.Name,
		Email:    req.Email,
		Password: string(hash),
	}

	created, err := createUser(ctx, u)
	if err != nil {
		log.Printf("register: createUser(%q): %v", u.Email, err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Erro ao criar usuário"})
		return
	}

	c.JSON(http.StatusCreated, created)
}

func LoginUsers(c *gin.Context) {
	var req LoginRequest

	if err := c.ShouldBindJSON(&req); err != nil {
		abortWithBindError(c, err)
		return
	}

	ctx := c.Request.Context()

	u, err := findByEmail(ctx, req.Email)
	if errors.Is(err, ErrNotFound) {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Credenciais inválidas"})
		return
	}
	if err != nil {
		log.Printf("login: findByEmail(%q): %v", req.Email, err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Erro ao verificar email"})
		return
	}

	err = bcrypt.CompareHashAndPassword([]byte(u.Password), []byte(req.Password))
	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Credenciais inválidas"})
		return
	}

	c.JSON(http.StatusOK, u)
}

func UpdateUsers(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil || id <= 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "ID inválido"})
		return
	}

	var req UpdateRequest

	if err := c.ShouldBindJSON(&req); err != nil {
		abortWithBindError(c, err)
		return
	}

	ctx := c.Request.Context()

	u := User{
		ID:    id,
		Name:  req.Name,
		Email: req.Email,
	}

	updated, err := updateUser(ctx, u)
	if errors.Is(err, ErrNotFound) {
		c.JSON(http.StatusNotFound, gin.H{"error": "Usuário não encontrado"})
		return
	}
	if err != nil {
		log.Printf("update: updateUser(%d): %v", id, err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Erro ao atualizar usuário"})
		return
	}

	c.JSON(http.StatusOK, updated)
}
