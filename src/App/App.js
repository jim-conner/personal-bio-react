import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
// import 'firebase/auth';
import './App.scss';

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
    <div className='App'>
      {console.warn('test')}
      <h3>{'test'}</h3>
    </div>
  );
}

export default App;
