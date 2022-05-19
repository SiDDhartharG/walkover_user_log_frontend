import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function CreateTable(props) {
  const navigate = useNavigate();
  const onLogoutClick = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div>
      <div className="nav">
        <div className="nav-left" >
          <span>UserLogs</span>
        </div>
        <div className="nav-right">
          <div className="nav-right-user">
            <span>Username</span>
          </div>
          <div className="nav-right-logout">
            <Button color="secondary" onClick={onLogoutClick}>
              Logout
            </Button>
          </div>
        </div>
      </div>
      <div className="creattable-form"></div>
    </div>
  );
}

export default CreateTable;
