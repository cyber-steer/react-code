import React from 'react';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';

function Header() {
  const [activeLink, setActiveLink] = React.useState('index');
  const handleSelect = (eventKey) => { setActiveLink(eventKey); };
  return (
    <Navbar bg="secondary" variant="secondary" expand="lg" className="p-3">
      <Navbar.Brand href="/react" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"> 
        Logo
      </Navbar.Brand> 
      <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
      <Navbar.Collapse id="basic-navbar-nav"> 
        <Nav className="me-auto" onSelect={handleSelect}>
          <Nav.Link eventKey="Home" href="#" className={activeLink === 'Home' ? 'active' : ''}>메뉴 1</Nav.Link>
          <Nav.Link eventKey="Features" href="#" className={activeLink === 'Features' ? 'active' : ''}>메뉴 2</Nav.Link>
          <Nav.Link eventKey="Pricing" href="#" className={activeLink === 'Pricing' ? 'active' : ''}>메뉴 3</Nav.Link>
          <Nav.Link eventKey="FAQs" href="#" className={activeLink === 'FAQs' ? 'active' : ''}>메뉴 4</Nav.Link>
          <Nav.Link eventKey="About" href="/react/about" className={activeLink === 'About' ? 'active' : ''}>기출문제</Nav.Link>
        </Nav>
        <Form className="d-flex col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <Form.Control type="search" placeholder="Search..." className="form-control-dark" aria-label="Search" />
        </Form>
        <div className="text-end">
          <Button variant="outline-light" className="me-2">Login</Button>
          <Button variant="warning">Sign-up</Button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
