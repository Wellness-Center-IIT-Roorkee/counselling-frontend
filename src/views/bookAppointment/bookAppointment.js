import { React, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import { Redirect, useHistory } from 'react-router';
import { FormHelperText, FormLabel, InputLabel } from '@material-ui/core';
import Select from 'react-select';
import * as yup from 'yup';
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
import validateForm from '../../helpers/validateForm';
import { toastErrorMessage } from '../../actions/toastActions';

const schema = yup.object().shape({
  counselling_date: yup.string().required(),
  counsellor: yup.string().required(),
  counselling_slot: yup.string().required(),
  counselling_medium: yup.string().required(),
});

export default function BookAppointment() {
  const [activeStep, setActiveStep] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();
  const bookingData = useSelector(state => state.booking.bookingData);
  useEffect(() => {
    if (bookingData) {
      dispatch(toastErrorMessage('You already have a pending booking'));
      history.push('/');
    }
  }, []);
  const [validationErrorList, setValidationErrorList] = useState([]);

  useEffect(() => {
    dispatch(getCounsellorList());
  }, []);

  const [slotOptions, setSlotOptions] = useState([]);

  const [booking, setBooking] = useState({
    counsellingMedium: {},
    slot: {},
    date: new Date(),
    counsellor: {},
  });

  const handleNext = async () => {
    switch (activeStep) {
      case 0:
        setActiveStep(prevActiveStep => prevActiveStep + 1);
        break;
      case 1:
        const bookingData = {
          counselling_date: getFormattedDate(booking.date),
          counsellor: booking.counsellor.id,
          counselling_slot: booking.slot.id,
          counselling_medium: booking.counsellingMedium.label,
        };
        const result = await validateForm(schema, bookingData);
        if (!result.isError) {
          dispatch(confirmBooking(bookingData, handleSuccess));
        } else {
          const valErrors = result.valErrors;
          setValidationErrorList(valErrors);
        }
        break;
      default:
        return null;
    }
  };

  const handleCounsellorChange = counsellor => {
    setBooking({
      ...booking,
      counsellor: counsellor,
    });
    handleNext();
  };

  const counsellorList = useSelector(state => state.counsellor.counsellorsData);
  const counsellorListCards =
    counsellorList &&
    counsellorList.map(counsellor => {
      return (
        <CounselorCard
          key={counsellor.id}
          name={counsellor.user.name}
          speciality={counsellor.speciality}
          image={counsellor.user.display_picture}
          days={counsellor.days_available}
          onClick={() => handleCounsellorChange(counsellor)}
        />
      );
    });

  function disabledDates(date) {
    const todayDate = new Date();
    return (
      date.getTime() - todayDate.getTime() < 0 ||
      date.getTime() - todayDate.getTime() > 604800000 ||
      !booking.counsellor.days_available.includes(weekdays[date.getDay()])
    );
  }

  const handleOnBlur = key => event => {
    event.preventDefault();
    const newValidationErrorList = validationErrorList.filter(
      s => s.path !== key
    );
    setValidationErrorList(newValidationErrorList);
  };

  const handleMediumChange = (e, f) => {
    setBooking({
      ...booking,
      counsellingMedium: counsellingMedium.find(x => x.value === e.value),
    });
  };

  const handleSlotChange = e => {
    setBooking({
      ...booking,
      slot: slotOptions.find(x => x.id === e.id),
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
          <Container>
            <Steps
              steps={2}
              currentStep={1}
              stepLabel="Choose The Counselor"
              onBack={handleBack}
              description="Please choose the counsellor you want to book your appointment with"
            />
            <Row className="justify-content-center" style={{ gap: '1rem' }}>
              {counsellorListCards}
            </Row>
          </Container>
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
                  value={counsellingMedium.find(
                    medium => medium.value === booking.counsellingMedium.value
                  )}
                  onChange={handleMediumChange}
                  options={counsellingMedium}
                  onFocus={handleOnBlur('counselling_medium')}
                  onBlur={handleOnBlur('counselling_medium')}
                />
                {validationErrorList.some(
                  err => err.path === 'counselling_medium'
                ) ? (
                  <FormHelperText error={true}>
                    {
                      validationErrorList.find(
                        err => err.path == 'counselling_medium'
                      ).message
                    }
                  </FormHelperText>
                ) : null}
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
                      shouldDisableDate={disabledDates}
                    />
                  </MuiPickersUtilsProvider>
                </div>
              </div>
              <div className="mt-4">
                <FormLabel>Choose Slot</FormLabel>
                <InputLabel htmlFor="choose-slot"></InputLabel>
                <Select
                  value={slotOptions.find(
                    option => option.id === booking.slot.id
                  )}
                  onChange={handleSlotChange}
                  style={{ width: '100%' }}
                  inputProps={{
                    name: 'slot',
                    id: 'choose-slot',
                  }}
                  options={slotOptions}
                  getOptionLabel={option => option.slot}
                  getOptionValue={option => option.id}
                  onFocus={handleOnBlur('counselling_slot')}
                  onBlur={handleOnBlur('counselling_slot')}
                />
                {validationErrorList.some(
                  err => err.path === 'counselling_slot'
                ) ? (
                  <FormHelperText error={true}>
                    {
                      validationErrorList.find(
                        err => err.path == 'counselling_slot'
                      ).message
                    }
                  </FormHelperText>
                ) : null}
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
