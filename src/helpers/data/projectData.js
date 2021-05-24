import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  // console.warn(`${dbUrl}/projects.json`);
  axios.get(`${dbUrl}/projects.json`)
    .then((response) => {
      const projectsArray = Object.values(response.data);
      resolve(projectsArray);
      console.warn(projectsArray);
    })
    .catch((error) => reject(error));
});

export default getProjects;
