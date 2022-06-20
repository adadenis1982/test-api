import React, { useState, useEffect } from 'react';
import { Table, Button, Form, Nav } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Search() {

  const data = useSelector(state => state?.issuesReducer?.data)

  const [issues, setIssues] = useState(JSON.parse(localStorage.getItem('issues')));

  useEffect(() => {
    setIssues(JSON.parse(localStorage.getItem('issues')))
  }, [data])

  const handleSort = (event) => {
    if (event.target.value === '2') {
      setIssues(
        Object.values(issues).sort(
          (a, b) => new Date(a.create) - new Date(b.create)
        )
      );
    } else {
      setIssues(
        Object.values(issues).sort(
          (a, b) => new Date(b.create) - new Date(a.create)
        )
      );
    }
  };

  const handleFilter = (event) => {
    event.preventDefault();
    if(event.target.auth.value) {
      setIssues(Object.values(issues).filter(el => el.user === event.target.auth.value));
    } else {
      setIssues(JSON.parse(localStorage.getItem('issues')))
    }
  };

  return (
    <>
      <Form className="container" onChange={handleSort}>
      <Nav.Link as={Link} style={{ color: 'black' }} to="/" >Home</Nav.Link>
        <br />
        <Form.Select aria-label="Default select example">
          <option value="1">Sort the date in descending order</option>
          <option value="2">Sort the date in ascending order</option>
        </Form.Select>
      </Form>
      <br />
      <br />
      <Form className="container" onSubmit={handleFilter}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Control type="text" placeholder="Enter auth" name="auth"/>
        </Form.Group>
        <Button variant="dark" type="submit">
          Filter
        </Button>
      </Form>
      <br />
      <br />
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Auth</th>
            <th>Date</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          { Object.values(issues).map((el, i) => (
            <tr key={uuidv4()}>
              <td>{el.number}</td>
              <td>{el.title}</td>
              <td>{el.user}</td>
              <td>{el.create}</td>
              <td>
                <a href={el.url} target="blank">
                  {el.url}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Search;
