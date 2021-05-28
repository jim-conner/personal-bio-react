import React from 'react';
import {
  Container, Row
} from 'reactstrap';

function Contact() {
  return (
    <Container fluid id='contact'>
    <Row>
    <a
      className='btn btn-floating'
      href='https://www.linkedin.com/in/jim-conner'
      style={{ display: 'table-cell' }}
      target = '_blank'
      rel = 'noopener noreferrer'
      >
        <i className="fab fa-linkedin fa-10x" ></i>
      </a>
    <a
      className='btn btn-floating'
      href='mailto:jamesdavidconner@gmail.com'>
      <i className="fas fa-envelope fa-10x"></i>
      {/* jamesdavidconner@gmail.com */}
    </a>
      <a
      className='btn btn-floating'
      href='https://github.com/jim-conner'
      style={{ display: 'table-cell' }}
      target = '_blank'
      rel = 'noopener noreferrer'
      >
      <i className="fab fa-github-square fa-10x"></i>
    </a>
    </Row>
  </Container>
  );
}

export default Contact;
