const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const connectDB = require('./config/db');
const mongoose = require('mongoose')
// importing routes routes
const employeeRoutes = require('./routes/api/employees');


const app = express();

// connect Database
// connectDB();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


mongoose.connect("mongodb+srv://newuser:password1234@employeedetail.uexue.mongodb.net/employees?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
    }
)
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());


// Use Routes
app.use('/api/employees', employeeRoutes);

// server static assets if in production
if (process.env.NODE_ENV === 'production') {

    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));