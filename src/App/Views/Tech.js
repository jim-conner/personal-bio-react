/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React from 'react';
// import { Chrono } from 'react-chrono';
import {
  Container
} from 'reactstrap';
import techArray from '../../helpers/data/techData';
// import techJson from '../../helpers/data/techs';
// import test from '../images/techpngs/jquery.png';

function Tech() {
  // const getImgSrc = (imgName) => {
  //   require(`../images/techpngs/${imgName}`);
  // };
  return (
    <Container id='tech'
    className ='techContainer'
    >
    <div className='sectionHeader'>TECH</div>
      <div className='projectHolder' id='tech'>
        {techArray.map((tech) => (
          <div key={tech.id}>
              <img
              className="techImg" alt={tech.name}
              // src={`../images/techpngs/${tech.image}`}
              src={tech.image}
              // src={getImgSrc(tech.image)}
              />
          </div>
        ))}
      </div>
    {/* <Row>
    <i className='fab fa-git fa-5x'></i>
    <i className='fab fa-js-square fa-5x'></i>
    <i className='fab fa-bootstrap fa-5x'></i>
    <i className='fab fa-github-square fa-5x'></i>
    <i className='fab fa-html5 fa-5x'></i>
    <i className='fab fa-css3-alt fa-5x'></i>
    <i className='fab fa-npm fa-5x'></i>
    <i className='fab fa-react fa-5x'></i>
    </Row> */}
  </Container>
  );
}

export default Tech;
