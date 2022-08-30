import React from 'react'
import {Container, Nav, Navbar, NavDropdown, Accordion
} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';


// const Header = () => {
//   return (
//     <nav className="navbar">
//     <div className="max-width">
//         <div className="logo"> <a href="#">Portfo<span>lio.</span></a></div>
//         <ul className="menu">
//             <div>
//             <a href="#">Home</a>
//             <a href="#">About</a>
//             <a href="#">Services</a>
//             <a href="#">Skills</a>
//             <a href="#">Teams</a>
//             <a href="#">Contact</a>
//         </div>
//         </ul>
//     </div>
// </nav>
//   )


  
// }


const Accord = () => {
return(
    <Accordion defaultActiveKey="0">
    <Accordion.Item eventKey="0">
      <Accordion.Header>Accordion Item #1</Accordion.Header>
      <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
      <Accordion.Header>Accordion Item #2</Accordion.Header>
      <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
)
    
}

function Box() {
    return(
        <h1>box</h1>
    )
}

function Circle() {
    return(
        <p>circle</p>
    )
}

export {Box, Circle, Accord}

export default Header;

