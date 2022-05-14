import { Box, Typography } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
const Loader =()=>{
    return(
        <span align="center" >
        <Box   padding={2}>
        <CircularProgress/> </Box> 
        </span>)

}

export default Loader