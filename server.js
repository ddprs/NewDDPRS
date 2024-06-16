const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

mongoose.connect('mongodb://localhost:27017/rideServiceDB', { useNewUrlParser: true, useUnifiedTopology: true });

const rideSchema = new mongoose.Schema({
    pickup: String,
    dropoff: String,
    date: String,
    time: String
});

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

const Ride = mongoose.model('Ride', rideSchema);
const Contact = mongoose.model('Contact', contactSchema);

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/book-ride', (req, res) => {
    const newRide = new Ride({
        pickup: req.body.pickup,
        dropoff: req.body.dropoff,
        date: req.body.date,
        time: req.body.time
    });
    newRide.save(err => {
        if (!err) {
            res.send('Successfully booked the ride!');
        } else {
            res.send(err);
        }
    });
});

app.post('/contact', (req, res) => {
    const newContact = new Contact({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    });
    newContact.save(err => {
        if (!err) {
            res.send('Message sent successfully!');
        } else {
            res.send(err);
        }
    });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
