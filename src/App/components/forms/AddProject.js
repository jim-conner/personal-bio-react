import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import { createProject } from '../../../helpers/data/projectData';

function AddEditProjectForm({ setProjects, ...projectObj }) {
  const [project, setProject] = useState({
    title: projectObj?.title || '',
    firebaseKey: projectObj?.firebaseKey || null,
    image: projectObj?.image || '',
    gitHubUrl: projectObj?.gitHubUrl || '',
    deployUrl: projectObj?.deployUrl || ''
  });

  const handleInputChange = (e) => {
    setProject((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createProject(project).then((projectsArray) => (setProjects(projectsArray)));
  };

  return (
  <div>
    <Form autoComplete='off' onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="title">App Title</Label>
        <Input type="text" name="title"
        placeholder="with a placeholder"
        value={project.title}
        onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="title">Image</Label>
        <Input type="Url" name="image"
        placeholder="Add a screenshot"
        value={project.image}
        onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="deployUrl">Deploy Link</Label>
        <Input type="Url" name="deployUrl"
        placeholder="Enter Deployed Site URL"
        value={project.deployUrl}
        onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="gitHubUrl">GitHub Repo Link</Label>
        <Input type="Url" name="gitHubUrl"
        placeholder="Enter GitHub Repo URL"
        value={project.gitHubUrl}
        onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="description">Description</Label>
        <Input type="textarea" name="description"
        placeholder="Describe the Project"
        value={project.description}
        onChange={handleInputChange}
        />
      </FormGroup>
      {/* <FormGroup tag="fieldset">
        <legend>Available?</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1"
              value={project.available} need to work on this later T/F
            />{' '}
            Yes
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            No
          </Label>
        </FormGroup>
      </FormGroup> */}
      <Button color= 'primary' type='submit'>Submit</Button>
    </Form>
  </div>
  );
}

AddEditProjectForm.propTypes = {
  setProjects: PropTypes.func,
  projectObj: PropTypes.object
};

export default AddEditProjectForm;
