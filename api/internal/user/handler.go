package user

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func RegisterUsers(c *gin.Context) {
	// c.JSON(http.StatusOK, gin.H{"mensagem": "Rota de usuários registrada"})
	var req RegisterRequest

	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Usuário registrado com sucesso", "data": req})
}

