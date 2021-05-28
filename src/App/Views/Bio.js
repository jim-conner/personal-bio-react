import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Row, Col
} from 'reactstrap';

function Bio() {
  return (
    <Container fluid id='bio'>
      <Row>
        <Col>
          <img
            src='https://raw.githubusercontent.com/jim-conner/joke-gen-react/main/src/assets/joke-gen-react-screenshot.jpg'
          />
        </Col>
        <Col>
        <h1>BIO STUFF HERE</h1>
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
