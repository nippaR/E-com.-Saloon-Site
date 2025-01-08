import { Box, Grid, Typography,Stack,TextField, Button } from "@mui/material";
import React from "react";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';


function Contact() {

    return (
        <Box sx={{ml:10,my: 10,backgroundColor: '#FF6E00', width: '90%', height: '700px', borderRadius: '10px' }}>

            <Typography sx={{ fontWeight: 'bold', fontSize: '5rem', color: '#FFFF66', ml:5, fontFamily:'poppins' }}>
                Contact:
            </Typography>

            <Grid>
                <Stack direction="row" spacing={2} sx={{ml:5, gap: 65}}>

                    <Box >
                        <FacebookOutlinedIcon sx={{fontSize: '5rem', mt:20,color:'#ffff66',
                                                transition: 'transform 0.3s ease-in-out','&:hover': {transform: 'scale(1.2)'}}}/>

                        <InstagramIcon sx={{fontSize: '5rem', color: '#ffff66', ml:2,
                                            transition: 'transform 0.3s ease-in-out','&:hover': {transform: 'scale(1.2)'}
                        }}/>
                        
                    </Box>


                    <Box sx={{border:' 1px solid white', p:5, borderRadius: '15px', mt:0}}>
                        <TextField
                                id="outlined-basic"
                                variant="outlined"
                                label = "Name"
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
                                    my: 5, borderRadius: '10px'
                                }}
                            />
                            <br/>

                         <TextField
                                id="outlined-basic"
                                variant="outlined"
                                label = "Type Here Your Message"
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
                            <br/>
                            <Button variant="contained" sx={{backgroundColor: 'hsla(60, 100.00%, 51.00%, 0.5)',
                                                             color: 'black', 
                                                             fontWeight: 'bold', 
                                                             mt: 5, 
                                                             borderRadius: '15px', border: '1px solid white',
                                                             width: '150px',
                                                             ml: 31.5}}>

                                Send
                            </Button>    
                    </Box>

                </Stack>    
            </Grid>

        </Box>
    );
}


export default Contact;