package router

import (
	"projeto-01/internal/user"

	"github.com/gin-gonic/gin"
)

func Setup(r *gin.Engine) {
	api := r.Group("/api/v1")

	user.Routes(api)
}
