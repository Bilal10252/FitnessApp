import { Stack } from "@mui/material";
import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
    return (
        <Stack alignItems={'center'} justifyContent={'center'} width={'100%'} direction={'row'}>
            <InfinitySpin color="#4fa94d" width='200'/>
            {/* <Audio
    height = "80"
    width = "80"
    radius = "9"
    color = 'green'
    ariaLabel = 'three-dots-loading'     
    wrapperStyle
    wrapperClass
  />           */}
        </Stack>
    )
}

export default Loader;