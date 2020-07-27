class CreateQuotes < ActiveRecord::Migration[6.0]
  def change
    create_table :quotes do |t|
      t.string :content 
      t.belongs_to :book

      t.timestamps
    end
  end
end
