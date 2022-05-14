import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodo } from "../redux/todoReducer";
import { Paper, Box, Container,Typography ,Grid } from "@mui/material";
// import Loader from '../UI/loader'
import CircularProgress from '@mui/material/CircularProgress';


const Todo = () => {
  const dispatch = useDispatch();
  const todoData = useSelector((state) => state.todos);
  const auth = useSelector((state) => state.userAuth.user);
  const paperStyle = {
    padding: 20,
    height: "15vh",
    width: 280,
    margin: "50px auto",
  };
  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch]);

  if(!todoData.isloading){
    return ( <span align="center" >
    <Box   padding={2}>
      <Typography >
   Loading.. <CircularProgress/></Typography> </Box> 
    </span>)
  }

  return (
    <div>
    
    <Box padding={2}>
      <Typography align="center" variant="h2" component="h4">
      {auth}</Typography> </Box>  
      <Box padding={1}>
        <Typography align="center" variant="h5" component="h2">
        Todo List </Typography></Box>
        <Box padding={1}>
        <Typography align="center" variant="body1" component="p">
        Readux Toolkit and Redux Thunk</Typography>
         </Box>  
      <hr />
      <div>
        <ul>
          {todoData.tododata.map((data) => (
            <>
              <Container>
                {" "}
                <Grid>
                  <Grid item xs={12} sm={6} md={3}>
                  <Paper elevation={8} style={paperStyle}>
                    <Typography align="center" variant="body1" component="p">
                      <Box paddig={5} >
                    {data.userId}
                    ID: {data.id}
                    <br />
                    Title: {data.title}
                    Completed: {data.completed ? "True" : "False "}
                    <br />
                    </Box>
                  </Typography>
                  </Paper>
                  </Grid>
                </Grid>
              </Container>
            </>
          ))}
        </ul>
      </div>
      <hr />
    </div>
  );
};

export default Todo;
