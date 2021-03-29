import React from "react";
import "./style.css";
import Form from 'react-bootstrap/Form'

function Search() {
  return (
    <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Search</Form.Label>
    <Form.Control type="email" placeholder="Enter employee name" />
  </Form.Group>
</Form>
  );
}

export default Search;