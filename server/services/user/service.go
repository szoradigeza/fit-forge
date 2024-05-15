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

func (service *UserService) Register(user *models.User) {
	fmt.Println(user)
	service.DB.Create(user)
}

func (service *UserService) GetAll() []models.User {
	var users []models.User

	service.DB.Find(&users)
	return users
}
