class CreateMakeups < ActiveRecord::Migration[7.0]
  def change
    create_table :makeups do |t|
      t.string :name
      t.string :description
      t.integer :price
      t.string :status
      t.string :image
      t.string :url
      # t.float :price

      t.timestamps
    end
  end
end
