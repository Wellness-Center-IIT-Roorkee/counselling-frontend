import { Row } from 'react-bootstrap';
import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  useMediaQuery,
} from '@material-ui/core';
import { capitalizeFirstLetter } from '../../helpers/helperFunctions';
import { useHistory } from 'react-router';
import CustomButton from '../common/button';

const BookingCard = ({
  className = '',
  image,
  time = null,
  date = null,
  name = '',
  onCancelAppointment = () => {},
}) => {
  const history = useHistory();
  const smbreakpoint = useMediaQuery(theme => theme.breakpoints.up('sm'));

  return (
    <Card className={` ${className}`} onClick={() => history.push('/confirm')}>
      <CardActionArea onClick={() => {}} style={{ display: 'flex' }}>
        {smbreakpoint && (
          <div className="p-4">
            <img className="w-10 h-10" src={image} />
          </div>
        )}
        <CardContent>
          <div>
            <span className="fw-500 text-grey-800">Name:</span>
            <span className="text-grey-600"> {name.toUpperCase()}</span>
          </div>
          <div>
            <span className="fw-500 text-grey-800">Date:</span>
            <span className="text-grey-600"> {date}</span>
          </div>
          <div>
            <span className="fw-500 text-grey-800">Time:</span>
            <span className="text-grey-600"> {time}</span>
          </div>
          <div>
            <span className="fw-500 text-grey-800">Status:</span>
            <span className="text-grey-600"> Pending</span>
          </div>
          <div className="mt-2">
            <CustomButton
              color="secondary"
              variant="contained"
              label="Cancel Appointment"
              handleSubmit={e => {
                onCancelAppointment();
                e.stopPropagation();
              }}
            />
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BookingCard;
