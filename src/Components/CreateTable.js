import { Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import API from "../Api/api";

function CreateTable(props) {
  const navigate = useNavigate();
  const onLogoutClick = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  const [tableDetails, setTableDetails] = useState({
    tableName: "",
    nameEntity: "",
    emailEntity: "",
    phonenoEntity: "",
    dateEntity: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setTableDetails({
      ...tableDetails,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(tableDetails);
   //code for submitting entities name and adding table

   //after adding table redirecting to dashboard
   navigate('/home');
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
              value={tableDetails.tableName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label for="name-entity">Name Entity</label>
            <input
              type="text"
              className="form-control"
              id="name-entity"
              placeholder="Enter Name Entity"
              name="nameEntity"
              value={tableDetails.nameEntity}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label for="email-entity">Email Entity</label>
            <input
              type="text"
              className="form-control"
              id="email-entity"
              placeholder="Enter Email Entity"
              name="emailEntity"
              value={tableDetails.emailEntity}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label for="phoneno-entity">Phone Number Entity</label>
            <input
              type="text"
              className="form-control"
              id="phoneno-entity"
              placeholder="Enter Phone number Entity name"
              name="phonenoEntity"
              value={tableDetails.phonenoEntity}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label for="date-entity">Date Entity</label>
            <input
              type="text"
              className="form-control"
              id="date-entity"
              placeholder="Enter Date Entity name"
              name="dateEntity"
              value={tableDetails.dateEntity}
              onChange={handleChange}
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
