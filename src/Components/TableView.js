import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { margin } from "@mui/system";

function TableView(props) {
  const [boolAdd, setBoolAdd] = useState(false);
  const [newRowDetails, setNewRowDetails] = useState({
    name: "",
    email: "",
    number: "",
    date: "",
  });
  const onLogoutClick = () => {
    localStorage.removeItem("token");
    Navigate("/");
  };
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  function createData(
    name: string,
    email: email,
    phonenumber: number,
    date: Date
  ) {
    return { name, email, phonenumber, date };
  }

  const rows = [
    createData("Harsh Soni", "soni.hs@gmai.com", 7999901493, "12/05/2001"),
    createData("Thor", "thor@gmail.com", 999292922, "23/01/0001"),
    createData("Sidg", "sidg@gmail.com", 3322333424, "24/02/2001   "),
  ];
  function onClickAddRow() {
    console.log("de");
    console.log(boolAdd);
    setBoolAdd(!boolAdd);
    console.log(boolAdd);
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
      <div className="tableview-div">
        <div className="tableview-header">
          <span>Here is your table "tableName"</span>
        </div>
        <div className="tableview-table">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
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
            </Table>
          </TableContainer>
        </div>
        <div className="add-row">
          <Button
            variant="outlined"
            onClick={onClickAddRow}
            style={{ margin: "20px" }}
          >
            Add Record
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TableView;
