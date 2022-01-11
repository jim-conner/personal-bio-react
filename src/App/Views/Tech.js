/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React from 'react';
// import { Chrono } from 'react-chrono';
import {
  Container
  // Tooltip
} from 'reactstrap';
import techArray from '../../helpers/data/techData';
// import techJson from '../../helpers/data/techs';
// import test from '../images/techpngs/jquery.png';

function Tech() {
  // const getImgSrc = (imgName) => {
  //   require(`../images/techpngs/${imgName}`);
  // };
  // const [toolTipOpen, setToolTipOpen] = useState(false);
  // const toggle = () => setToolTipOpen(!toolTipOpen);

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  return (
    <Container id='tech'
    className ='techContainer'
    >
    <div className='sectionHeader'>TECH</div>
      <div className='projectHolder' id='tech'>
        {techArray.map((tech) => (
          <div
            key={tech.id}
            id="techDiv"
          >
            <a
              onClick={() => openInNewTab(tech.link)}
            >
              <img
              className="techImg"
               alt={tech.name}
              src={tech.image}
              />
            </a>
            {/* <Tooltip
              flip
              target="techDiv"
              toggle={toggle}
              isOpen={toolTipOpen}
            >
              {tech.name}
            </Tooltip> */}
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
