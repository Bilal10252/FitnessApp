import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from "./Loader";

const SimilarExercises = ({suggestedTargetExercises, suggestedEquipmentExercises}) => {
    return (
        <Box sx={{mt:{lg: '100px', xs:'70px'}}}>
            <Typography variant="h3" sx={{mb:'15px', textTransform:'capitalize'}} textAlign={'center'}>Exercises that target the same muscle group</Typography>
            <Stack direction={'row'} sx={{p:2}} position={'relative'}>
                {(suggestedTargetExercises.length > 0) ? <HorizontalScrollBar data={suggestedTargetExercises}></HorizontalScrollBar> : <Loader></Loader>}
            </Stack>


            <Typography variant="h3" sx={{mb:'15px', textTransform:'capitalize'}} textAlign={'center'}>Exercises that target the same equipments</Typography>
            <Stack direction={'row'} sx={{p:2}} position={'relative'}>
                {(suggestedEquipmentExercises.length > 0) ? <HorizontalScrollBar data={suggestedEquipmentExercises}></HorizontalScrollBar> : <Loader></Loader>}
            </Stack>
        </Box>

        
    )
}

export default SimilarExercises;