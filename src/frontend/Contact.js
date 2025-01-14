import { Box, Grid, Typography,Stack,TextField, Button } from "@mui/material";
import React from "react";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import Tiktok from '../Images/tk.png';
import CallIcon from '@mui/icons-material/Call';
import PlaceIcon from '@mui/icons-material/Place';
import { motion } from 'framer-motion';


const MotionTypography = motion(Typography);

function Contact() {
    return (
        <Box sx={{ ml: 5, my: 10, backgroundColor: '#FF6E00', width: '95%', height: '720px', borderRadius: '10px' }}>
            <MotionTypography sx={{ fontWeight: 'bold', fontSize: '5rem', color: '#FFFF66', ml: 5, fontFamily: 'poppins' }}
            whileHover={{ scale: 1.1,transition: { duration: 0.3 } }}>
                Contact:
            </MotionTypography>
            

            <Grid>
                <Stack direction="row" spacing={2} sx={{ gap: 55 }}>
                    <Box>
                        <Stack direction="row" spacing={2} sx={{ ml: 5, mt: 15 }}>
                            <FacebookOutlinedIcon
                                sx={{
                                    fontSize: '5rem',
                                    mt: 20,
                                    color: '#ffff66',
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': { transform: 'scale(1.2)' }
                                }}
                            />

                            <InstagramIcon
                                sx={{
                                    fontSize: '5rem',
                                    ml: 2,
                                    color: '#ffff66',
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': { transform: 'scale(1.2)' }
                                }}
                            />

                            <motion.Box whileHover={{ scale: 1.1, originX:0, originY:0 ,transition: { duration: 0.5 } }}>
                                <img
                                    src={Tiktok}
                                    alt="Tiktok"
                                    style={{
                                        width: '70px',
                                        height: '70px',
                                        marginLeft: '16px',
                                    }}
                                />
                            </motion.Box>
                        </Stack>
                        
                        <Stack direction="row" spacing={2} justifyContent= 'center' sx={{  mt: 15, ml: 2  ,transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.2)' }}}>
                            <CallIcon sx={{ fontSize: '4rem', mt: 15,color:'#ffff66',
                                              }} />            
                            <Typography sx={{fontSize:'1.7rem', color:'white',fontWeight:'bold'
                                            
                            }}>+123-456-789-10</Typography>

                        </Stack>

                        <Stack direction="row" spacing={2} justifyContent= 'center' sx={{ ml: 5, mt: 10,  transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.2)' }}}>
                        <PlaceIcon sx={{ fontSize: '4rem', mt: 15, ml: 5,color:'#ffff66',}} />
                        <Typography sx={{fontSize:'1.7rem', color:'white',fontWeight:'bold'}}>123, Main Street, <br/>New York, USA</Typography>
                        </Stack>   

                    </Box>

                    <Box sx={{ border: '1px solid white', p: 5, borderRadius: '15px', mt: -10 }}>
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="Name"
                            sx={{
                                width: '400px',
                                '& .MuiOutlinedInput-root': {
                                    backgroundColor: 'hsla(60, 100.00%, 51.00%, 0.5)',
                                    color: 'white',
                                    '& fieldset': {
                                        borderColor: 'white',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'white',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'white',
                                    },
                                },
                                my: 5,
                                borderRadius: '10px'
                            }}
                        />
                        <br />

                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="Type Here Your Message"
                            multiline
                            rows={4}
                            sx={{
                                width: '400px',
                                '& .MuiOutlinedInput-root': {
                                    backgroundColor: 'hsla(60, 100.00%, 51.00%, 0.5)',
                                    color: 'white',
                                    '& fieldset': {
                                        borderColor: 'white',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'white',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'white',
                                    },
                                    borderRadius: '10px'
                                },
                            }}
                        />
                        <br />
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: 'hsla(60, 100.00%, 51.00%, 0.5)',
                                color: 'black',
                                fontWeight: 'bold',
                                mt: 5,
                                borderRadius: '15px',
                                border: '1px solid white',
                                width: '150px',
                                ml: 31.5
                            }}
                        >
                            Send
                        </Button>
                    </Box>
                </Stack>
            </Grid>
        </Box>
    );
}

export default Contact;