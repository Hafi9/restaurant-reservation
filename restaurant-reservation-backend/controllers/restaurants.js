// controllers/restaurants.js
const { Restaurant } = require('../models');

const createRestaurant = async (req, res) => {
    const { name, address, phone } = req.body;
    try {
        const restaurant = await Restaurant.create({ name, address, phone });
        res.status(201).json(restaurant);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.findAll();
        res.json(restaurants);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createRestaurant, getAllRestaurants };
