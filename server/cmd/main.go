package main

import (
	"log"

	"github.com/szoradigeza/fit-forge/config"
	"github.com/szoradigeza/fit-forge/routes"
	"github.com/szoradigeza/fit-forge/server"
	"gorm.io/driver/postgres"
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
	dsn := "host=localhost user=admin password=password dbname=mydb1 port=5432 sslmode=disable"

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal(err)
	}

	db.AutoMigrate(&Product{})

	db.Create(&Product{Code: "D42", Price: 100})

	var product Product
	db.First(&product, 1)

	log.Print(product)

	s.Start(cfg.HTTP.Port)
}
