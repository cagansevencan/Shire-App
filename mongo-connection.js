const mongoose = require('mongoose');
mongoose.set("strictQuery", true);

// mongoose.createConnection('mongodb://localhost/shire-app', { useNewUrlParser: true, useUnifiedTopology: true });



var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

console.log("connecting");

db.once('open', () => {
    console.log("we're connected!");
});

try {
    mongoose.connect('mongodb://127.0.0.1/shire-app');
} catch (err) {
    console.error(err);
}
