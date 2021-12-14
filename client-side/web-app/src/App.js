import { Container, Nav, Navbar } from 'react-bootstrap';
import './App.css';

import HomeScreen from './screens/HomeScreen';
import colors from './config/colors';
import logo from './logo.svg';
import NavigationBar from './components/NavigationBar';
import Footer from './components/screen/AppFooter';
import MusicBar from './components/MusicBar';
import { useEffect, useState } from 'react';
import Header from './components/screen/Header';
import SideNavigation from './components/screen/SideNavigation';
import AppSettings from './components/appSettings';
import Dashboard from './components/Dashboard';

function App() {
  const [loaded, setLoaded] = useState(false);
  const [popular, setPopular] = useState([]);

  const songsInput = [
    {
      id: 1,
      name: 'Diamonds',
      image: 'Rihanna.png',
      authors: [{ name: 'Rihanna' }],
      album: 'Loud',
      favourite: true,
    },
    {
      id: 2,
      name: 'Umbrella',
      image: 'Rihanna.png',
      authors: [{ name: 'Rihanna', favourite: true }, { name: 'Eminem' }],
      album: 'Loud',
      favourite: false,
    },
    {
      id: 3,
      name: 'Right Now (Na na na)',
      image: 'Akon.png',
      authors: [{ name: 'Akon' }],
      album: 'Freedom',
      favourite: true,
    },
    {
      id: 4,
      name: 'Beautiful',
      image: 'Akon.png',
      authors: [{ name: 'Akon' }],
      album: 'Freedom',
      favourite: false,
    },
    {
      id: 5,
      name: 'Swalla',
      image: 'Jason.jpeg',
      authors: [{ name: 'Jason Durelo' }],
      album: '2017',
      favourite: false,
    },
    {
      id: 6,
      name: 'Jalebi baby',
      image: 'Jason.jpeg',
      authors: [{ name: 'Jason Durelo' }],
      album: 'Just another series',
      favourite: true,
    },
  ];

  useEffect(() => {
    if (!loaded) {
      setPopular(songsInput);
      setLoaded(true);
    }
  }, [popular, loaded]);

  return (
    <div className='wrapper'>
      <Header />
      <SideNavigation />
      {/* <Dashboard/> */}
      <Footer />
    </div>
  );
}

export default App;
