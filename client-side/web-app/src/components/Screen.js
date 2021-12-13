import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from './Footer';
import NavigationBar from './NavigationBar';

export default function Screen({ children, title, subtitle }) {
  return (
    <Container className='App p-0' fluid >

      <NavigationBar />
      
      {/* TODO: Header */}

      {/* Screen Content */}
      <Container fluid className='text-left h-100 overflow-hidden'>
        <div className="mt-0 border">
          <h1 className='display-3 text-white'>{title && title}</h1>
          <h2 className='text-white'>{subtitle && subtitle}</h2>
        </div>
        
        <Container fluid className="overflow-auto border" >
          {children}
        </Container>
      </Container>

      <Footer />
    </Container>
  );
}
