import React from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';
import Header from './components/Header_footer/header';
import Featured from './components/featured/index';
import Venueinfo from './components/venueinfo';
import Highlight from './components/highlights';
import Pricing from './components/Pricing';
import Location from './components/location';
import Footer from './components/Header_footer/footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Element name='Start'>
        <Featured />
      </Element>

      <Element name='Venue'>
        <Venueinfo />
      </Element>

      <Element name='highlight'>
        <Highlight />
      </Element>
      <Element name='Pricing'>
        <Pricing />
      </Element>

      <Element name='Location'>
        <Location />
      </Element>

      <Footer />
    </div>
  );
}

export default App;
