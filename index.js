const express = require('express');
const bodyParser = require('body-parser');
const businessRouter = require('./routes/business');
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const cors = require('cors');

require('./mongo-connection')

const app = express();
//Bodyparser middleware oldugu icin boyle kullaniyoruz
app.use(bodyParser.json());
app.use(cors());

app.set('view engine', 'pug');

app.use('/businesses', businessRouter);
app.use('/users', userRouter);
app.use('/', indexRouter);


module.exports = app;













// const John = User.create({
//     name: 'John',
//     email: 'jondoe@gmail.com',
//     phone: '123456789',
//     location: '1234 Main St'
// })

// const Farm = John.createBusiness('Johns Farm', 'We sell fresh produce', 'cagan@gmail.com', '123456789')
// Farm.businessDetails.category = 'Farm'
// Farm.businessDetails.practices = ['RegenerativeFarming', 'Biodynamic',]
// Farm.businessDetails.product = ['Wine', 'FermentedFoods', 'Beer',]
// const products = Product.categories


// console.log(products)

// John.favThisBusiness(Farm)


// Farm.businessDetails.product = products

// console.log(John)
// console.log(Farm)



