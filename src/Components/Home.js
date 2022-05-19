import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
function Home(props) {
  const navigate = useNavigate();
  const onLogoutClick = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  const handleClick=(e)=>{
    navigate("/home");
  }
  return (
    <div>
      <div className="nav">
        <div className="nav-left" onClick={handleClick}>
          <span>UserLogs</span>
        </div>
        <div className="nav-right">
          <div className="nav-right-user">
            <span>Hello {props.userDetails.username} !</span>
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
