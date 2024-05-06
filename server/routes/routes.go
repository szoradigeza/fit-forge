package routes

import (
	"github.com/szoradigeza/fit-forge/handlers"
	"github.com/szoradigeza/fit-forge/server"
)

func ConfigureRoutes(server *server.Server) {
	server.Echo.GET("/", handlers.Hello)
}
