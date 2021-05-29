import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleProject } from '../../helpers/data/projectData';

function SingleProject() {
  const [project, setSingleProject] = useState({});
  const { firebaseKey } = useParams();

  useEffect(() => {
    getSingleProject(firebaseKey)
      .then(setSingleProject);
  }, []);

  return (
    <div>
      <h1>{project.title}</h1>
    </div>
  );
}

export default SingleProject;
