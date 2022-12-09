# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
puts "starts seeding..."

Makeup.create(name: "Huddah Lipstick", description:"Anone sticky lipstick that takes less time to dry up", status: "available", image: "Maybelline.jpg", url: "Projects/PataMali-App/Maybelline.jpg", price: 2000.00)
Makeup.create(name: "Makeup Brush", description:"Strong,soft and long lasting", status: "available", image: "brush.jpg", url: "Projects/PataMali-App/brush.jpg", price: 900.0)
Makeup.create(name: "Foundation", description:"Skin friendly and easy to apply", status: "out of stock", image: "fit-me foundation.jpg", url: "Projects/PataMali-App/fit-me foundation.jpg", price: 2500.0)


 users = User.create(name: "Nicole", username: "LilShopper",email: "nicole_awino@gmail.com", password: "password")
User.create(name: "Fenny", username: "Fens", email: "e_fenns@gmail.com", password: "password")
User.create(name: "Renice", username:"Wabbit", email: "wabbit_renee@gmail.com", password: "password")

maybelline = Shop.create(tittle: "Maybelline Shop", url: "maybelline-shop")
makeup1 = maybelline.makeups.create(name: "Maybelline Lipstick", price: 2000.00, status: "available", image: "Maybelline.jpg", url: "Projects/PataMali-App/Maybelline.jpg")

makeup2 = maybelline.makeups.create(name: "Maybelline Powder", price: 1500.0, image: "powder.jpg" , status: "available", description: "Non-sticky powder that leaves no acne")

makeup3 = maybelline.makeups.create(name: "Makeup Spray", price: 1500.00, image: "spray.jpg", status: "out of stock", description: " Lasting Fix Setting Spray will set your makeup look with a matte finish for up to 16 hours." )


# huddah = Shop.create(tittle: "Hudah Cosmetics", url: "huddah-cosmetics")
# fenty = Shop.create(tittle: "Fenty Beauty", url: "fenty-beauty")

puts "Seeding done!"
