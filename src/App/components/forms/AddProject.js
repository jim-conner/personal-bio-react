import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Form, FormGroup, Label, Input
} from 'reactstrap';

function AddEditProjectForm() {
  // const [project, setProject] = useState({
  //   title: title || '',
  //   firebaseKey: firebaseKey || null,
  //   image: image || '',
  //   gitHubUrl: gitHubUrl || '',
  //   netlifyUrl: netlifyUrl || ''
  // });
  // console.warn(setProject(project));
  // const handleInputChange = (e) => {
  //   setProject((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  // };

  return (
  <div>
    <Form>
      <FormGroup>
        <Label for="title">App Title</Label>
        <Input type="text" name="title"
        placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="deployUrl">Deploy Link</Label>
        <Input type="Url" name="deployedLink"
        placeholder="Enter Deployed Site URL" />
      </FormGroup>
      <FormGroup>
        <Label for="gitHubUrl">GitHub Repo Link</Label>
        <Input type="Url" name="gitHubLink"
        placeholder="Enter GitHub Repo URL"/>
      </FormGroup>
      <FormGroup>
        <Label for="description">Description</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <FormGroup tag="fieldset">
        <legend>Active?</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Yes
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            No
          </Label>
        </FormGroup>

      </FormGroup>
      <Button color= 'primary' type='submit'>Submit</Button>
    </Form>
  </div>
  );
}

AddEditProjectForm.propTypes = {
  projectObj: PropTypes.object
};

export default AddEditProjectForm;
