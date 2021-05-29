import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/projects.json`)
    .then((response) => {
      const projectsArray = Object.values(response.data);
      resolve(projectsArray);
    })
    .catch((error) => reject(error));
});

const createProject = (project) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/projects.json`, project)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/projects/${response.data.name}.json`, body)
        .then(() => {
          getProjects().then((projectsArray) => resolve(projectsArray));
        });
    }).catch((error) => reject(error));
});

const deleteProject = (project) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/projects/${project.firebaseKey}.json`)
    .then(() => getProjects().then((projectsArray) => resolve(projectsArray)))
    .catch((error) => reject(error));
});

const updateProject = (project) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/projects/${project.firebaseKey}.json`, project)
    .then(() => getProjects().then(resolve))
    .catch((error) => reject(error));
});

const getSingleProject = (project) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/projects/${project.firebaseKey}.json`)
    .then((response) => resolve((response.data)))
    .catch((error) => reject(error));
});

export {
  getProjects, createProject, deleteProject, updateProject, getSingleProject
};
