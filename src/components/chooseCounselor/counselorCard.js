import { Row } from 'react-bootstrap';
import React from 'react';
import { Card, CardActionArea, CardContent } from '@material-ui/core';
import { capitalizeFirstLetter } from '../../helpers/helperFunctions';

const CounselorCard = ({
  className = '',
  image,
  speciality = [],
  name = '',
}) => {
  return (
    <Card className={`w-300 ${className}`}>
      <CardActionArea onClick={() => {}}>
        <div className="p-4">
          <img className="w-100 h-100" src={image} />
        </div>
        <CardContent>
          <div>
            <span className="fw-500 text-grey-800">Speciality:</span>
            <span className="text-grey-600">
              {' '}
              {capitalizeFirstLetter(speciality.join(' '))}
            </span>
          </div>
        </CardContent>
        <Row className="justify-content-center align-items-center fw-500 bg-blue-800 text-white h-2_25">
          {name.toUpperCase()}
        </Row>
      </CardActionArea>
    </Card>
  );
};

export default CounselorCard;
