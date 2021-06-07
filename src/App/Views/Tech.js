import React from 'react';
import {
  Container, Row
} from 'reactstrap';

function Tech() {
  // const TechRowStyle = styled.Row``;
  return (
    <Container fluid id='tech'
    className ='techContainer'
    >
    {/* <h3 style={{ textAlign: 'center' }}>TECH</h3> */}
    <Row>
    {/* <i className="fab fa-git fa-5x"></i> */}
    <i className="fab fa-js-square fa-5x"></i>
    <i className="fab fa-bootstrap fa-5x"></i>
    <i className="fab fa-github-square fa-5x"></i>
    <i className="fab fa-html5 fa-5x"></i>
    <i className="fab fa-css3-alt fa-5x"></i>
    <i className="fab fa-npm fa-5x"></i>
    <i className="fab fa-react fa-5x"></i>
    </Row>
  </Container>
  );
}

export default Tech;
