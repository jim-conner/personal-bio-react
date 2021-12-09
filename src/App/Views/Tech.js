import React from 'react';
import { Chrono } from 'react-chrono';
import {
  CardImg,
  Container, Row
} from 'reactstrap';

function Tech() {
  // const TechRowStyle = styled.Row``;
  const items = [
    <div key='1'>
    <div style={{ width: '250px', height: '250px' }}>
      <CardImg
            alt='text' src='https://i.imgur.com/jwqeJaP.png'
          />
    </div>
  </div>
    // {
    //   title: 'May 1940',
    //   cardTitle: 'Dunkirk',
    //   url: 'http://www.history.com',
    //   cardSubtitle: 'Men of the British Expeditionary Force (BEF) wade out to..',
    //   cardDetailedText: 'Men of the British Expeditionary Force (BEF) wade out to..',
    //   media: {
    //     type: 'IMAGE',
    //     source: {
    //       url: 'https://api.time.com/wp-content/uploads/2018/06/dinosaurs-jurassic-world-fact-check-3.jpg?w=800&quality=85'
    //     }
    //   }
    // }
  ];
  return (
    <Container id='tech'
    className ='techContainer'
    >
    {/* <h3 style={{ textAlign: 'center' }}>TECH</h3> */}
    <Chrono
        items={items}
        mode='VERTICAL_ALTERNATING'
        scrollable
      />
    <Row>
    {/* <i className='fab fa-git fa-5x'></i> */}
    <i className='fab fa-js-square fa-5x'></i>
    <i className='fab fa-bootstrap fa-5x'></i>
    <i className='fab fa-github-square fa-5x'></i>
    <i className='fab fa-html5 fa-5x'></i>
    <i className='fab fa-css3-alt fa-5x'></i>
    <i className='fab fa-npm fa-5x'></i>
    <i className='fab fa-react fa-5x'></i>
    </Row>
  </Container>
  );
}

export default Tech;
