const express = require('express');
const router = express.Router();
const { createRestaurant, getAllRestaurants } = require('../controllers/restaurants');
const { authenticateToken, isAdmin } = require('../middlewares/auth');

router.post('/', authenticateToken, isAdmin, createRestaurant);
router.get('/', getAllRestaurants);

module.exports = router;
