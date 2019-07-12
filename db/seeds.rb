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

# Doctor.create!([ {name:"Ruby Rails", specialization:"Podiatrist", phone:"7865467654"},{
#     name:"Java Script", specialization:"Dietics", phone:"7865447454"
# }, {name:"Peter Pythin", specialization:"Pediatrician", phone:"2015467654"} ])


Prescription.create!([{name:"Zyrtec", dosage:"10mg", medication_time:"6:00am", purpose:"Migranes diffuser", pharmacy:"walgreens", prescriber:"Ruby Rails", prescriber_specialization:"Podiatrist", prescriber_phone:"9265677812",user_id:1},
    {name:"Allegra", dosage:"25mg", medication_time:"2:00am", purpose:"Fever Reducer", pharmacy:"walgreens", prescriber:"Java Script", prescriber_specialization:"Dietics", prescriber_phone:"7865447454", user_id:2 }, 
    {name:"Dimetapp", dosage:"50mg", medication_time:"10:00am", purpose:"Coughing", pharmacy:"costco", prescriber:"Peter Pythin", prescriber_specialization:"Pediatrician", prescriber_phone:"2015467654", user_id:2},
   {name:"Benadryl", dosage:"5mg", medication_time:"2:00pm", purpose:"Swelling & Itching", pharmacy:"rite-aid", prescriber:"Peter Pythin", prescriber_specialization:"Pediatrician", prescriber_phone:"2015467654", user_id:1} ])