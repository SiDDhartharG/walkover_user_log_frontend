import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import React, { useState } from "react";
import { TableCard } from "./";
import { Link, useNavigate } from "react-router-dom";
import { GetTablesFromToken } from "../Utils/token";
import SearchIcon from "@mui/icons-material/Search";

function Dashboard(props) {
  const navigate = useNavigate();
  const [searchProperties, setSearchProperties] = useState({
    searchText: "",
    searchResult: [],
  });
  function handleAddClick(e) {
    e.preventDefault();
    navigate("/create-table");
  }
  const handleSearchChange = (event) => {
    setSearchProperties({
      searchText: event.target.value,
      searchResult: GetTablesFromToken().filter(
        (tableName) => tableName == event.target.value
      ),
    });
    console.log(searchProperties);
  };

  return (
    <div className="dashboard">
      <div className="search-container">
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
        <span style={{ margin: "60px" }}>
          {searchProperties.searchResult.length} matching
        </span>
        {
          <div className="search-results">
            <ul>
              {searchProperties.searchResult.map((tableName) => {
                return (
                  <Link to={`/table/${tableName}`}>
                    <li className="search-results-row">
                      <span>{tableName}</span>
                    </li>
                  </Link>
                );
                return null;
              })}
            </ul>
          </div>
        }
      </div>
      <div className="table-list">
        {GetTablesFromToken().map((tableName) => {
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
