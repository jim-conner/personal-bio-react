import React from 'react';
import PropTypes from 'prop-types';

import Bio from './Bio';
import ProjectsView from './Projects';
import Tech from './Tech';
import Contact from './Contact';
import Footer from '../components/Footer';

function Home({ admin, projects, setProjects }) {
  return (
    <div className='homeView' id='/'>
      <ProjectsView
        admin={admin}
        projects={projects}
        setProjects={setProjects}
      />
      <Bio/>
      <Tech/>
      <Contact/>
      <Footer/>
    </div>
  );
}

Home.propTypes = {
  admin: PropTypes.any,
  projects: PropTypes.array,
  setProjects: PropTypes.func
};

export default Home;
