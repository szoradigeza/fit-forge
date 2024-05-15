package main

import (
	"fmt"

	routes "github.com/szoradigeza/fit-forge/api"
	"github.com/szoradigeza/fit-forge/config"
	"github.com/szoradigeza/fit-forge/server"
	"gorm.io/gorm"
)

type Product struct {
	gorm.Model
	Code  string
	Price uint
}

func main() {
	cfg := config.NewConfig()
	s := server.NewServer(cfg)
	routes.ConfigureRoutes(s)
	fmt.Println("ok")

	s.Start(cfg.HTTP.Port)
}
