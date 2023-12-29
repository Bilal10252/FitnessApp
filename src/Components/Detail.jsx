import { Button, Stack, Typography } from "@mui/material";
import bodyPartImg from "../../src/assets/icons/body-part.png";
import equipmentImg from "../../src/assets/icons/equipment.png";
import targetImg from "../../src/assets/icons/target.png";

const Detail = ({exerciseInfo}) => {
    // Object destructuring
        let {bodyPart, gifUrl, name, target, equipment} = exerciseInfo;

        let extraDetail = [
            {
                icon: bodyPartImg,
                name: bodyPart
            },
            {
                icon: targetImg,
                name: target
            },
            {
                icon: equipmentImg,
                name: equipment
            }
            
        ];


    return( 
    <Stack gap={"60px"} alignItems={"center"} sx={{p:"20px"}} direction={{lg: 'row' , xs: 'column'}}>
        <img src={gifUrl} alt="Exercise gif" loading="lazy" className="detail-image" />

        <Stack direction={'column'} gap={{lg:'35px', xs:'20px'}}>
            <Typography variant="h3" sx={{textTransform:'capitalize'}}> {name}</Typography>
            <Typography variant="h6">Exercises keep you strong. {name} is one of the best exercises to target your {target}. It will help you improve your mood and energy.</Typography>

            {
                extraDetail.map((detail, index) => (
                        <Stack direction={'row'} alignItems={"center"} gap={'24px'}>
                            <Button sx={{backgroundColor:"#fff2db" ,width:"100px", height:"100px", borderRadius:"50px"}}>
                                <img src={detail.icon} alt="Icon Image" height={"50px"} width={"50px"}/>
                            </Button>
                            <Typography variant="h5" sx={{textTransform:'capitalize'}}>{detail.name}</Typography>
                        </Stack>
                ))
            }
        </Stack>

    </Stack>
    )
}

export default Detail;