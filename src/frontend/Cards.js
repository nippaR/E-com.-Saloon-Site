import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import star from '../Images/star.png';




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

    return (

        <Box>

            <Typography sx={{ ml:10,mt: 10, fontWeight: 'bold', fontSize: '1.3rem' }}>
            Coustomer Feedbacks :
            </Typography>

            <Stack direction="row" spacing={2} sx={{alignItems: "center", justifyContent: "center", mt: 3, ml: 5,gap: 5}}>
                {cards.map((c) => (

                <Box sx={{ backgroundColor: 'rgb(255, 255, 255 , 0.9)', 
                        height: 270, width: 210,
                        mt: 5, ml: 10,
                        borderRadius: 3, '&:hover': {transform:'scale(1.1)'}, transition: '0.4s', boxShadow: 3}}>

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
                
                
                </Box>
                ))} 

            </Stack>


        </Box>
    );
}

export default Cards;