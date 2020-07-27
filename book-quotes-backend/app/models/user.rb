class User < ApplicationRecord
    has_many :quotes 
    validates :username, uniqueness: true 
end
