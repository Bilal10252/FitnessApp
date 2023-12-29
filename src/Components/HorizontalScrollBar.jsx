import BodyPart from "./BodyPart";
import { Box } from "@mui/material";
import {Typography, Grid} from "@mui/material";
import ExerciseCard from "./ExerciseCard";

const HorizontalScrollBar = ({data, bodyPart, setBodyPart, isBodyPart}) => {

      
    return (
   
    <Grid container direction={{xs: "column", md: "row"}} rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md:0 }} style={{ overflowX: 'auto', padding: '16px' }} justifyContent="space-evenly"
    >
        {data.map((item, id) => (
          <Grid item >
            <Box key={id} m={"0 40px"}>
              
              {isBodyPart ? <BodyPart item={item} bodyPart = {bodyPart} setBodyPart = {setBodyPart}></BodyPart>
            : <ExerciseCard exercise={item}></ExerciseCard> 
            }
              
             
            </Box>
            </Grid>
        ))}
        </Grid>
    )
    
    
}

export default HorizontalScrollBar; 