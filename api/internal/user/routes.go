package user

import "github.com/gin-gonic/gin"

func Routes(rg *gin.RouterGroup) {
	rg.POST("/register", RegisterUsers)
}