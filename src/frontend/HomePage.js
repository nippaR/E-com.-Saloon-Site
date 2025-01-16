import React, { } from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Header from './Header';
import SlideShow from './Slide';
import Cards from './Cards';
import Gallary from './Gallary';
import Contact from './Contact';



const MotionTypography= motion(Typography); 
const MotionBox = motion(Box);


const variantContainer = {
  hidden: {
    opacity: 0,
    y:20
  },
  visible: {
    opacity: 1,
    y:0,
    transition: {
      delay: 0.3,
      duration: 1.5,
    },
  },
};

function HomePage() {



  return (
    <Box sx={{ backgroundColor: '#ffff66', position: 'relative', overflow: 'hidden' }}>
      <Header />
      <MotionTypography
        variants={variantContainer}
        initial="hidden"
        animate="visible"
        variant="h1"
        align="center"
        sx={{
          mt: 5,
        }}
      >
        Bright Your Skin
      </MotionTypography>

      <MotionTypography
        variants={variantContainer}
        initial="hidden"
        animate="visible"
        variant="h1"
        align="center"
        sx={{
          mt: 0,
          fontWeight: 'bold',
        }}
      >
        With US.
      </MotionTypography>

      <MotionBox
        variants={variantContainer}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
      >
        <Typography variant="h2" align="center" sx={{ mt: 5 }}>
          25% Offer ToDay <br />
          <Box sx={{ fontWeight: 'bold' }}>Book Now</Box>
        </Typography>
      </MotionBox>

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

