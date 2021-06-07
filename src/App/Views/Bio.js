import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Row, Col
} from 'reactstrap';
import profilePic from '../images/profilePic.jpg';

function Bio() {
  return (
    <Container
    // className='bioContainer'
    fluid id='bio'>
      <Row>
        {/* <Col xs='6'> */}
          <img
          className='portraitCol'
          src={profilePic}>
            </img>
        {/* </Col> */}
        <Col
          className='textCol'
          xs='6'>
        <h3>MEET JIM</h3>
        <h5>Whether as an ESL Teacher, Afterschool Coordinator, State Government Employee, or even Cheesemonger, my professional motivations have always centered around being able to offer help and support to others.</h5>
        <h4>Web Development provides a platform for me to leverage new technologies to continue to fufill my professional goals, while building a new skillset in tech.</h4>
        </Col>
      </Row>
    </Container>
  );
}

Bio.propTypes = {
  fluid: PropTypes.bool
};

export default Bio;
