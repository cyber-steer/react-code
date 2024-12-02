import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-3 mt-auto">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>홈페이지 소개</p>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <p>연락처</p>
          </Col>
          <Col md={4} className="text-start">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white"><FontAwesomeIcon icon={faFacebook} /> Facebook</a></li>
              <li><a href="#" className="text-white"><FontAwesomeIcon icon={faTwitter} /> Twitter</a></li>
              <li><a href="#" className="text-white"><FontAwesomeIcon icon={faInstagram} /> Instagram</a></li>
              <li><a href="https://github.com/cyber-steer" className="text-white"><FontAwesomeIcon icon={faGithub} /> Github</a></li>
            </ul>
          </Col>
        </Row>
        <div className="text-center">
          <small>&copy; {new Date().getFullYear()} 리액트 + 부트스트랩 + fortawesome 활용</small>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;