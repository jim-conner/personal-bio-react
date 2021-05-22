import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase';
import Routes from '../helpers/Routes';

// import 'firebase/auth';
import './App.scss';
import NavBar from './components/NavBar';

function App() {
  const [user, setUser] = useState(null);
  // const [players, setProjects] = useState([]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userInState) => {
      if (userInState) {
        const userInfoObject = {
          fullName: userInState.displayName,
          profileImage: userInState.photoURL,
          uid: userInState.uid,
          userName: userInState.email.split('@')[0]
        };
        setUser(userInfoObject);
        // getProjects(userInState.uid).then((playersArray) => setProjects(playersArray));
      } else if (user || user === null) {
        setUser(false);
        // setProjects([]);
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
