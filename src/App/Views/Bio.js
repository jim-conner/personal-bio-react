import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function Bio() {
  return (
    <Container id='bio'>
      <Row>
        <Col>
        <h1>BIO STUFF HERE</h1>
        <p>
        When you click on a link created with react-router-hash-link it will scroll to the element on the page with the id that matches the #hash-fragment in the link. This will also work for elements that are created after an asynchronous data load. Note that you must use React Router BrowserRouter for this to work.
        </p>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Bio;
