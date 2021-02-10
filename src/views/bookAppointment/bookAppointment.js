import { React, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row } from 'react-bootstrap';
import { Redirect, useHistory } from 'react-router';
import axios from 'axios';
import { FormLabel, InputLabel, Select, TextField } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { getCounsellorList } from '../../actions/counsellorActions';
import CounselorCard from '../../components/chooseCounselor/counselorCard';
import BoxBackground from '../../components/common/background';
import CustomButton from '../../components/common/button';
import Steps from '../../components/common/steps';
import { counsellingMedium, weekdays } from '../../constants';
import apiClient from '../../helpers/apiClient';
import { BOOKING_APIS } from '../../urls';
import { getFormattedDate } from '../../helpers/helperFunctions';
import { confirmBooking } from '../../actions/bookingActions';

export default function BookAppointment() {
  const [activeStep, setActiveStep] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getCounsellorList());
  }, []);

  const [slotOptions, setSlotOptions] = useState([]);

  const [booking, setBooking] = useState({
    counsellingMedium: {},
    slot: { id: '0', slot: 'none' },
    date: new Date(),
    counsellor: {},
  });

  const handleCounsellorChange = counsellor => {
    setBooking({
      ...booking,
      counsellor: counsellor,
    });
  };

  const counsellorList = useSelector(state => state.counsellor.counsellorsData);
  const counsellorListCards =
    counsellorList &&
    counsellorList.map(counsellor => {
      return (
        <div onClick={() => handleCounsellorChange(counsellor)}>
          <CounselorCard
            key={counsellor.id}
            name={counsellor.user.name}
            speciality={counsellor.speciality}
            image={counsellor.user.display_picture}
            days={counsellor.days_available}
            className="mr-5"
          />
        </div>
      );
    });

  function disabledDates(date) {
    const todayDate = new Date();
    return (
      date.getTime() - todayDate.getTime() < 0 ||
      date.getTime() - todayDate.getTime() > 604800000 ||
      !booking.counsellor.days_available.includes(weekdays[date.getDay()])
    );
    // return date.getDay() === 0 || date.getDay() === 6;
  }
  const handleMediumChange = e => {
    setBooking({
      ...booking,
      counsellingMedium: counsellingMedium.find(x => x.key === e.target.value),
    });
  };

  const handleSlotChange = e => {
    setBooking({
      ...booking,
      slot: slotOptions.find(x => x.id == e.target.value),
    });
  };

  const handleDateChange = date => {
    setBooking({
      ...booking,
      date: date,
    });

    const data = {
      counsellor: booking.counsellor.id,
      counselling_date: getFormattedDate(date),
    };
    const url = BOOKING_APIS.availableSlots;
    apiClient
      .post(url, data)
      .then(res => {
        setSlotOptions([...res.data]);
      })
      .catch(err => {});
  };

  const handleNext = () => {
    switch (activeStep) {
      case 0:
        setActiveStep(prevActiveStep => prevActiveStep + 1);
        break;
      case 1:
        const bookingData = {
          counselling_date: getFormattedDate(booking.date),
          counsellor: booking.counsellor.id,
          counselling_slot: booking.slot.id,
          counselling_medium: booking.counsellingMedium.text,
        };
        dispatch(confirmBooking(bookingData, handleSuccess));
        break;
      default:
        return null;
    }
  };

  const handleSuccess = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
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
              {counsellorListCards}
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
              description={
                `Please enter the details of appointment with ` +
                booking.counsellor.user.name
              }
            />
            <div className="p-4 m-0 mt-4 mx-5">
              <div>
                <FormLabel>Medium of Counselling</FormLabel>
                <InputLabel htmlFor="medium-of-counselling"></InputLabel>
                <Select
                  native
                  variant="outlined"
                  name="counsellingMedium"
                  value={booking.counsellingMedium.key}
                  onChange={handleMediumChange}
                  style={{ width: '100%' }}
                  inputProps={{
                    name: 'counsellingMedium',
                    id: 'medium-of-counselling',
                  }}
                >
                  <option aria-label="None" value="0" />
                  {counsellingMedium.map(medium => {
                    return <option value={medium.key}>{medium.text}</option>;
                  })}
                </Select>
              </div>
              <div className="mt-4">
                <FormLabel required>Choose Date</FormLabel>
                <div>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker
                      variant="outlined"
                      style={{ width: '100%' }}
                      name="deadline"
                      onChange={handleDateChange}
                      value={booking.date}
                      // type='date'
                      shouldDisableDate={disabledDates}
                    />
                  </MuiPickersUtilsProvider>
                </div>
              </div>
              <div className="mt-4">
                <FormLabel>Choose Slot</FormLabel>
                <InputLabel htmlFor="choose-slot"></InputLabel>
                <Select
                  native
                  variant="outlined"
                  name="slot"
                  value={booking.slot.id}
                  onChange={handleSlotChange}
                  style={{ width: '100%' }}
                  inputProps={{
                    name: 'slot',
                    id: 'choose-slot',
                  }}
                >
                  <option aria-label="None" value="" />
                  {slotOptions.map(slot => {
                    return <option value={slot.id}>{slot.slot}</option>;
                  })}
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
