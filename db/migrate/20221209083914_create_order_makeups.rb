class CreateOrderMakeups < ActiveRecord::Migration[7.0]
  def change
    create_table :order_makeups do |t|

      t.timestamps
    end
  end
end
