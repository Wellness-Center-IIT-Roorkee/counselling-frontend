import { Button } from '@material-ui/core';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import illustration from '../../assets/illustrations/Group 6.svg';

const Home = () => {
  return (
    <div style={{ height: '100vh', position: 'relative' }}>
      <Row className="align-items-center my-auto h-100 mx-5">
        <Col className="pr-5">
          <Row className="text-blue-800 fw-500 fs-3_125 md-2">
            <Col>Appointment Booking Portal</Col>
          </Row>
          <Row className="text-grey-600">
            <Col className="lh-1_875 fs-l">
              It is not unusual for you to experience social, personal, or
              academic problems in your day to day life. The growing pressure to
              excel everywhere often leads to emotional or psychological
              turmoil, thus disturbing one‘s peace of mind.
            </Col>
          </Row>
          <Row className="text-grey-600">
            <Col>
              The counselor’s forum is an open, receptive and safe forum to
              share any problem.
            </Col>
          </Row>
          <Row>
            <Col>
              <Button color="primary" variant="contained">
                mango
              </Button>
            </Col>
          </Row>
        </Col>
        <Col>
          <img src={illustration} width="100%" />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
