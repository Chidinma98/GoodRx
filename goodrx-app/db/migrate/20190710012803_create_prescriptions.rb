class CreatePrescriptions < ActiveRecord::Migration[5.2]
  def change
    create_table :prescriptions do |t|
      t.string :name
      t.string :dosage
      t.string :medication_time
      t.string :purpose
      t.string :pharmacy
      t.string :prescriber
      t.string :prescriber_specialization
      t.string :prescriber_phone
      t.references :user, foreign_key: true
     

      t.timestamps
    end
  end
end
