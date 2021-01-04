import { Modal, Row } from 'react-bootstrap';
import React from 'react';
import CustomButton from '../common/button';

const LoginModal = ({ open = false, onClose = () => {} }) => {
  return (
    <Modal centered show={open} onHide={onClose} className="round-modal">
      <Modal.Body>
        <Row
          className="justify-content-center fs-xl text-blue-800 fw-bold md-2_25"
          style={{ letterSpacing: '1px' }}
        >
          Please Login to continue
        </Row>
        <Row className="justify-content-center">
          <CustomButton
            label="LOGIN with CHANNEL-I"
            color="secondary"
            variant="contained"
            buttonSize="large"
          />
        </Row>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <CustomButton
          buttonSize="large"
          color="secondary"
          variant="text"
          label="Sign In"
        />
      </Modal.Footer>
    </Modal>
  );
};

export default LoginModal;
