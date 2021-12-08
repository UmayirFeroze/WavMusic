import React, { useImperativeHandle } from 'react';
import { Container } from 'react-bootstrap';
import Footer from './Footer';
import NavigationBar from './NavigationBar';

export default function Screen({ children, title }) {
  
    return (
      <Container className="App" fluid>
        <NavigationBar />
        {/* Header */}
        {/* <header className=''>
                 <p>The one stop for all music</p> 
            </header> */}

        <Container fluid className='border border-primary'>
          <h1>{title && title}</h1>
          {children}
        </Container>

        <Footer />
      </Container>
    
  );
}
