import React, { useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

function Review() {
    const { ref, inView } = useInView({
        threshold: 0.2,
    });
    const animation = useAnimation();

    useEffect(() => {
        if (inView) {
            animation.start({
                x: 0,
                transition: {
                    type: 'spring', stiffness: 120
                }
            });
        } if (!inView) {
            animation.start({ x: '-100vw' });
        }
        console.log("use effect view", inView);
    }, [inView, animation]);

    return (
        <Grid>
            <MotionBox sx={{ backgroundColor: '#FF6E00', width: '95%', height: '650px', borderRadius: '10px', ml: 5, my: 5 }}>
                <MotionTypography>
                    {/* Additional content can go here */}
                </MotionTypography>
            </MotionBox>

            <MotionBox sx={{ backgroundColor: '#FF6E00', width: '95%', height: '650px', borderRadius: '10px', ml: 5, my: 5 }}
                ref={ref}>
                <MotionTypography sx={{ textAlign: 'center' }}
                    animate={animation}>
                    Review
                    Here is a review of the product
                </MotionTypography>
            </MotionBox>
        </Grid>
    );
}

export default Review;