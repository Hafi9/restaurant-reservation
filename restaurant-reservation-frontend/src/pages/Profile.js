import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Profile = () => {
  // Contoh data reservasi
  const reservations = [
    { id: 1, restaurant: 'Restaurant A', time: '2024-06-18 19:00', guests: 2 },
    { id: 2, restaurant: 'Restaurant B', time: '2024-06-19 20:00', guests: 4 },
  ];

  return (
    <Container>
      <h2 className="my-4">My Profile</h2>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>My Details</Card.Title>
              <Card.Text>
                Name: John Doe<br />
                Email: john.doe@example.com
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>My Reservations</Card.Title>
              {reservations.map(reservation => (
                <Card key={reservation.id} className="mb-2">
                  <Card.Body>
                    <Card.Title>{reservation.restaurant}</Card.Title>
                    <Card.Text>
                      Time: {reservation.time}<br />
                      Guests: {reservation.guests}
                    </Card.Text>
                    <Button variant="danger">Cancel Reservation</Button>
                  </Card.Body>
                </Card>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
