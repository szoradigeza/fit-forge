package auth

import (
	"net/http"

	"github.com/labstack/echo/v4"
	"github.com/szoradigeza/fit-forge/models"
	s "github.com/szoradigeza/fit-forge/server"
	"github.com/szoradigeza/fit-forge/services/user"
)

type AuthHandler struct {
	server *s.Server
}

func NewAuthHandler(s *s.Server) *AuthHandler {
	return &AuthHandler{server: s}
}

type Response struct {
	Message string `json:"message" `
}

func (r *AuthHandler) Register(c echo.Context) error {
	userService := user.NewUserService(r.server.DB)

	err := userService.Register(&models.User{
		Name:     c.FormValue("name"),
		Email:    c.FormValue("email"),
		Password: c.FormValue("password"),
	})
	if err != nil {
		return c.JSON(406, err)
	}

	return c.JSON(200, &Response{Message: "user created"})
}

func (r *AuthHandler) GetAll(c echo.Context) error {
	userService := user.NewUserService(r.server.DB)

	users := userService.GetAll()

	return c.JSON(http.StatusOK, users)
}
