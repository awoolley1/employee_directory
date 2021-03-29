import React, { useState, useEffect } from "react";
import API from "../../api/randomUser.js";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <div>
       {data.map((user, index) => (
        <div key={index}>
          <h3>{user.name.first}</h3>
        </div>
      ))}
    </div>
  );
}

export default Grid;