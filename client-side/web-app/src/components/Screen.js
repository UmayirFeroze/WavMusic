import React, { useImperativeHandle } from 'react';
import { Container } from 'react-bootstrap';
import Footer from './Footer';
import NavigationBar from './NavigationBar';


export default function Screen(props){
    return (
        <div className="App">
            <NavigationBar/>
            <header className='App-header'>
                {/* <img src={logo} className='App-logo' alt='logo' /> */}

                <p>The one stop for all music</p>
                
            
            </header>
         

            <Footer/>

        </div>
    )
}