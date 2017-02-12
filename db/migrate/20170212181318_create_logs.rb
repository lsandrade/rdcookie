class CreateLogs < ActiveRecord::Migration
  def change
    create_table :logs do |t|
      t.text :cookie
      t.text :page
      t.datetime :when

      t.timestamps null: false
    end
  end
end
