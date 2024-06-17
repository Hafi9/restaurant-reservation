import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-light text-center py-5">
      <Container>
        <h1>Welcome to Restaurant Reservation</h1>
        <p>
          Book your favorite restaurant easily and quickly.
        </p>
        <p>
          <Button variant="primary" as={Link} to="/restaurants">Browse Restaurants</Button>
        </p>
      </Container>
    </div>
  );
};

export default Home;
