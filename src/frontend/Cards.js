import React, {useEffect} from "react";
import { Box, Stack, Typography } from "@mui/material";
import star from '../Images/star.png';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const cards = [
    {
        title: "TN",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        starCount: 5 
    },
    {
        title: "MR",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        starCount: 4
    },
    {
        title: "CJ",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        starCount: 5
    },
    {
        title: "SL",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        starCount: 4
    },
    {
        title: "JM",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        starCount: 5
    }
 
]
// Star Count function

function StarRating({ count }) {

    return (
        <Box sx={{ml:5, mt: 2 }}>
            {Array.from({ length: count }).map((_, index) => (
                <img key={index} src={star} alt="star" style={{ width: 20, height: 20, marginRight: 2 }} />
            ))}
        </Box>
    );
}

// end of Star Count function   



function Cards() {

    const { ref, inView } = useInView({
        threshold: 0.2,
    });
    const animation = useAnimation();

    useEffect(() => {
        if (inView) {
            animation.start({
                y: 0,
                opacity: 1,
                transition: {
                    type: 'spring', stiffness: 120
                }
            });
        } if (!inView) {
            animation.start({ 
                y:50,
                opacity: 0,
                
            });
        }
        console.log("use effect view", inView);
    }, [inView, animation]);

    return (

        <Box>

            <MotionTypography sx={{ ml:10,mt: 10, fontWeight: 'bold', fontSize: '1.3rem' }}  >
            Coustomer Feedbacks :
            </MotionTypography>

            <Stack direction="row" spacing={2} sx={{alignItems: "center", justifyContent: "center", mt: 3, ml: 5,gap: 5}} ref={ref}>
                {cards.map((c) => (

                <MotionBox sx={{ backgroundColor: 'rgb(255, 255, 255 , 0.9)', 
                        height: 270, width: 210,
                        mt: 5, ml: 10,
                        borderRadius: 3 }}
                        animate={animation}>

                    <Box key={c.title}>
                            
                            <Typography variant="h6" textAlign="left" sx={{ mt: 2, fontSize:'1rem', ml:1 }}>
                                {c.description}
                            </Typography>

                            <Typography variant="h5" align="center" alignContent="center" sx={{ mt: 4, 
                                                                                                fontWeight: 'bold',
                                                                                                fontSize: '1.3rem', 
                                                                                                borderRadius:'50%', 
                                                                                                width: 50, 
                                                                                                height: 50,
                                                                                                backgroundColor: 'black',
                                                                                                color: 'white',ml:9}}>
                                {c.title}
                            </Typography>

                            <Box sx={{alignItems: "center", justifyContent: "center"}}>
                            <StarRating count={c.starCount} />
                            </Box>

                    </Box>
                
                
                </MotionBox>
                ))} 

            </Stack>


        </Box>
    );
}

export default Cards;