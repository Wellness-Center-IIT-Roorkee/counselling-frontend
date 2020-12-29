import { Row } from 'react-bootstrap';
import React from 'react';
import { Card, CardActionArea, CardContent } from '@material-ui/core';
import image from '../../assets/counsellors_pictures/image_5.png';
import CustomButton from '../common/button';

const CounselorCard = () => {
  return (
    <Card className="w-300">
      <CardActionArea onClick={() => {}}>
        <div className="p-4">
          <img className="w-100 h-100" src={image} />
        </div>
        <CardContent>
          <div>
            <span className="fw-500 text-grey-800">Speciality:</span>
            <span className="text-grey-600">
              {' '}
              Homesickness, academics, relationship issues, low self-esteem,
              child abuses, time management, OCD, and other adjustment problems
            </span>
          </div>
        </CardContent>
        <Row className="justify-content-center align-items-center fw-500 bg-blue-800 text-white h-2_25">
          fdsa
        </Row>
      </CardActionArea>
    </Card>
  );
};

export default CounselorCard;
