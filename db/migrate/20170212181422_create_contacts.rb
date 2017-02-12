class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.text :cookie
      t.text :email

      t.timestamps null: false
    end
  end
end
