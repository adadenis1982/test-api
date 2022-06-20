import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { getIssues } from '../../redux/actionCreators/issuesAC';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';

function Home() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const searchQuery = `${event.target.owner.value}/${event.target.repo.value}`;

    dispatch(getIssues(searchQuery));

    navigate('/search')
  }

  return (
    <Form className="container" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicOwner">
        <Form.Label>Owner</Form.Label>
        <Form.Control type="text" placeholder="Enter owner"  name="owner" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicRepo">
        <Form.Label>Repo</Form.Label>
        <Form.Control type="text" placeholder="Enter repo" name="repo" required/>
      </Form.Group>
      <Button variant="dark" type="submit">
      Search
      </Button>
    </Form>
  );
}

export default Home;
