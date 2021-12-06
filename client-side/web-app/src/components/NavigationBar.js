import React from 'react';
import logo from '../logo.svg';
import colors from '../config/colors';
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';

export default function NavigationBar(props) {
  // <a class="navbar-brand" style={{color: colors.primary}} href="/home">
  //     <img src={logo} width='36' height='28' className='d-inline-block align-text-top' alt='logo' />
  //     Wav Music
  // </a>
  return (
    <>
      <Navbar variant='dark' bg="inherit" >
        <Navbar.Brand href='/home' style={{color: colors.primary}}>
            <img src={logo} width='36' height='28' className='d-inline-block align-text-top' alt='logo' />
          WavMusic
        </Navbar.Brand>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />
       
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link className="text-white" href='/home'>Home</Nav.Link>
            <Nav.Link className="text-white" href='/link'>Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
