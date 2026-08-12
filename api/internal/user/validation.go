package user

import (
	"errors"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
)

func validationErrors(err error) map[string]string {
	var ve validator.ValidationErrors
	if !errors.As(err, &ve) {
		return nil
	}

	fields := make(map[string]string, len(ve))
	for _, fe := range ve {
		fields[fe.Field()] = messageFor(fe)
	}

	return fields
}

func messageFor(fe validator.FieldError) string {
	switch fe.Tag() {
	case "required":
		return "Campo obrigatório"
	case "email":
		return "E-mail inválido"
	case "min":
		return "mínimo de " + fe.Param() + " caracteres"
	case "max":
		return "máximo de " + fe.Param() + " caracteres"
	default:
		return "Valor inválido"
	}
}

func abortWithBindError(c *gin.Context, err error) {
	if fields := validationErrors(err); fields != nil {
		c.JSON(http.StatusBadRequest, gin.H{"fields": fields})
		return
	}
	c.JSON(http.StatusBadRequest, gin.H{"error": "JSON inválido"})
}
