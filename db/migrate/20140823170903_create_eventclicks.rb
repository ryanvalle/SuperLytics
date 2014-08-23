class CreateEventclicks < ActiveRecord::Migration
  def change
    create_table :eventclicks do |t|
      t.integer	:session_id
      t.integer	:clicktime
      t.text	:domclicked
      t.string :key

      t.timestamps
    end
  end
end
