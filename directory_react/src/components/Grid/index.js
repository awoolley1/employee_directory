import React, { useState, useEffect } from "react";
import API from "../../api/randomUser.js";
import "./style.css";
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/ToggleButton'

function Grid() {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.getUser()
      .then((res) => {
        console.log(res);
        setData(res.data.results);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Table striped bordered hover variant="dark">
    <thead>
<tr>
 <th>Photo</th> 
 <th>First Name</th>
 <th>Last Name</th>
 <th>Email</th>
 <th><Button>Location</Button></th>
</tr>
</thead><tbody>

{data.map((user, index) => (
  <tr key={index}>
  <td><img src={user.picture.thumbnail} alt="headshot"/></td>
 <td>{user.name.first}</td>
 <td>{user.name.last}</td>
 <td>{user.email}</td>
 <td>{user.location.city}</td>
 </tr>
 )
)}
</tbody>
</Table>
);
}

export default Grid;