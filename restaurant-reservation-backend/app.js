const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
const restaurantRoutes = require('./routes/restaurants');
const reservationRoutes = require('./routes/reservations');
const app = express();

app.use(bodyParser.json());
app.use('/users', userRoutes);
app.use('/restaurants', restaurantRoutes);
app.use('/reservations', reservationRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
