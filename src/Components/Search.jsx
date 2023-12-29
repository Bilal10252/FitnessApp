import { useEffect, useState } from 'react'
import React from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import fetchData from '../utils/fetchData'
import HorizontalScrollBar from './HorizontalScrollBar'

const Search = ({setSearchedExercises, bodyPart, setBodyPart}) => {
    let [search, setsearch] = useState('');  
    let [bodyParts, setBodyParts] = useState(["all"]);
     useEffect(() => {

        let fetchingExerciseData = async () => {
            let bodyPart = await fetchData("/bodyPartList");
            setBodyParts([...bodyParts, ...bodyPart]);
            
        };


        fetchingExerciseData();  
         
        
        
    }, [])

    let handleSubmit = async () => {
        if(search){
                let exercisesData = await fetchData("?limit=250");

               let searchEx = ( exercisesData.filter((exercise) => 
                exercise.bodyPart.toLowerCase().includes(search) 
                ||exercise.target.toLowerCase().includes(search)  
                ||exercise.equipment.toLowerCase().includes(search) 
                ||exercise.name.includes(search)             
                ))

                setSearchedExercises(searchEx);
                setsearch(""); 
        }
    }
  return (
   <Stack justifyContent={"center"} alignItems={"center"} mt={"37px"} p={"20px"} >
        <Typography sx={{fontSize:{xs:'30px', lg:'44px'}, fontWeight:'700', mb:"50px", textAlign:"center"}}>Awesome Exercises you <br/> should know.</Typography>
        <Box position={"relative"} mb={"72px"}>
        <TextField placeholder='Search Exercises...' value={search} onChange={(e) => {setsearch(e.target.value.toLowerCase())} } type='text' sx={{ 
            input:{
                border:"none",
                fontWeight:"700",
            },
            width:{lg:"800px", xs:"380px"},
            backgroundColor:"#fff",
            borderRadius:"40px",
        }}></TextField>

        <Button className='search-btn' sx={{
            backgroundColor:"#ff2625",
            color:"#fff",
            width:{xs:'80px', lg:'175px'},
            fontSize:{lg:"20px", xs:"14px"},
            height:"56px",
            marginTop:{xs: '20px', md: "0px"}

        }}
        onClick={handleSubmit}
        >Search</Button>
        </Box>

        <Box width={"100%"} padding={"20px"} position={"relative"}>
            <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyPart={true}></HorizontalScrollBar>
        </Box>
        

   </Stack>
  )
}

export default Search