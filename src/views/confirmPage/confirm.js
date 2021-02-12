import { React, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Container } from 'react-bootstrap';
import illustration from '../../assets/illustrations/confirm.png';
import { useHistory } from 'react-router';
import Loader from '../../components/common/loader';
import BoxBackground from '../../components/common/background';
import { useMediaQuery } from '@material-ui/core';

const ConfirmAppointment = () => {
  const bookingData = useSelector(state => state.booking.bookingData);
  const history = useHistory();
  const smbreakpoint = useMediaQuery(theme => theme.breakpoints.up('sm'));
  useEffect(() => {
    if (!bookingData) {
      history.push('/');
    }
  }, []);
  return (
    <BoxBackground right={false}>
      <Container>
        {Object.keys(bookingData).length > 0 ? (
          <Row className="align-items-center mt-5">
            <Col className="">
              <Row className="text-blue-800 fw-500 fs-3_125 md-1">
                <Col>Appointment Confirmed!</Col>
              </Row>
              <Row className="text-grey-600 md-2">
                <Col className="lh-1_875 fs-l">
                  Congratulations your appointment has been successfully created
                  with counselor. Please refer to details below for further
                  communication with the counselor.
                </Col>
              </Row>
              <Row className="text-blue-800 fw-800 fs-1_500">
                <Col>Counsellor</Col>
              </Row>
              <Row className="text-grey-600">
                <Col className="lh-1_875 fs-l">
                  Name : {bookingData.counsellor.user.name}
                </Col>
              </Row>
              <Row className="text-grey-600">
                <Col className="lh-1_875 fs-l">
                  Webex Link :{' '}
                  <a href={bookingData.counsellor.webex_link} target="_blank">
                    {bookingData.counsellor.webex_link}
                  </a>
                </Col>
              </Row>
              <Row className="text-blue-800 fw-800 fs-1_500">
                <Col>Contact Details</Col>
              </Row>
              <Row className="text-grey-600">
                <Col className="lh-1_875 fs-l">
                  Mobile : {bookingData.counsellor.user.phone_number}
                </Col>
              </Row>
              <Row className="text-grey-600">
                <Col className="lh-1_875 fs-l">
                  Email : {bookingData.counsellor.user.email}
                </Col>
              </Row>

              <Row className="text-blue-800 fw-800 fs-1_500">
                <Col>Appointment Details</Col>
              </Row>
              <Row className="text-grey-600">
                <Col className="lh-1_875 fs-l">
                  Counselling Medium : {bookingData.counselling_medium}
                </Col>
              </Row>
              <Row className="text-grey-600">
                <Col className="lh-1_875 fs-l">
                  Date : {bookingData.counselling_date}
                </Col>
              </Row>
              <Row className="text-grey-600">
                <Col className="lh-1_875 fs-l">
                  Time : {bookingData.counselling_slot.slot}
                </Col>
              </Row>
              <Row className="text-grey-600">
                <Col className="lh-1_875 fs-l"></Col>
              </Row>
            </Col>
            {smbreakpoint && (
              <Col>
                <img src={illustration} width="100%" />
              </Col>
            )}
          </Row>
        ) : (
          <Loader />
        )}
      </Container>
    </BoxBackground>
  );
};

export default ConfirmAppointment;
