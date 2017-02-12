class EmailAndCookieUniquesInContact < ActiveRecord::Migration
  def change
    add_index :contacts, [:cookie, :email], :unique => true
  end
end
