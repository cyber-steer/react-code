import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faComment } from '@fortawesome/free-solid-svg-icons';
import '../css/CardComponent.css';
import DropdownParticipant from './DropdownParticipant';

const IndividualCard = ({ title, text, views, comments, nickName }) => {
  return (
    <Card className="mb-3 text-start card-fixed-size">
      <Card.Body className="d-flex flex-column card-body-fixed position-relative">
        <div className="card-body-content">
          <Card.Title className="card-title-fixed">{title}</Card.Title>
          <Card.Text className="card-text-ellipsis card-text-fixed">{text}</Card.Text>
        </div>
        <div className="nickname position-absolute start-0 bottom-0 m-2">{nickName}</div>
      </Card.Body>
      <Card.Footer className="card-footer-custom">
        <Row className="w-100">
          <Col className="d-flex justify-content-start">
            <FontAwesomeIcon icon={faEye} className="me-2" /> {views}
          </Col>
          <Col className="d-flex justify-content-end">
            <FontAwesomeIcon icon={faComment} className="me-2" /> {comments}
          </Col>
        </Row>
        <Row className="w-100 mt-2">
          <Col>
            <DropdownParticipant />
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default IndividualCard;
