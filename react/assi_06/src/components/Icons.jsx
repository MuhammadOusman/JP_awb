import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const categories = [
  { title: "Mobiles", image: "/src/assets/IMAGES/mobile.png" },
  { title: "Vehicles", image: "/src/assets/IMAGES/vehicle.png" },
  { title: "Property For Sale", image: "/src/assets/IMAGES/property.png" },
  { title: "Property For Rent", image: "/src/assets/IMAGES/rent.png" },
  { title: "Electronics & Home...", image: "/src/assets/IMAGES/images.png" },
  { title: "Bikes", image: "/src/assets/IMAGES/bike.png" },
  { title: "Business, Industrial &...", image: "/src/assets/IMAGES/bussi.png" },
  { title: "Services", image: "/src/assets/IMAGES/services.png" },
  { title: "Jobs", image: "/src/assets/IMAGES/jobs.png" },
  { title: "Animals", image: "/src/assets/IMAGES/anima.png" },
 ];

const Icons = () => {
  return (
    <Container className="mt-4">
      <Row>
        {categories.map((cat, index) => (
          <Col key={index} xs={6} sm={4} md={3} lg={2} className="mb-4 text-center">
            <Card style={{ border: 'none', backgroundColor: '#f9f9f9' }}>
              <Card.Img
                variant="top"
                src={cat.image}
                style={{ width: '60px', height: '60px', margin: '10px auto' }}
              />
              <Card.Body>
                <Card.Text style={{ fontWeight: '500', fontSize: '14px' }}>
                  {cat.title}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Icons;
