import { Container,Nav, Navbar } from 'react-bootstrap';
import './App.css';

import HomeScreen from './screens/HomeScreen';
import colors from './config/colors';
import logo from './logo.svg';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import MusicBar from './components/MusicBar';
import { useEffect, useState } from 'react';

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
    <>
    </>
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
