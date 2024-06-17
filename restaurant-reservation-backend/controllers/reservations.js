const { Reservation } = require('../models');
const { sendEmail } = require('../utils/email');

const createReservation = async (req, res) => {
    const { userId, restaurantId, reservationTime, numGuests } = req.body;
    try {
        const reservation = await Reservation.create({ userId, restaurantId, reservationTime, numGuests });
        
        // Send confirmation email
        sendEmail(req.user.email, 'Reservation Confirmed', `Your reservation is confirmed for ${reservationTime}`);

        res.status(201).json(reservation);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getUserReservations = async (req, res) => {
    const { userId } = req.params;
    try {
        const reservations = await Reservation.findAll({ where: { userId } });
        res.json(reservations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createReservation, getUserReservations };
