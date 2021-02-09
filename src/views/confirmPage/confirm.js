import React from 'react';
import { Row, Col } from 'react-bootstrap';
import illustration from '../../assets/illustrations/confirm.png';
import confirmLeft from '../../assets/illustrations/confirmLeft.png';
import confirmBottom from '../../assets/illustrations/confirmBottom.png';

const ConfirmAppointment = () => {
  const bookingData = useSelector(state => state.booking.bookingData);
  return (
    <div style={{ height: '100vh', position: 'relative' }}>
      <img src={confirmLeft} className="position-absolute mt-5" />
      <img
        src={confirmBottom}
        className="position-absolute fixed-bottom mx-5"
      />
      <Row className="align-items-center my-auto h-100 mx-5">
        <Col className="pr-5">
          <Row className="text-blue-800 fw-500 fs-3_125 md-2">
            <Col>Appointment Confirmed!</Col>
          </Row>
          <Row className="text-grey-600">
            <Col className="lh-1_875 fs-l">
              Congratulations your appointment has been successfully created
              with counselor. Please refer to details below for further
              communication with the counselor.
            </Col>
          </Row>
          <Row className="text-blue-800 fw-200 fs-3_125 md-2">
            <Col>Counsellor</Col>
          </Row>
          <Row className="text-grey-600">
            <Col className="lh-1_875 fs-l"></Col>
          </Row>
          <Row className="text-blue-800 fw-200 fs-3_125 md-2">
            <Col>Contact Details</Col>
          </Row>
          <Row className="text-grey-600">
            <Col className="lh-1_875 fs-l"></Col>
          </Row>
          <Row className="text-grey-600">
            <Col className="lh-1_875 fs-l"></Col>
          </Row>
          <Row className="text-grey-600">
            <Col className="lh-1_875 fs-l"></Col>
          </Row>
          <Row className="text-blue-800 fw-200 fs-3_125 md-2">
            <Col>Appointment Details</Col>
          </Row>
          <Row className="text-grey-600">
            <Col className="lh-1_875 fs-l"></Col>
          </Row>
          <Row className="text-grey-600">
            <Col className="lh-1_875 fs-l"></Col>
          </Row>
          <Row className="text-grey-600">
            <Col className="lh-1_875 fs-l"></Col>
          </Row>
        </Col>
        <Col>
          <img src={illustration} width="100%" />
        </Col>
      </Row>
    </div>
  );
};

export default ConfirmAppointment;
