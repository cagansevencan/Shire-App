const User = require('./models/user')
const Business = require('./models/business')
const Product = require('./models/Enums/Product')


const John = User.create({
    name: 'John',
    email: 'jondoe@gmail.com',
    phone: '123456789',
    location: '1234 Main St'
})

const Farm = John.createBusiness('Johns Farm', 'We sell fresh produce', 'cagan@gmail.com', '123456789')
Farm.businessDetails.category = 'Farm'
Farm.businessDetails.practices = ['RegenerativeFarming', 'Biodynamic',]
Farm.businessDetails.product = ['Wine', 'FermentedFoods', 'Beer',]
const products = Product.categories


console.log(products)

John.favThisBusiness(Farm)


Farm.businessDetails.product = products

console.log(John)
console.log(Farm)

