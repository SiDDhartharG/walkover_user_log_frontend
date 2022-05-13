import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
function Landing(props) {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") && localStorage.getItem("token") !== "") {
      navigate("/home");
    }
  }, []);

  return (
    <div className="landing-page">
      <div className="landing-div">
        <div className="landing-div-left">
          <h1>UserLogs</h1>
          <p>Welcome to UserLogs</p>
        </div>
        <div className="landing-div-right">
        <Grid style={{display:"flex",flexDirection:"column",width:"60%",height:"100%",margin:"auto"}} container spacing={2}>
          <Grid item xs={12} lg={6} style={{}}>
            <Link to="/login">
              <div className="ls-div">Login</div>
            </Link>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Link to="/signup">
              <div className="ls-div">Signup</div>
            </Link>
          </Grid>
        </Grid>
        </div>
      </div>
    </div>
  );
}

export default Landing;
