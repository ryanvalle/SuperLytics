class CreateSites < ActiveRecord::Migration
  def change
    create_table :sites do |t|
      t.text :url
      t.string :key

      t.timestamps
    end
  end
end
