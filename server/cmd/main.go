package main

import (
	"github.com/szoradigeza/fit-forge/config"
	"github.com/szoradigeza/fit-forge/routes"
	"github.com/szoradigeza/fit-forge/server"
)

func main() {
	cfg := config.NewConfig()
	s := server.NewServer(cfg)
	routes.ConfigureRoutes(s)

	s.Start(cfg.HTTP.Port)
}
