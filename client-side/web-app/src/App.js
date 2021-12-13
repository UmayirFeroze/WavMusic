import { Container,Nav, Navbar } from 'react-bootstrap';
import './App.css';

import HomeScreen from './screens/HomeScreen';
import colors from './config/colors';
import logo from './logo.svg';
import NavigationBar from './components/NavigationBar';
import Footer from './components/AppFooter';
import MusicBar from './components/MusicBar';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import SideNavigation from './components/SideNavigation';
import AppSettings from './components/appSettings';
import Dashboard from './components/Dashboard';

function App() {
  const [loaded, setLoaded] = useState(false)
  const [popular, setPopular] = useState([]);

  const songsInput = [
      {id:1, name:'Diamonds', image:'Rihanna.png', authors: [{name:'Rihanna'}], album:'Loud', favourite:true}, 
      {id:2, name:'Umbrella', image:'Rihanna.png', authors: [{name:'Rihanna', favourite:true}, {name:'Eminem'}], album:'Loud', favourite:false},
      {id:3, name:'Right Now (Na na na)', image:'Akon.png', authors: [{name:'Akon'}], album:'Freedom', favourite:true},
      {id:4, name:'Beautiful', image:'Akon.png', authors: [{name:'Akon'}], album:'Freedom', favourite:false},
      {id:5, name:'Swalla', image:'Jason.jpeg', authors: [{name:'Jason Durelo'}], album:'2017', favourite:false},
      {id:6, name:'Jalebi baby', image:'Jason.jpeg', authors: [{name:'Jason Durelo'}], album:'Just another series', favourite:true},
  ];

  useEffect(()=>{
      if(!loaded) {
          setPopular(songsInput);
          setLoaded(true);
      }
  },[popular,loaded])
  
  return (
    // <div className="sidebar-mini layout-fixed  layout-navbar-fixed dark-mode">
    <div className='sidebar-mini control-sidebar-slide-open dark-mode layout-footer-fixed layout-fixed'>
      
      <div className='wrapper'>
        <Header/>
        <SideNavigation/>
        <Dashboard/>
        <Footer/>
        {/* <AppSettings/> */}
      </div>
    </div>
    
  );
}
{/* <Container className="App" fluid>
<NavigationBar/>
  <Container fluid style={{minHeight:'100vh'}} fluid>
    <div className="mt-0 border text-left">
      <h1 className='display-3 text-white'>Page Title</h1>
    </div>
    <MusicBar title="Popular" songs={popular && popular}/>
    <MusicBar title="Trending" songs={popular && popular}/>
    <MusicBar title="Hot Selling" songs={popular && popular}/>
    <MusicBar title="Rabdom" songs={popular && popular}/>
  </Container>
  <Footer/>
</Container> */}

export default App;
