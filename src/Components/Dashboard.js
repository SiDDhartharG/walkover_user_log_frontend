import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import React, { useState } from "react";
import { TableCard } from "./";
import { Link, useNavigate } from "react-router-dom";
import { GetTablesFromToken } from "../Utils/token";
import SearchIcon from "@mui/icons-material/Search";

function Dashboard(props) {
  const navigate = useNavigate();
  const [searchProperties, setSearchProperties] = useState("");
  function handleAddClick(e) {
    e.preventDefault();
    navigate("/create-table");
  }
  const handleSearchChange = (event) => {
    setSearchProperties(event.target.value);
  };
  const filterTable = (tableArray = []) => {
    return tableArray.filter(tableName => tableName.includes(searchProperties))
  } 
  return (
    <div className="dashboard">
      <div className="search-bar">
        <SearchIcon style={{ marginLeft: "10px" }} />
        <input
          type="text"
          name="tablename"
          value={searchProperties.searchText}
          placeholder="Enter Name of Table to search"
          onChange={handleSearchChange}
        ></input>
      </div>
     
      <div className="table-list">
        {filterTable(GetTablesFromToken()).map((tableName) => {
          return <TableCard tableName={tableName} />;
        })}
        <TableCard
          showIcon={false}
          tableName={
            <div className="add" onClick={handleAddClick}>
              Add Table
              <AddCircleOutlineIcon color="primary" fontSize="large" />
            </div>
          }
        />
      </div>
    </div>
  );
}

export default Dashboard;
