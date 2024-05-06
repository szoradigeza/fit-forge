package server

import (
	"github.com/labstack/echo/v4"
	"github.com/szoradigeza/fit-forge/config"
)

type Server struct {
	Echo *echo.Echo
}

func NewServer(cfg *config.Config) *Server {
	return &Server{
		Echo: echo.New(),
	}
}

func (server *Server) Start(addr string) error {
	return server.Echo.Start(":" + addr)
}
