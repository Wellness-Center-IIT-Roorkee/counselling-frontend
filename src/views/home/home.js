import { useMediaQuery } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { toastErrorMessage } from '../../actions/toastActions';
import illustration from '../../assets/illustrations/Group 6.svg';
import BookingCard from '../../components/booking/bookingCard';
import CustomButton from '../../components/common/button';
import LoginModal from '../../components/home/loginModal';

const Home = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const isLoggedIn = useSelector(state => state.users.isLoggedIn);
  const bookingData = useSelector(state => state.booking.bookingData);
  const history = useHistory();
  const location = useLocation();

  const smbreakpoint = useMediaQuery(theme => theme.breakpoints.up('sm'));

  useEffect(() => {
    if (location.pathname === '/login' && isLoggedIn === false) {
      setIsLoginModalOpen(true);
    }
  }, []);

  return (
    <Container>
      <Row className="align-items-center my-auto mt-5 ">
        <Col>
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
          <Row className="mt-4 md-2">
            <Col>
              <CustomButton
                color="secondary"
                variant="contained"
                label="BOOK APPOINTMENT"
                handleSubmit={() => {
                  isLoggedIn
                    ? history.push('/book_appointment')
                    : setIsLoginModalOpen(true);
                }}
              />
            </Col>
            <Col>
              <CustomButton
                color="secondary"
                variant="outlined"
                label="Know the counselors"
              />
            </Col>
          </Row>
          {bookingData ? (
            <Row className="text-blue-800 fw-500 fs-2_500 md-2 align-items-center">
              <Col>Your Booking:</Col>
            </Row>
          ) : (
            ''
          )}
          <Row>
            {bookingData ? (
              <BookingCard
                image={bookingData.counsellor.user.display_picture}
                name={bookingData.counsellor.user.name}
                date={bookingData.counselling_date}
                time={bookingData.counselling_slot.slot}
              />
            ) : (
              ''
            )}
          </Row>
        </Col>
        {smbreakpoint && (
          <Col>
            <img src={illustration} width="100%" />
          </Col>
        )}
        <LoginModal
          open={isLoginModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
        />
      </Row>
    </Container>
  );
};

export default Home;
