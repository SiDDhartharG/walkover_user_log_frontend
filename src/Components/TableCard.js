import React from "react";
import { Link } from "react-router-dom";

function TableCard(props) {
  return (
    <div class="card" style={{width: "18rem"}}>
      <div class="card-body">
        <h5 class="card-title">Table Name</h5>
        
       <Link to='/table/{}'>View</Link>
      </div>
    </div>
  );
}

export default TableCard;
