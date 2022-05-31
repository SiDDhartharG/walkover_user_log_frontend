import { Table, TableBody, TableContainer, TableHead, TableRow, Paper, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { REST_ROW, StyledTableCell, StyledTableRow } from "../Utils/tableView";

function TableView(props) {
  const { tablename } = useParams();
  const [boolAdd, setBoolAdd] = useState(false);
  const [rows, setRows] = useState([])
  const [newRowDetails, setNewRowDetails] = useState(REST_ROW);
  const onLogoutClick = () => {
    localStorage.removeItem("token");
    Navigate("/");
  };



  function onClickAddRow() {
    setBoolAdd(!boolAdd);
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setNewRowDetails({
      ...newRowDetails,
      [name]: value,
    });
  }
  function handleAddIconClick(e) {
    e.preventDefault();
    console.log(newRowDetails);
  }
  return (
    <div>
      <div className="nav">
        <div className="nav-left">
          <span style={{ fontSize: "30px" }}>UserLogs</span>
        </div>
        <div className="nav-right" style={{ justifyContent: "right" }}>
          <Button color="secondary" onClick={onLogoutClick}>
            Logout
          </Button>
        </div>
      </div>
      <div className="tableview-div">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "30px" }}>Table: {tablename}</div>
          <Button variant="outlined" onClick={onClickAddRow} style={{ margin: "20px" }}>
            Add Record
          </Button>
        </div>
        <div className="tableview-table">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              {boolAdd ? (
                <TableBody>
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      <TextField
                        variant="filled"
                        color="success"
                        name="name"
                        value={newRowDetails.name}
                        placeholder="Enter name"
                        onChange={handleChange}
                        required="true"
                      />
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <TextField
                        variant="filled"
                        color="success"
                        name="email"
                        value={newRowDetails.email}
                        placeholder="Enter email"
                        onChange={handleChange}
                        required="true"
                      />
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <TextField
                        variant="filled"
                        color="success"
                        name="number"
                        value={newRowDetails.number}
                        placeholder="Enter number"
                        onChange={handleChange}

                      />
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <TextField

                        variant="filled"
                        color="success"
                        name="date"
                        value={newRowDetails.date}
                        placeholder="Enter date"
                        onChange={handleChange}
                      />
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <div className="actions" onClick={handleAddIconClick}>
                        <AddCircleOutlineIcon />
                      </div>
                    </StyledTableCell>
                  </StyledTableRow>
                </TableBody>
              ) : (
                ""
              )}
              <TableHead>
                <TableRow>
                  <StyledTableCell>Name-entity</StyledTableCell>
                  <StyledTableCell align="right">email-entity</StyledTableCell>
                  <StyledTableCell align="right">phone-entity</StyledTableCell>
                  <StyledTableCell align="right">date-entity</StyledTableCell>
                  <StyledTableCell align="right">actions</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.email}</StyledTableCell>
                    <StyledTableCell align="right">
                      {row.phonenumber}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.date}</StyledTableCell>
                    <StyledTableCell align="right">
                      <div className="actions">
                        <DeleteIcon style={{ marginRight: "2px" }} />{" "}
                        <EditIcon style={{ marginLeft: "2px" }} />
                      </div>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
              <div>
                <br></br>
              </div>

            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default TableView;
