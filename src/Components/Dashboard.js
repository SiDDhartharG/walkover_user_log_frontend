import { Button, Card } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import React from "react";
import { TableCard } from "./";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Dashboard(props) {
  const navigate = useNavigate();
  function handleAddClick(e){
    e.preventDefault();
    navigate('/createtable')
  }
  return (
    <div className="dashboard">
      <h1>here is your data</h1>
      <div className="table-list">
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />
      </div>
      <div className="add" onClick={handleAddClick}>
          <AddCircleOutlineIcon color="primary" fontSize="large" />
      </div>
    </div>
  );
}

export default Dashboard;
