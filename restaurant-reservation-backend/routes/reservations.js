const express = require('express');
const router = express.Router();
const { createReservation, getUserReservations } = require('../controllers/reservations');
const { authenticateToken } = require('../middlewares/auth');

router.post('/', authenticateToken, createReservation);
router.get('/user/:userId', authenticateToken, getUserReservations);

module.exports = router;
