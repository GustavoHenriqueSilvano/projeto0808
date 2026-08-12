package main

import (
	"log"
	"os"
	"reflect"
	"strings"

	"projeto-01/internal/database"
	"projeto-01/internal/router"

	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/gin/binding"
	"github.com/go-playground/validator/v10"
	"github.com/joho/godotenv"
)

func main() {
	if err := godotenv.Load(); err != nil {
		log.Println("Error loading .env file - using default values")
	}

	if err := database.Connect(); err != nil {
		log.Fatal("Erro ao conectar ao banco", err)
	}

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	if v, ok := binding.Validator.Engine().(*validator.Validate); ok {
		v.RegisterTagNameFunc(func(fld reflect.StructField) string {
			name := strings.SplitN(fld.Tag.Get("json"), ",", 2)[0]
			if name == "-" {
				return ""
			}
			return name
		})
	}

	r := gin.Default()
	router.Setup(r)

	if err := r.Run(":" + port); err != nil {
		log.Fatal(err)
	}
}
