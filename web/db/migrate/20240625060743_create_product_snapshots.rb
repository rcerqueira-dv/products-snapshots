class CreateProductSnapshots < ActiveRecord::Migration[7.0]
  def change
    create_table :product_snapshots do |t|
      t.string :name
      t.text :products
      t.datetime :create_date
      t.string :type
      t.boolean :last_restored

      t.timestamps
    end
  end
end
