import React from 'react';
import { Box,Button,Grid,Typography } from '@mui/material';
import { motion } from 'framer-motion';

const MotionTypography = motion(Typography);
const MotionButton = motion(Button);
const MotionBox = motion(Box);

const useScroll = () => {
    const [state, setState] = React.useState({
        x: window.scrollX,
        y: window.scrollY,
    });

    React.useEffect(() => {
        const onScroll = () => {
            setState({ x: window.scrollX, y: window.scrollY });
        };
        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return state;
};  
export default function Review() {
    return (
        <Box>
            <Grid  sx={{ display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        backgroundColor: 'pink', 
                        padding: '10px', 
                        width: '100%',
                        height: 800}}>
                <MotionBox 
                    whileHover={{ scale: 1.1, originX: 0, originY: 0, transition: { duration: 0.5 } }} 
                    
                >
                    <h1>Review</h1>
                </MotionBox>
            </Grid>

            <section>
            <Grid sx={{ display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        backgroundColor: 'lightblue', 
                        padding: '10px', 
                        width: '100%',
                        height: 500}}>
                <MotionTypography whileHover={{ scale: 1.1, originX:0,transition: { duration: 0.3 } }}>
                fuck u
                </MotionTypography>
            </Grid>
            </section>

            <MotionButton>
                  WOW
            </MotionButton>
        </Box>
    );
}
