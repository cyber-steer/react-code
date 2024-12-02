import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ImageCarousel from './ImageCarousel';
import CardGroupComponent from './CardGroupComponent';
import '../css/Home.css'; // CSS 파일 임포트

function Home({ title }) {
  const [activeLink, setActiveLink] = React.useState('Home');
  const handleSelect = (eventKey) => { setActiveLink(eventKey); };

  return (
    <div className="my-4">
      <h2 className='text-start'>{title}</h2>
      <ImageCarousel />
      <Row>
        <Col md={12}>
          <CardGroupComponent />
        </Col>
      </Row>
      <div className="more-link text-end">더보기</div>
    </div>
  );
}

export default Home;
