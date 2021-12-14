import React from 'react';

import Footer from './screen/AppFooter';
import Header from './screen/Header';
import SideNavigation from './screen/SideNavigation';


export default function Screen({ children, title, subtitle }) {
  return (
    <div className='wrapper'>
      <Header />
      <SideNavigation />
      
      <Footer />
    </div>
  );
}
