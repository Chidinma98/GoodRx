class CreatePrescriptions < ActiveRecord::Migration[5.2]
  def change
    create_table :prescriptions do |t|
      t.string :name
      t.string :dosage
      t.string :color
      t.string :medication_time
      t.string :description
      t.string :pharmacy
      t.references :user, foreign_key: true
      t.references :doctor, foreign_key: true

      t.timestamps
    end
  end
end
