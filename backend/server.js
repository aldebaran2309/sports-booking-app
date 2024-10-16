const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bookingRoutes = require('./routes/bookingRoutes');
const centerRoutes = require('./routes/centerRoutes');
const courtRoutes = require('./routes/courtRoutes');
const sportRoutes = require('./routes/sportRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/sports_booking', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Check MongoDB connection
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

// Use routes
app.use('/api/bookings', bookingRoutes);
app.use('/api/centers', centerRoutes);
app.use('/api/courts', courtRoutes);
app.use('/api/sports', sportRoutes);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});