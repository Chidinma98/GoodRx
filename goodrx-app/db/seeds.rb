# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!([ {username: "General", email: "captain@fakemail.com", phone_number: "9865677866", password: "generalassembley"},
    {username: "Naijagurl", email: "general@fakemail.com", phone_number: "9265677812", password: "december"}
])

Doctor.create!([ {name:"Ruby Rails", specialization:"Podiatrist", phone:"7865467654"},{
    name:"Java Script", specialization:"Dietics", phone:"7865447454"
}, {name:"Peter Pythin", specialization:"Pediatrician", phone:"2015467654"} ])

Prescription.create!([{name:"Zyrtec", dosage:"10mg", medication_time:"6:00am", purpose:"Migranes diffuser", pharmacy:"walgreens", user_id:1, doctor_id:2},
    {name:"Allegra", dosage:"25mg", medication_time:"2:00am", purpose:"Fever Reducer", pharmacy:"walgreens", user_id:2, doctor_id:3}, 
    {name:"Dimetapp", dosage:"50mg", medication_time:"10:00am", purpose:"Coughing", pharmacy:"costco", user_id:2, doctor_id:2},
    {name:"Benadryl", dosage:"5mg", medication_time:"2:00pm", purpose:"Swelling & Itching", pharmacy:"rite-aid", user_id:1, doctor_id:1} ])