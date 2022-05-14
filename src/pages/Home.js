import { useSelector } from "react-redux"; 
import { Box, Typography } from "@mui/material";

const Home =()=>{

    const auth=useSelector((state)=> state.userAuth.user)
  
    return(
        <Box>
        <Box padding={2}>
          <Typography align="center" variant="h2" component="h4">
          {auth}</Typography> </Box>  
          <Box padding={1}>
            <Typography align="center" variant="h5" component="h2">
            Home </Typography></Box>
            <Box padding={1}>
            <Typography align="center" variant="body1" component="p">
        Welcome to the Home page</Typography>
         </Box> </Box>
            
    )

}

export default Home