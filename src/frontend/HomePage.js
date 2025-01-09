import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import SlideShow from './Slide';
import Header from './Header';
import Cards from './Cards';
import Contact from './Contact';
import Gallary from './Gallary';

function HomePage() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box sx={{ backgroundColor: '#ffff66', position: 'relative', overflow: 'hidden' }}>
      <Header />
      <Typography
        variant="h1"
        align="center"
        sx={{
          mt: 5,
          transition: '0.4s',
          transform: `translateY(${scrollPosition * -0.1}px) scale(${1 - scrollPosition / 1000})`, // Move up and scale down
        }}
      >
        Bright Your Skin
      </Typography>

      <Typography
        variant="h1"
        align="center"
        sx={{
          mt: 0,
          fontWeight: 'bold',
          transition: '0.4s',
          transform: `translateY(${scrollPosition * -0.1}px) scale(${1 - scrollPosition / 1000})`, // Move up and scale down
        }}
      >
        With US.
      </Typography>

      <Box>
        <Typography variant="h2" align="center" sx={{ mt: 5 }}>
          25% Offer ToDay <br />
          <Box sx={{fontWeight:'bold'}}>Book Now </Box>
        </Typography>
      </Box>

      <Box sx={{ mt: 5 }}>
        <SlideShow />
      </Box>

      <Box>
        <Cards />
      </Box>
      
      <Box>
        <Typography sx={{fontFamily:'poppins', fontWeight:'bold', fontSize:'1.2rem', mt: 5, ml: 12}}>
          Our Gallery :
        </Typography>
        <Gallary />
      </Box>

      < Contact />

    </Box>  
  );
}

export default HomePage;