import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import React from "react";
import { TableCard } from "./";
import { useNavigate } from "react-router-dom";
import { GetTablesFromToken } from "../Utils/token";

function Dashboard(props) {
  const navigate = useNavigate();
  function handleAddClick(e) {
    e.preventDefault();
    navigate('/create-table')
  }
  return (
    <div className="dashboard">
      <div className="table-list">
        {
          GetTablesFromToken().map(tableName => {
            return <TableCard tableName={tableName} />
          })
        }
        <TableCard showIcon={false} tableName={<div className="add" onClick={handleAddClick}>
          Add Table<AddCircleOutlineIcon color="primary" fontSize="large" />
        </div>} />
      </div>
    </div>
  );
}

export default Dashboard;
