const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1/jokes_db",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to database!"))
    .catch( err => console.log("Something went wrong connecting to database!", err))
