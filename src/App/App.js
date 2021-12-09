import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase';
import Routes from '../helpers/Routes';
import './App.scss';
import NavBar from './components/NavBar';
import { getProjects } from '../helpers/data/projectData';
import Footer from './components/Footer';
// import { signInUser } from '../helpers/auth';

function App() {
  const [projects, setProjects] = useState([]);
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((adminInState) => {
      if (adminInState && (adminInState.uid === process.env.REACT_APP_ADMIN_UID)) {
        setAdmin(true);
        // signInUser();
      } else if (admin || admin === null) {
        setAdmin(false);
      }
    });
  }, []);

  // useEffect(() => {
  //   if (set
  //   signInUser();
  // }, []);

  useEffect(() => {
    getProjects().then((projectsArray) => (setProjects(projectsArray)));
  }, []);

  return (
    <>
      <Router>
        <NavBar
          admin={admin}
        />
        <Routes
          admin={admin}
          projects={projects}
          setProjects={setProjects}
        />
        <Footer/>

      </Router>
    </>
  );
}

export default App;
