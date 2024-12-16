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

func (service *UserService) FindUser(email string, password string) (*models.User, error) {
	var user models.User
	if password == "" {
		result := service.DB.Where("email = ?", email).First(&user)
		if result.Error != nil {
			return nil, result.Error
		}
		return &user, nil
	}
	result := service.DB.Where("email = ?", email).Where("password = ?", password).First(&user)

	if result.Error != nil {
		return nil, result.Error
	}

	return &user, nil
}
