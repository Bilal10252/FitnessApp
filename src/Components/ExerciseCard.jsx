import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";


const ExerciseCard = ({exercise}) => {
return  <>

    <Link to={`/exercise/${exercise.id}` }  style={{ textDecoration: 'none', backgroundColor:"white", borderTop:"4px solid Red"}}>

        <img src={exercise.gifUrl} loading="lazy" alt="ExercisePic" ></img>

        <Stack direction={"row"} sx={{mt:'10px'}} >
            <Button sx={{backgroundColor:"#ffa9a9",  color:"white", borderRadius:"20px", marginLeft:"21px", fontSize:"14px"}}>{exercise.bodyPart}</Button>
            <Button sx={{backgroundColor:"#fcc757",  color:"white", borderRadius:"20px", marginLeft:"21px", fontSize:"14px"}}>{exercise.equipment}</Button>
            
            </Stack>

            <Typography sx={{
                fontWeight:"bold", color:"#000", ml:"22px", mt:"10px", mb:"10px", textTransform:"capitalize", fontSize:"20px"
            }}>{exercise.name}</Typography>
    </Link>

            


</> 

}

export default ExerciseCard;