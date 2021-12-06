import React from 'react';
import logo from '../logo.svg';
import NavigationBar from '../components/NavigationBar';

export default function LandingScreen(props) {
  return (
    <div className='App'>
      <NavigationBar/>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />

        <p>The one stop for all music</p>

        <a
          className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
        
      </header>
    </div>
  );
}
