import { FormLabel, InputLabel, Select, TextField } from '@material-ui/core';
import { React, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Redirect, useHistory } from 'react-router';
import CounselorCard from '../../components/chooseCounselor/counselorCard';
import BoxBackground from '../../components/common/background';
import CustomButton from '../../components/common/button';
import Steps from '../../components/common/steps';
import { counsellors } from '../../helpers/data/counsellorData';

export default function BookAppointment() {
  const [activeStep, setActiveStep] = useState(0);
  const history = useHistory();
  const [state, setState] = useState({
    age: '',
    name: 'hai',
  });

  const handleChange = event => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const handleNext = () => {
    switch (activeStep) {
      case 0:
        setActiveStep(prevActiveStep => prevActiveStep + 1);
        break;
      case 1:
        setActiveStep(prevActiveStep => prevActiveStep + 1);
        break;
      default:
        return null;
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep(prevActiveStep => prevActiveStep - 1);
    } else {
      history.goBack();
    }
  };

  const getStepContent = step => {
    switch (step) {
      case 0:
        return (
          <div className="justify-content-center m-0 mx-10p">
            <Steps
              steps={2}
              currentStep={1}
              stepLabel="Choose The Counselor"
              onBack={handleBack}
              description="Please choose the counsellor you want to book your appointment with"
            />
            <Row className="justify-content-md-center" onClick={handleNext}>
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
          </div>
        );
      case 1:
        return (
          <div className="justify-content-center m-0 mx-10p">
            <Steps
              steps={2}
              currentStep={2}
              stepLabel="Enter the Appointment Details"
              onBack={handleBack}
              description="Please enter the details of appointment with SHIKHA JAIN"
            />
            <div className="p-4 m-0 mt-4 mx-5">
              <div>
                <FormLabel>Medium of Counselling</FormLabel>
                <InputLabel htmlFor="medium-of-counselling"></InputLabel>
                <Select
                  native
                  variant="outlined"
                  value={state.age}
                  onChange={handleChange}
                  style={{ width: '100%' }}
                  inputProps={{
                    name: 'age',
                    id: 'medium-of-counselling',
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </Select>
              </div>
              <div className="mt-4">
                <FormLabel required>Choose Date</FormLabel>
                <div>
                  <TextField
                    variant="outlined"
                    style={{ width: '100%' }}
                    name="deadline"
                    type="date"
                  />
                </div>
              </div>
              <div className="mt-4">
                <FormLabel>Choose Slot</FormLabel>
                <InputLabel htmlFor="choose-slot"></InputLabel>
                <Select
                  native
                  variant="outlined"
                  value={state.age}
                  onChange={handleChange}
                  style={{ width: '100%' }}
                  inputProps={{
                    name: 'age',
                    id: 'choose-slot',
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </Select>
              </div>
              <CustomButton
                className="mt-4"
                color="secondary"
                variant="contained"
                label="CONFIRM APPOINTMENTI"
                handleSubmit={handleNext}
              />
            </div>
          </div>
        );
      case 2:
        return <Redirect to="confirm" />;
    }
  };

  return <BoxBackground>{getStepContent(activeStep)}</BoxBackground>;
}
