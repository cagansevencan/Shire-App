const express = require('express');
const bodyParser = require('body-parser');
const businessRouter = require('./routes/business');
const locationRouter = require('./routes/location')
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
app.use('/location', locationRouter)
app.use('/users', userRouter);
app.use('/', indexRouter);


module.exports = app;




