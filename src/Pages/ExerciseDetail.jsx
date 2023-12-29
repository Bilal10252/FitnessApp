import { Box } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import Detail from '../Components/Detail'
import ExerciseVideos from '../Components/ExerciseVideos'
import SimilarExercises from '../Components/SimilarExercises'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import fetchData, { fetchYoutubeData } from '../utils/fetchData'

const ExerciseDetail = () => {
  let [exerciseInfo, setExerciseInfo] = useState({});
  let [exerciseVideoData, setExerciseVideoData] = useState({});
  let [suggestedTargetExercises, setSuggestedTargetExercises] = useState([{}]);
  let [suggestedEquipmentExercises, setSuggestedEquipmentExercises] = useState([{}]);

  let {id} = useParams();
  let mainContentRef = useRef("null");

  useEffect(() => {
      let exerciseInfoFetch = async () => {

        // Exercise Information fetch method
        let exerciseData = (await fetchData(`/exercise/${id}`));
        setExerciseInfo(exerciseData);

        // Exercise related suggested videos 
        let youtubeSearch = await fetchYoutubeData(`search?query=${exerciseData.name}`);
        setExerciseVideoData(youtubeSearch);
        console.log(youtubeSearch);

        // Similar target muscles exercises
        let suggestedTargetExercises = await fetchData(`/target/${exerciseData.target}?limit=9`);
        setSuggestedTargetExercises(suggestedTargetExercises);

        // Similar equipment exercises
        let suggestedEquipmentExercises = await fetchData(`/equipment/${exerciseData.equipment}?limit=9`);
        setSuggestedEquipmentExercises(suggestedEquipmentExercises);

        if(mainContentRef.current){
          mainContentRef.current.scrollIntoView({behavior: 'smooth' });
        }

      }


      
      exerciseInfoFetch();
  },[id]);
  return (
    <Box ref={mainContentRef}>
      <Detail exerciseInfo = {exerciseInfo}> </Detail>
      <ExerciseVideos exerciseVideoData = {exerciseVideoData} name = {exerciseInfo.name}></ExerciseVideos>
      <SimilarExercises suggestedTargetExercises = {suggestedTargetExercises} suggestedEquipmentExercises = {suggestedEquipmentExercises}></SimilarExercises>
    </Box>
  )
}

export default ExerciseDetail;