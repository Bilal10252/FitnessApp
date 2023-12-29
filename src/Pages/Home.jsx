import React, { useState } from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../Components/HeroBanner'
import Search from '../Components/Search'
import Exercises from '../Components/Exercises'

const Home = () => {
  let [searchedExercises, setSearchedExercises] = useState([]);
  let [bodyPart, setBodyPart] = useState("all");
  


  return (

   <Box>
    <HeroBanner></HeroBanner>
    {/* SetBodyPart or SetSerachedExercises is actually set to a function that is going to set the bodyPart to what you pass in. You don't necessaraly have to write all
    the code. */} 
    <Search bodyPart={bodyPart} setSearchedExercises={setSearchedExercises} setBodyPart={setBodyPart}></Search>
    <Exercises bodyPart={bodyPart} setSearchedExercises={setSearchedExercises} searchedExercises={searchedExercises}></Exercises>
   </Box>
  )
}

export default Home