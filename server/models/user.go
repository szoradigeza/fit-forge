package models

type User struct {
	Email    string `json:"email" gorm:"type:varchar(255)"`
	Name     string `json:"name" gorm:"type:varchar(255)"`
	Password string `json:"password" gorm:"type:varchar(255)"`
	Id       uint   `gorm:"primary_key" json:"id"`
}
