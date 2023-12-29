import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import gymLogo from "../../src/assets/Images/Logo.png"

const Footer = () => {
  return (
        <Box mt={"50px"} sx={{backgroundColor:"#fff3f4"}}>
            <Stack gap='20px' alignItems={'center'} px={'40px'} pt={'24px'}>
              <img src={gymLogo} alt="Gym logo" height={'40px'}/>
              <Typography color={'black'} variant='h5' mb={'10px'}>💡Turning Ideas into Reality with Web Development ✨</Typography>
            </Stack>
        </Box>
    )
}

export default Footer