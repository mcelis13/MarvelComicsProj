class CreateCharactersComics < ActiveRecord::Migration[5.2]
  def change
    create_join_table :comics, :characters do |t|
      t.integer :comic_id
      t.integer :character_id
    end
  end
end
