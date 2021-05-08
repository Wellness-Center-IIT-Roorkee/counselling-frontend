import { Modal, Row } from 'react-bootstrap';
import React from 'react';
import CustomButton from '../common/button';

const ConfirmModal = ({
  open = false,
  onClose = () => {},
  title = 'Are you sure to cancel this appointment?',
  onSubmit = () => {},
  onCancel = () => {},
}) => {
  return (
    <Modal centered show={open} onHide={onClose} className="round-modal">
      <Modal.Body>
        <Row
          className="justify-content-center fs-xl text-blue-800 fw-bold md-2_25"
          style={{ letterSpacing: '1px' }}
        >
          {title}
        </Row>
        <Row className="justify-content-around">
          <CustomButton
            label="No"
            color="secondary"
            variant="outlined"
            buttonSize="large"
            handleSubmit={e => {
              onClose();
              onCancel(e);
            }}
          />
          <CustomButton
            label="Yes"
            color="secondary"
            variant="contained"
            buttonSize="large"
            handleSubmit={onSubmit}
          />
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default ConfirmModal;
