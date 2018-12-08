class CreateComics < ActiveRecord::Migration[5.2]
  def change
    create_table :comics do |t|
      t.string :title
      t.string :description
      t.integer :page_count
      t.integer :price
      t.string :img

      t.timestamps
    end
  end
end
