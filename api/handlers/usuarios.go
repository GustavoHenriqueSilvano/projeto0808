package handlers

import (
	"net/http"
	"projeto-01/models"

	"github.com/gin-gonic/gin"
)

func GetUsuarios(c *gin.Context) {
	usuarios := []models.Usuario{
		{ID: 1, Nome: "Gustavo"},
		{ID: 2, Nome: "Henrique"},
	}
	c.JSON(http.StatusOK, usuarios)
}

func CriarUsuario(c *gin.Context) {
	var usuario models.Usuario

	if err := c.ShouldBindJSON(&usuario); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"erro": "JSON inválido"})
		return
	}

	usuario.ID = 3
	c.JSON(http.StatusCreated, usuario)
}

func AtualizarUsuario(c *gin.Context) {
	var usuario models.Usuario

	if err := c.ShouldBindJSON(&usuario); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"erro": "JSON inválido"})
		return
	}

	c.JSON(http.StatusOK, usuario)
}

func DeletarUsuario(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"mensagem": "usuário deletado"})
}
