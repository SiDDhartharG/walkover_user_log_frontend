import { Button, Card } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import { TableCard } from "./";

function Dashboard(props) {
  return (
    <div className="dashboard">
      <div className="table-list">
        <TableCard />
        <TableCard />
        <TableCard />
      </div>
      <div className="add">
        <Button
          variant="contained"
          style={{marginTop:"20px", width: "50px", height: "50px",  borderRadius: "200px" }}
        >
          <AddIcon />
        </Button>
      </div>
    </div>
  );
}

export default Dashboard;
