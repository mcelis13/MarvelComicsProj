class Character < ApplicationRecord
  has_many :trailers
  has_many :characters_comics
  has_many :comics, through: :characters_comics
end
