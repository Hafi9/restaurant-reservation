import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Restaurants from './pages/Restaurants';
import Profile from './pages/Profile';

const App = () => (
    <Router>
        <NavigationBar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    </Router>
);

export default App;
