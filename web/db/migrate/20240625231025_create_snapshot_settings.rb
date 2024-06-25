class CreateSnapshotSettings < ActiveRecord::Migration[7.0]
  def change
    create_table :snapshot_settings do |t|
      t.string :time_frequency

      t.timestamps
    end
  end
end
