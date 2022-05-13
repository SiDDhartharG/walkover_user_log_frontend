import React, { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import API from "../Api/api.js";
function Login(props) {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") && localStorage.getItem("token") !== "") {
      navigate("/home");
    }
  }, []);
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
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

    const { email, password } = userDetails;
    const response = await API.login({ email, password });
    if (response.status === 201) {
      localStorage.setItem("token", response?.data?.token);
      navigate("/home");
      return;
    }
  };
  return (
    <div className="login">
      <div className="login-form"></div>
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
      <Button variant="contained" onClick={handleSubmit}>
        Login
      </Button>
    </div>
  );
}

export default Login;
