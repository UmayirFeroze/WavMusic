import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from './Footer';
import NavigationBar from './NavigationBar';

export default function Screen({ children, title, subtitle }) {
  return (
    <Container className='App' fluid>

      <NavigationBar />
      
      {/* TODO: Header */}

      {/* Screen Content */}
      <Container fluid className='text-left h-100 overflow-hidden'>
        <div className="mt-3">
          <h1 className='display-2 text-white'>{title && title}</h1>
          <h2 className='text-white'>{subtitle && subtitle}</h2>
        </div>
        
        <Container fluid className="overflow-auto border" style={{height:'70vh'}}>
          {children}
        </Container>
      </Container>

      <Footer />
    </Container>
  );
}
