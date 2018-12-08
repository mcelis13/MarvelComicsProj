class CreateTrailers < ActiveRecord::Migration[5.2]
  def change
    create_table :trailers do |t|
      t.string :name
      t.string :url
      t.string :character

      t.timestamps
    end
  end
end
