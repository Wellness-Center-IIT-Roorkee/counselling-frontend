import { Modal, Row } from 'react-bootstrap';
import CustomButton from '../common/button';
import { useDispatch} from 'react-redux';
import { useHistory } from 'react-router';
import { confirmBooking } from '../../actions/bookingActions';

const BookingModal = ({ open = false, onClose = () => {} }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <Modal centered show={open} onHide={onClose} className="round-modal">
      <Modal.Body>
        <Row
          className="justify-content-center fs-l text-blue-800 fw-bold m-auto"
          style={{ letterSpacing: '1px' }}
        >
          Request for appointment
        </Row>
        <Row
          className="justify-content-center fs-l text-grey-600 fw-bold m-auto"
          style={{ letterSpacing: '1px' }}
        >
          Our Team will call you within 30 minutes to fix date and time of your appointment. Please take all the calls coming from 01332-284028 and for any other help you can also call on 01332-284028
        </Row>
        <Row
          className="justify-content-center fs-l text-danger fw-bold m-auto"
          style={{ letterSpacing: '1px' }}
        >
          Note-1: It is only valid for Institute Working Days
	  Note-2: Only valid for Wellness Centre's Timing i.e "10AM-7PM"
        </Row>
        <Row className="justify-content-center">
          <CustomButton
            label="Confirm To Book"
            color="secondary"
            variant="contained"
            buttonSize="large"
            handleSubmit={() => {
                dispatch(confirmBooking(null, ()=>{
                    history.push('/');
                }))
            }}
          />
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default BookingModal;

