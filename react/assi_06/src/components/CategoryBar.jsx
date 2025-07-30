import React from 'react';
import { Container, Nav, NavDropdown } from 'react-bootstrap';

function CategoryBar() {
  return (
    <div className="border-top border-bottom bg-white py-2">
      <Container fluid>
        <Nav className="gap-3 flex-wrap">
          <NavDropdown title={<span className="fw-bold text-dark">All Categories</span>} id="nav-categories-dropdown">
            <NavDropdown.Item href="#">Mobiles</NavDropdown.Item>
            <NavDropdown.Item href="#">Vehicles</NavDropdown.Item>
            <NavDropdown.Item href="#">Property</NavDropdown.Item>
            <NavDropdown.Item href="#">Jobs</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="#" className="text-dark">Mobile Phones</Nav.Link>
          <Nav.Link href="#" className="text-dark">Cars</Nav.Link>
          <Nav.Link href="#" className="text-dark">Motorcycles</Nav.Link>
          <Nav.Link href="#" className="text-dark">Houses</Nav.Link>
          <Nav.Link href="#" className="text-dark">Video-Audios</Nav.Link>
          <Nav.Link href="#" className="text-dark">Tablets</Nav.Link>
          <Nav.Link href="#" className="text-dark">Land & Plots</Nav.Link>
        </Nav>
      </Container>
    </div>
  );
}

export default CategoryBar;
