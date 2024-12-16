package routes

import (
	echojwt "github.com/labstack/echo-jwt/v4"
	"github.com/labstack/echo/v4/middleware"
	"github.com/szoradigeza/fit-forge/api/auth"
	"github.com/szoradigeza/fit-forge/server"
)

func ConfigureRoutes(server *server.Server) {
	authHandler := auth.NewAuthHandler(server)
	server.Echo.Use(middleware.CORS())

	echo := server.Echo
	echo.Use(middleware.CORS())
	echo.POST("/login", authHandler.Login)
	echo.POST("/register", authHandler.Register)

	restricted := echo.Group("/restricted")

	restricted.Use(echojwt.JWT([]byte("secret-key")))
	restricted.Use(middleware.CORS())

	restricted.GET("/user", authHandler.GetAll)
	restricted.GET("/me", authHandler.GetMe)
}
