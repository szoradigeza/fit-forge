package server

import (
	"github.com/labstack/echo/v4"
	"github.com/szoradigeza/fit-forge/config"
	"github.com/szoradigeza/fit-forge/db"
	"gorm.io/gorm"
)

type Server struct {
	Echo *echo.Echo
	DB   *gorm.DB
}

func NewServer(cfg *config.Config) *Server {
	return &Server{
		Echo: echo.New(),
		DB:   db.Init(cfg),
	}
}

func (server *Server) Start(addr string) error {
	return server.Echo.Start(":" + addr)
}
