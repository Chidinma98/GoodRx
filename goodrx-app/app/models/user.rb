class User < ApplicationRecord
has_many :prescriptions
has_many :messages

    has_secure_password


    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :phone_number, presence: true, uniqueness: true
    validates :phone_number, length: { minimum: 10, message: "bad format" }
   
    validates :password,
    length: {minimum: 5},
    if: -> { new_record? || !password.nil}

    def user_params
        params.require(:user).permit(:username, :email, :phone_number, :password)
    end
end
