import React from 'react';
import { Card, CardImg } from 'reactstrap';
// import PropTypes from 'prop-types';

function TechCard() {
  return (
    <Card body
        className='customizedCard'
        color='transparent'
    >
      <CardImg
      top
      width='100%' 
      height='200px'
      // src={}
      alt='Tech Card'
      />
    </Card>
  );
}

// TechCard.propTypes = {

// };

export default TechCard;
