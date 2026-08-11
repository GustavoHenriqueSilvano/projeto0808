package main

import (
	"log"

	"projeto-01/internal/router"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	router.Setup(r)

	if err := r.Run(":8080"); err != nil {
		log.Fatal(err)
	}
}