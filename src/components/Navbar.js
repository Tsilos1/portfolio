import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

export default function navbar() {

    return (

<div>

<Navbar bg="light" expand="lg" >
    <Navbar.Brand style={{margin: "5px 0 0 20px"}} href="#home">
        <div>
            <h1>Tsilos Kosbab</h1>
        </div> 
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto"> 
        </Nav>
        <Router>
        <Nav>
            {/* <Link to="/About">About Me</Link> */}
            <Link to href="/Contact">Contact Me</Link>
            {/* <Nav.Link href="#Projects">Projects</Nav.Link> */}
        </Nav>
        </Router>
    </Navbar.Collapse>
</Navbar>

</div>
    )
}