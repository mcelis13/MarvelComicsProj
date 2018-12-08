class ComicSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :page_count, :price, :img
end
