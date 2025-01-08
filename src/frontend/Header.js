import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'

export default function Header() {
  return (
     <Box sx={{borderRadius: '12px',
                      border: '2px solid black',
                      ml: 5,
                      my: 3,
                      width: '95%', height: '50px',

            }}>
            
            <Stack direction="row" spacing={2} sx={{ml: 2, mt: 0.5, gap:40}}>

              <Typography variant="h5" align="center" >$kin<sup style={{fontWeight:'bold'}}>+</sup></Typography>
              <Box>
                <Button variant="text" color="primary" sx={{ml: 2, mt: 0.5, color:'black'}}>Service</Button>
                <Button variant="text" color="primary" sx={{ml: 2, mt: 0.5, color:'black'}}>Contact</Button>
                <Button variant="text" color="primary" sx={{ml: 2, mt: 0.5, color:'black'}}>Team</Button>
                <Button variant="text" color="primary" sx={{ml: 2, mt: 0.5, color:'black'}}>About</Button>
              </Box>

              <Box>
                <Button variant="text" color="primary" sx={{ml: 2, mt: 0.5, color:'black'}}>Login</Button>
                <Button variant="contained" color="primary" sx={{ml: 2, mt: 0.5, backgroundColor:'black' ,color:'white'}}>Book Now</Button>
              </Box>
            </Stack>
          </Box>

  )
}
