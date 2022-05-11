import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
function Signup(props) {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();

    const { name, email, password, confirm_password } = userDetails;
    if ((name, email && password === confirm_password)) {
      console.log(userDetails);
    } else {
      console.log("password and confirmpassword dont match");
    }
  }
  return (
    <div className="signup">
      <div className="signup-form">
        <TextField
          label="name"
          name="name"
          value={userDetails.name}
          color="secondary"
          focused
          onChange={handleChange}
        />
        <TextField
          label="email"
          name="email"
          value={userDetails.email}
          color="secondary"
          focused
          onChange={handleChange}
        />
        <TextField
          label="password"
          name="password"
          value={userDetails.password}
          color="secondary"
          focused
          onChange={handleChange}
        />
        <TextField
          label="confirm Password"
          name="confirm_password"
          value={userDetails.confirm_password}
          color="secondary"
          focused
          onChange={handleChange}
        />
        <Button variant="contained" onClick={handleSubmit}>
         Signup
        </Button>
      </div>
    </div>
  );
}

export default Signup;
