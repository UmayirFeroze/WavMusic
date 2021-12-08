import React from 'react';
import logo from '../logo.svg';
import colors from '../config/colors';
import {Nav, Navbar} from 'react-bootstrap';

export default function NavigationBar(props) {
  return (
    <Navbar bg='inherit' expand='lg' fixed="top"  sticky="top">
        <Navbar.Brand href='/home' style={{color: colors.primary}}>
            <img src={logo} width='36' height='28' className='d-inline-block align-text-top' alt='logo' />
            WavMusic
        </Navbar.Brand>

        
        <Navbar.Toggle aria-controls='basic-navbar-nav' />

        <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
                <Nav.Link className="text-white" href='/home'>Home</Nav.Link>
                <Nav.Link className="text-white" href='/tracks'>Tracks</Nav.Link>
                <Nav.Link className="text-white" href='/albums'>Albums</Nav.Link>
                <Nav.Link className="text-white" href='/artists'>Artists</Nav.Link>
            </Nav>
            <Nav className='ml-auto'>
                <Nav.Link className="text-white font-weight-bold Button-secondary mr-lg-2 px-3" href='/home'>Sign in</Nav.Link>
                <Nav.Link className="text-white font-weight-bold Button-primary ml-lg-2 px-3" style={{backgroundColor: 'inherit'}} href='/tracks'>Sign up</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}
