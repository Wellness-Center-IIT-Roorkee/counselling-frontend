import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
const Steps = ({
  steps,
  currentStep,
  stepLabel,
  isBack = true,
  onBack = () => {},
  description = '',
}) => {
  return (
    <>
      <Row className="p-4 m-0 mt-4 mx-5">
        <Col>
          {isBack && (
            <span onClick={onBack} className="cursor-pointer">
              <ArrowBackIosIcon className="text-grey-400" />
              <span className="text-grey-400">Back</span>
            </span>
          )}
        </Col>
        <Col>
          <Row className="justify-content-end text-grey-400">{`STEP ${currentStep}/${steps}`}</Row>
          <Row className="justify-content-end text-grey-400">{stepLabel}</Row>
        </Col>
      </Row>
      <Row className="p-4 m-0 mt-4 mx-5">
        <Col>
          <Row className="align-items-center">
            <span className="text-primary fs-2 mr-1">{`Step: ${currentStep}`}</span>
            <span className="text-primary fs-2 fw-300">{stepLabel}</span>
          </Row>
          <Row className="fs-l text-grey-600">{description}</Row>
        </Col>
      </Row>
    </>
  );
};

export default Steps;
