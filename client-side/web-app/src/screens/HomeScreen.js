import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Screen from '../components/Screen';
import MusicBar from '../components/MusicBar';

export default function HomeScreen() {
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
    },[popular])

  return (
    <Screen title='Browse'>
       
        <MusicBar title="Popular" songs={popular && popular}/>
        <MusicBar title="Trending" songs={popular && popular}/>
        {/* <MusicBar title="Most Heard" songs={popular && popular}/> */}
        
    </Screen>
  );
}
