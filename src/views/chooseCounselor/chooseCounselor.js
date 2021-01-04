import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CounselorCard from '../../components/chooseCounselor/counselorCard';
import BoxBackground from '../../components/common/background';
import Steps from '../../components/common/steps';
import { counsellors } from '../../helpers/data/counsellorData';

const ChooseCounselor = () => {
  return (
    <BoxBackground>
      <Steps
        steps={2}
        currentStep={1}
        stepLabel="Choose The Counselor"
        description="Please choose the counsellor you want to book your appointment with"
      />
      <Row className="justify-content-center m-0 mx-10p">
        <CounselorCard
          name={counsellors[0].name}
          speciality={counsellors[0].speciality}
          image={counsellors[0].image}
          className="mr-5"
        />
        <CounselorCard
          name={counsellors[0].name}
          speciality={counsellors[0].speciality}
          image={counsellors[0].image}
          className="mr-5"
        />
        <CounselorCard
          name={counsellors[0].name}
          speciality={counsellors[0].speciality}
          image={counsellors[0].image}
        />
      </Row>
    </BoxBackground>
  );
};

export default ChooseCounselor;
