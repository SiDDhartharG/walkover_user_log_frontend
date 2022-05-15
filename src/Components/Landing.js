import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Login from "./Login";
function Landing(props) {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") && localStorage.getItem("token") !== "") {
      navigate("/home");
    }
  }, []);
  function handleLoginCLick(e){
    e.preventDefault();
    navigate('/login');
  }
  function handleSigninCLick(e){
    e.preventDefault();
    navigate('/signin');
  }

  return (
    <div style={{ marginTop: "180px" }}>
      <div className="landing-page">
        <div className="landing-div">
          <div className="landing-div-header">
            <h1>UserLogs</h1>
            <p>Welcome to UserLogs</p>
          </div>
          <div className="landing-div-footer">
            <Grid
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "60%",
                height: "100%",
                margin: "auto",
              }}
              container
              spacing={4}
            >
              <Grid item xs={4} >
                <Button variant="contained" color="success" startIcon={<LoginIcon />} onClick={handleLoginCLick}>Login</Button>
              </Grid>
              <Grid item xs={4} >
                <Button variant="outlined" color="success" startIcon={<HowToRegIcon />} onClick={handleSigninCLick}>Signup</Button>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
