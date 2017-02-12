class RemoveWhenFromLogs < ActiveRecord::Migration
  def change
    remove_column :logs, :when
  end
end
