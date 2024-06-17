import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Restaurants = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        const fetchRestaurants = async () => {
            const response = await axios.get('http://localhost:3000/restaurants');
            setRestaurants(response.data);
        };
        fetchRestaurants();
    }, []);

    return (
        <div>
            <h2>Restaurants</h2>
            <ul>
                {restaurants.map(restaurant => (
                    <li key={restaurant.id}>{restaurant.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Restaurants;
