import React from 'react';
import logo from '../logo.svg';
import colors from '../config/colors';

export default function NavigationBar(props) {
  return (
    <nav class='navbar navbar-light bg-dark'>
      <div class='container-fluid'>
        <a class='navbar-brand mb-0 h1' style={{color: colors.primary}} href='#'>
          <img src={logo} width='36' height='28' className='d-inline-block align-text-top' alt='logo' />
          Wav Music
        </a>
      </div>
    </nav>
  );
}
