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

func (r *AuthHandler) Register(c echo.Context) error {
	userService := user.NewUserService(r.server.DB)

	userService.Register(&models.User{
		Name:     c.FormValue("name"),
		Email:    c.FormValue("email"),
		Password: c.FormValue("password"),
	})

	return c.String(200, "Register")
}

func (r *AuthHandler) GetAll(c echo.Context) error {
	userService := user.NewUserService(r.server.DB)

	users := userService.GetAll()

	return c.JSON(http.StatusOK, users)
}
