import React,{useState} from 'react'
import { useDispatch,useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import {Drawer, List, ListItemButton, ListItemIcon,ListItemText,IconButton ,Button} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { logout } from "../redux/redux";

const DrawerComp =()=>{
    const [openDrawer, setOpenDrawer]=useState(false)
    const PAGES=['Home', 'About' ,'Profile']
   
    const navigate = useNavigate();
          const dispatch =useDispatch()
  const auth =useSelector((state)=>state.userAuth.user)

    const handleChange = ( newValue) => {

        if (newValue === 0) {
          return navigate("/home");
        } else if (newValue === 1) {
          return navigate("/about");
        }
        else if (newValue === 2) {
            return navigate("/profile");
          }
        else if (newValue === 3) {
            return navigate("/todo");
        }
      };

      const LoginHandler=()=>{
        navigate("/login");
      }
    
      const singinHandler=()=>{
        navigate("/signup");
      }
      const logoutHandler=()=>{
        dispatch(logout(''))
        navigate("/");
      }
    return(
    <>
        <Drawer open={openDrawer}   onClose={()=>setOpenDrawer(false)}   >
            <List  >
                {
                    PAGES.map((page,index)=>(
                        <ListItemButton key={index} onClick={()=>handleChange(index)} >
                        <ListItemIcon>
                            <ListItemText>
                                {page}
                            </ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                    ))
                }
               
            </List>
            {!auth && <Button sx={{ marginBottom: "5px" }} variant="contained" onClick={LoginHandler}>
            Login
          </Button>}<br/>
         {!auth && <Button sx={{ marginBottom: "auto" }} variant="contained" onClick={singinHandler}>
            Signup
          </Button>}
          {auth && <Button sx={{ marginBottom: "auto" }} variant="contained" onClick={logoutHandler}>
            Logout
          </Button>}
              
        </Drawer>
        <IconButton sx={{color:'white', marginLeft:'auto'}} onClick={()=>setOpenDrawer(!openDrawer) }>
        <MenuIcon/>
        </IconButton>
    </>
    )
}

export default DrawerComp