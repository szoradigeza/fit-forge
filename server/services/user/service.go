package user

import (
	"fmt"

	"github.com/szoradigeza/fit-forge/models"
	"gorm.io/gorm"
)

type UserService struct {
	DB *gorm.DB
}

func NewUserService(db *gorm.DB) *UserService {
	return &UserService{DB: db}
}

func (service *UserService) Register(user *models.User) error {
	fmt.Println(user)
	result := service.DB.Create(user)

	if result.Error != nil {
		return result.Error
	}
	return nil
}

func (service *UserService) GetAll() []models.User {
	var users []models.User

	service.DB.Find(&users)
	return users
}
