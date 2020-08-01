class DropUsersTable < ActiveRecord::Migration[6.0]
  def change
    drop_table :users do |t|
      t.string :full_name 
      t.string :username 
      

      t.timestamps
    end 
  end
end
