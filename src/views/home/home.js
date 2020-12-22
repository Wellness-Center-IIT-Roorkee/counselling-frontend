import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import illustration from '../../assets/illustrations/Group 6.svg';

const Home = () => {
  return (
    <div style={{ height: '100vh', position: 'relative' }}>
      <Row className="align-items-center my-auto h-100 mx-5">
        <Col>
          <Row className={'text-blue-800'}>Appointment Booking Portal</Row>
          <Row>
            It is not unusual for you to experience social, personal, or
            academic problems in your day to day life. The growing pressure to
            excel everywhere often leads to emotional or psychological turmoil,
            thus disturbing one‘s peace of mind. The counselor’s forum is an
            open, receptive and safe forum to share any problem.
          </Row>
        </Col>
        <Col>
          <img src={illustration} />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
