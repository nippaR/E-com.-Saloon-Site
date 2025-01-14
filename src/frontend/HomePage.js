import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Header from './Header';
import SlideShow from './Slide';
import Cards from './Cards';
import Gallary from './Gallary';
import Contact from './Contact';

const variantContainer = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1.5,
    },
  },
};

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
          transform: `translateY(${scrollPosition * -0.1}px) scale(${1 - scrollPosition / 1000})`,
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
          transform: `translateY(${scrollPosition * -0.1}px) scale(${1 - scrollPosition / 1000})`,
        }}
      >
        With US.
      </Typography>

      <motion.Box
        variants={variantContainer}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
      >
        <Typography variant="h2" align="center" sx={{ mt: 5 }}>
          25% Offer ToDay <br />
          <Box sx={{ fontWeight: 'bold' }}>Book Now</Box>
        </Typography>
      </motion.Box>

      <Box sx={{ mt: 5 }}>
        <SlideShow />
      </Box>

      <Box>
        <Cards />
      </Box>

      <Box>
        <Typography sx={{ fontFamily: 'poppins', fontWeight: 'bold', fontSize: '1.2rem', mt: 5, ml: 12 }}>
          Our Gallery :
        </Typography>
        <Gallary />
      </Box>

      <Contact />
    </Box>
  );
}

export default HomePage;


/*### Key Changes:
- **Motion Box**: Added `whileHover` directly to the `motion.Box` to ensure the hover effect is applied correctly.
- **Imports**: Ensured all necessary components are imported and used correctly.
- **Variant Container**: Defined `variantContainer` to manage animation states.

This should resolve the error and ensure that the animations work as expected. If the issue persists, double-check that all dependencies are correctly installed and up-to-date.*/