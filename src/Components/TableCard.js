import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function TableCard({ tableName, showIcon = true }) {
  return (
    <div class="card" style={{ height: "100px", width: "18rem", display: "flex", placeContent: "center", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
      <Link to={`/table/${tableName}`} style={{ textDecoration: "none", color: "black" }}>
        <div class="card-body">
          <h5 class="card-title" style={{ display: "flex", justifyContent: "center" }}>{tableName}&nbsp;&nbsp;{showIcon && <ArrowForwardIosIcon />}</h5>
        </div>
      </Link>
    </div>
  );
}

export default TableCard;
