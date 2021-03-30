import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Grid from "../components/Grid";
import "bootstrap/dist/css/bootstrap.min.css";

function Directory() {
  return (
    <div>
      <Header></Header>

      <Search></Search>
      
      <Grid></Grid>
    </div>
  );
}

export default Directory;
