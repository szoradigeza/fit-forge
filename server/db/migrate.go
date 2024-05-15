package db

import (
	"fmt"

	"github.com/szoradigeza/fit-forge/models"
	"gorm.io/gorm"
)

func Migrate(db *gorm.DB) {
	fmt.Println("Start migrating")
	db.AutoMigrate(models.User{})
	fmt.Println("End migrating")
}
