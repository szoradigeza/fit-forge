package config

import "os"

type DbConfig struct {
	User     string
	Password string
	Driver   string
	Name     string
	Host     string
	Port     string
	DBName   string
}

func loadDbConfig() DbConfig {
	return DbConfig{
		User:     os.Getenv("DB_USER"),
		Password: os.Getenv("DB_PASSWORD"),
		Driver:   os.Getenv("DB_DRIVER"),
		Name:     os.Getenv("DB_NAME"),
		Host:     os.Getenv("DB_HOST"),
		Port:     os.Getenv("DB_PORT"),
		DBName:   os.Getenv("DB_NAME"),
	}
}
