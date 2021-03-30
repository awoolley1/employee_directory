import React from "react";
import "./style.css";
import Navbar from 'react-bootstrap/Navbar'

function Header() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        Employee Directory
      </Navbar.Brand>
    </Navbar>
  </>
  );
}

export default Header;