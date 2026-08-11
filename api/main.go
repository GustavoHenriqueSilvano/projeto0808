package main

import (
	"projeto-01/handlers"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	r.GET("/usuarios", handlers.GetUsuarios)
	r.POST("/usuarios", handlers.CriarUsuario)
	r.PUT("/usuarios", handlers.AtualizarUsuario)
	r.DELETE("/usuarios", handlers.DeletarUsuario)

	r.Run(":8080")
}
