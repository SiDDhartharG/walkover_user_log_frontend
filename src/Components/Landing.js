import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

function Landing(props) {
  return (
    <div className="landing-page">
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <Link to="/login">
            <div>Login</div>
          </Link>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Link to="/signup">
            <div>Signup</div>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default Landing;
