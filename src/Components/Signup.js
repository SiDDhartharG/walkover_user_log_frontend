import React, { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import API from "../Api/api";
import { useNavigate } from "react-router-dom";
function Signup(props) {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token") && localStorage.getItem("token") !== "") {
      navigate("/home");
    }
  }, []);
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
  const handleSubmit = async (event) => {
    event.preventDefault();

    const { name, email, password, confirm_password } = userDetails;
    if ((name, email && password === confirm_password)) {
      const response = await API.signup({ name, email, password });
      if (response.status === 201) {
        localStorage.setItem("token", response?.data?.token);
        navigate("/home");
        return;
      }
    } else {
      console.log("password and confirmpassword dont match");
    }
  };
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
