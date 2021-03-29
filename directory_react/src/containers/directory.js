import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import Search from "../components/Search";
import Grid from "../components/Grid";
import API from "../api/randomUser.js";
import 'bootstrap/dist/css/bootstrap.min.css';

function Directory() {
  const [data, setData] = useState([]);

  useEffect(() => {
  

    API.getUser()
      .then(res => {
    console.log(res)
       setData(res.data.results)
       console.log(data)

      })
      .catch(err =>console.log(err));
  }, []);

    return (
      <div>
        <Header >
          <h1>Header here</h1>
        </Header>

        <Search >
          <h1>Search here</h1>
        </Search>


        {data.map((user, index) => (
          <div key={index}>
            <h3>{user.name.first}</h3>
         
          </div>
        ))}
        <Grid>
             
        </Grid>
      </div>
    );
  }
  
  export default Directory;