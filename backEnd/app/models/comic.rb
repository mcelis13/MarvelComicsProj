class Comic < ApplicationRecord
  has_many :characters_comics
  has_many :characters, through: :characters_comics
end
