import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase';
import Routes from '../helpers/Routes';
import './App.scss';
import NavBar from './components/NavBar';

function App() {
  const [admin, setAdmin] = useState(null);
  // const [loggedInUser, setLoggedInUser] = useState(null);
  // const [players, setProjects] = useState([]); dont put this here dude!

  useEffect(() => {
    firebase.auth().onAuthStateChanged((adminInState) => {
      if (adminInState && (adminInState.uid === process.env.REACT_APP_ADMIN_UID)) {
        setAdmin(true);
      } else if (admin || admin === null) {
        setAdmin(false);
        // setLoggedInUser(false);
      }
    });
  }, []);
  return (
    <>
      <Router>
        <NavBar />
        <Routes/>
      </Router>
    </>
  );
}

export default App;
// const userInfoObject = {
//   fullName: userInState.displayName,
//   profileImage: userInState.photoURL,
//   uid: userInState.uid,
//   userName: userInState.email.split('@')[0]
// setUser(userInfoObject);
// getProjects(userInState.uid).then((playersArray) => setProjects(projectsArray));
