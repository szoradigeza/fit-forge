package routes

import (
	"github.com/szoradigeza/fit-forge/api/auth"
	"github.com/szoradigeza/fit-forge/server"
)

func ConfigureRoutes(server *server.Server) {
	authHandler := auth.NewAuthHandler(server)

	server.Echo.POST("/register", authHandler.Register)
	server.Echo.GET("/user", authHandler.GetAll)
}
