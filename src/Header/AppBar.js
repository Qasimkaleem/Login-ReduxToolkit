import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  AppBar,
  Toolbar,
  Button,
  Tab,
  Tabs,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import DrawerComp from "../components/drawerComp";
import { logout } from "../redux/redux";

const Appbar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log("theme", theme);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.userAuth.user);

  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log("breakPoints", isMatch);

  const PAGES = ["Home", "About", "Profile", "Todos"];

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log("here", event);
    if (newValue === 0) {
      return navigate("/");
    } else if (newValue === 1) {
      return navigate("/about");
    } else if (newValue === 2) {
      return navigate("/profile");
    } else if (newValue === 3) {
      return navigate("/todo");
    }
  };

  const LoginHandler = () => {
    navigate("/login");
  };

  const singinHandler = () => {
    navigate("/signup");
  };
  const logoutHandler = () => {
    dispatch(logout(""));
    navigate("/");
  };
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography sx={{ fontSize: "2rem", paddingX: "1%" }}>
            Routing
          </Typography>
          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                textColor="inherit"
                value={value}
                onChange={handleChange}
                indicatorColor=""
              >
                {PAGES.map((page, index) => (
                  <Tab key={index} label={page} />
                ))}
              </Tabs>
              {!auth && (
                <Button
                  sx={{ marginLeft: "auto" }}
                  variant="contained"
                  onClick={LoginHandler}
                >
                  Login
                </Button>
              )}
              {!auth && (
                <Button
                  sx={{ marginLeft: "10px" }}
                  variant="contained"
                  onClick={singinHandler}
                >
                  Signup
                </Button>
              )}
              {auth && (
                <Button
                  sx={{ marginLeft: "auto" }}
                  variant="contained"
                  onClick={logoutHandler}
                >
                  Logout
                </Button>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Appbar;
