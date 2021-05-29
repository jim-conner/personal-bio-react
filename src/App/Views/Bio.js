import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Row, Col
} from 'reactstrap';
import profilePic from '../images/profilePic.jpg';

function Bio() {
  return (
    <Container
    className='bioContainer'
    fluid id='bio'>
        <h1>Meet Jim</h1>
      <Row>
        <Col sm='6'>
          <img
          className='portrait'
          src={profilePic}>
            </img>
        </Col>
        <Col sm='6'>
        <h4>Whether as an ESL Teacher, Afterschool Coordinator, State Government Employee, or even Cheesemonger, my main motivation in my professional life has always be able to offer help and support to others.</h4>
        <h5>Web Development provides a platform for me to leverage new technologies to continue to fufill my professional goals, while building a new skillset in tech.</h5>
        </Col>
      </Row>
    </Container>
  );
}

Bio.propTypes = {
  fluid: PropTypes.bool
};

export default Bio;
