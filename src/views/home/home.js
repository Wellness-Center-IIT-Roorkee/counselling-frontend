import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import illustration from '../../assets/illustrations/Group 6.svg';
import CustomButton from '../../components/common/button';
import LoginModal from '../../components/home/loginModal';

const Home = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const isLoggedIn = useSelector(state => state.users.isLoggedIn);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/login' && isLoggedIn === false) {
      setIsLoginModalOpen(true);
    }
  }, []);

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
          <Row className="mt-4 ">
            <CustomButton
              className="mr-4 ml-3"
              color="secondary"
              variant="contained"
              label="BOOK APPOINTMENTI"
              handleSubmit={() => {
                isLoggedIn
                  ? history.push('/book_appointment')
                  : setIsLoginModalOpen(true);
              }}
            />

            <CustomButton
              className="ml-5"
              color="secondary"
              variant="outlined"
              label="Know the counselors"
            />
          </Row>
        </Col>
        <Col>
          <img src={illustration} width="100%" />
        </Col>
      </Row>
      <LoginModal
        open={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </div>
  );
};

export default Home;
