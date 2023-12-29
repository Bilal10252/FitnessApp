import React from 'react'
import { Stack, Typography } from '@mui/material'
import logo from "../assets/Images/Logo.png"
import {Link} from '@mui/material'
import { useLocation } from 'react-router-dom'

const Navbar = () => {

  let location = useLocation();
  console.log(location);

  return (
    <Stack direction={"row"} sx={{
        gap:{sm:"144px", xs:"40px"},
        mt:{sm:"32px",xs:"20px"},
        px:"20px"
}}>
        <a href="/">
          <img src={logo} alt="Gym logo"  style={{
              width:"48px",
              height:"48px",
              margin: "0 20px"
          }} />
        </a>

        {location.pathname=== '/' || location.hash === '#exercises'
         ?<Stack direction={"row"} fontSize={"24px"} gap={"40px"} alignItems={"center"}>
            <Link to="/" style={{textDecoration:"none", color:"#3A1212", borderBottom: location.hash === ''&& location.pathname=== '/' ? '2px solid #FF2625' : "" }} className='homeLink'>Home</Link>
            <a href="#exercises" style={{textDecoration:"none", color:"#3A1212", borderBottom: location.hash === '#exercises' ? '2px solid #FF2625' : ""}}>Exercises</a>
        </Stack>
        : <Typography variant='h3'>Brief Info</Typography> }



        
    </Stack>
  )
}

export default Navbar