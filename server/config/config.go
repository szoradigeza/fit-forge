package config

import (
	"log"

	"github.com/joho/godotenv"
)

type Config struct {
	HTTP HTTPConfig
	DB   DbConfig
}

func NewConfig() *Config {
	err := godotenv.Load()
	if err != nil {
		log.Println("Error loading .env file")
	}

	return &Config{
		HTTP: LoadHTTPConfig(),
		DB:   loadDbConfig(),
	}
}
