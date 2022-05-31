import { Button } from "@mui/material";
import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
function Home() {
  const navigate = useNavigate();
  const onLogoutClick = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  const handleClick = (e) => {
    navigate("/home");
  }
  const [userDetails, setUserDetails] = useState({
    email: "",
    username: "",
    tables: []
  })
  useEffect(() => {

    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      const user = jwtDecode(token);
      setUserDetails({
        username: user.userName,
        email: user.email
      })
    }
  }, [])
  return (
    <div>
      <div className="nav">
        <div className="nav-left" onClick={handleClick}>
          <span>UserLogs</span>
        </div>
        <div className="nav-right">
          <div className="nav-right-user">
            <span>Hello {userDetails.username} !</span>
          </div>
          <div className="nav-right-logout">
            <Button color="secondary" onClick={onLogoutClick}>Logout</Button>

          </div>
        </div>
      </div>
      <div>
        <Dashboard />
      </div>
    </div>
  );
}

export default Home;
