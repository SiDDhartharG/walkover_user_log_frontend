import { Button, getTableBodyUtilityClass } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../Api/api";
import { GetTablesFromToken } from '../Utils/token'
function CreateTable(props) {
  const navigate = useNavigate();
  const onLogoutClick = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  const [tableDetails, setTableDetails] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (GetTablesFromToken()?.includes(tableDetails)) {
      // ::ERROR already table exists
    } else {
      console.log("HELLo");
      const response = await API.addTable(tableDetails)
      if (response.status === 201) {
        localStorage.setItem("token", response?.data?.token)
        navigate("/home");
      }
    }
    console.log("DONE");
  };
  return (
    <div>
      <div className="nav">
        <div className="nav-left">
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
      <div className="creattable-div">
        <div className="creattable-header">
          <span>
            To create a table fill the below entities which will be the
            attributes of the table
          </span>
        </div>
        <div className="creattable-form">
          <div className="form-group">
            <label for="tablename">Table Name</label>
            <input
              type="text"
              className="form-control"
              id="tablename"
              placeholder="Enter Name of the table"
              name="tableName"
              value={tableDetails}
              onChange={(e) => { setTableDetails(e?.target?.value) }}
            />
          </div>
          <Button
            variant="contained"
            color="success"
            onClick={handleSubmit}
            style={{ margin: "20px auto" }}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CreateTable;
