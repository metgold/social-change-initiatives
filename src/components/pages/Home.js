import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home() {
  return (
    <React.Fragment>
      <HeroSection />
      <Cards />
      <Footer />
    </React.Fragment>
  );
}

export default Home;