package main

import (
	"log"
	"os"

	"projeto-01/internal/router"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {

	if err := godotenv.Load(); err != nil {
		log.Println("Error loading .env file - using default values")
	}

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	r := gin.Default()
	router.Setup(r)

	if err := r.Run(":" + port); err != nil {
		log.Fatal(err)
	}
}
