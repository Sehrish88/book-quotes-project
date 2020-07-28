class CreateQuotes < ActiveRecord::Migration[6.0]
  def change
    create_table :quotes do |t|
      t.string :content 
      t.integer :book_id

      t.timestamps
    end
  end
end
