package auth

import (
	"log"
	"net/http"
	"time"

	"github.com/golang-jwt/jwt/v5"
	"github.com/labstack/echo/v4"
	"github.com/szoradigeza/fit-forge/models"
	s "github.com/szoradigeza/fit-forge/server"
	"github.com/szoradigeza/fit-forge/services/user"
)

type AuthHandler struct {
	server *s.Server
}

type jwtCustomClaims struct {
	Name  string `json:"name"`
	Email string `json:"email"`
	jwt.RegisteredClaims
}

func NewAuthHandler(s *s.Server) *AuthHandler {
	return &AuthHandler{server: s}
}

type Response struct {
	Message string `json:"message" `
	Token   string `json:"token"`
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

	token := jwt.NewWithClaims(jwt.SigningMethodHS256,
		jwt.MapClaims{
			"username": c.FormValue("name"),
			"exp":      time.Now().Add(time.Hour * 24).Unix(),
		})

	secretKey := []byte("secret-key")

	tokenString, err := token.SignedString(secretKey)
	if err != nil {
		log.Println("error signing token", err)
		return err
	}

	return c.JSON(200, &Response{Message: "user created", Token: tokenString})
}

type LoginRequest struct {
	Email      string `json:"email"`
	Password   string `json:"password"`
	isFacebook bool   `json:"isFacebook"`
}

func (r *AuthHandler) Login(c echo.Context) error {
	userService := user.NewUserService(r.server.DB)

	var loginReq LoginRequest
	err := c.Bind(&loginReq)
	if err != nil {
		return c.JSON(400, "Invalid request body")
	}

	var user *models.User
	var error error

	if loginReq.isFacebook {
		user, error = userService.FindUser(loginReq.Email, "")
	}
	user, error = userService.FindUser(loginReq.Email, loginReq.Password)

	if error != nil {
		return c.JSON(404, map[string]string{"message": "user not found"})
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256,
		jwt.MapClaims{
			"username": user.Name,
			"email":    user.Email,
			"exp":      time.Now().Add(time.Hour * 24).Unix(),
		})

	secretKey := []byte("secret-key")

	tokenString, err := token.SignedString(secretKey)
	if err != nil {
		log.Println("error signing token", err)
		return err
	}

	return c.JSON(200, &Response{Message: "user created", Token: tokenString})
}

func (r *AuthHandler) GetAll(c echo.Context) error {
	userService := user.NewUserService(r.server.DB)

	users := userService.GetAll()

	return c.JSON(http.StatusOK, users)
}

func (r *AuthHandler) GetMe(c echo.Context) error {
	user := c.Get("user").(*jwt.Token)

	return c.JSON(200, user.Claims)
}
