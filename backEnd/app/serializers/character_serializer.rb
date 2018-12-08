class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :thumbnail
end
