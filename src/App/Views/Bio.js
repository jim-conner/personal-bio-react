import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Row, Col
} from 'reactstrap';
import profilePic from '../images/profilePic.jpg';

function Bio() {
  return (
    <Container fluid id='bio'>
      <Row>
        <h1>BIO STUFF HERE</h1>
        <Col>
          <img src={profilePic}
          />
        </Col>
        <Col>
        <p>
        When you click on a link created with react-router-hash-link it will scroll to the element on the page with the id that matches the #hash-fragment in the link. This will also work for elements that are created after an asynchronous data load. Note that you must use React Router BrowserRouter for this to work.
        </p>
        </Col>
      </Row>
    </Container>
  );
}

Bio.propTypes = {
  fluid: PropTypes.bool
};

export default Bio;
