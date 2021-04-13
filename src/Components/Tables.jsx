import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function StudentDetailsTable(props) {
  const classes = useStyles();

  return {
    0: (
      <>
        <TableContainer component={Paper} class="w-50 m-auto">
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Name</StyledTableCell>
                <StyledTableCell align="center">Email</StyledTableCell>
                <StyledTableCell align="center">Phone</StyledTableCell>
                <StyledTableCell align="center">No. of Courses</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.courses.map((course, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell align="center" component="th" scope="row">
                    {course.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {course.email}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {course.phone}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {course.totalcourses}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    ),
    1: (
      <>
        <TableContainer component={Paper} class="w-50 m-auto">
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Class</StyledTableCell>
                <StyledTableCell align="center">Subject</StyledTableCell>
                <StyledTableCell align="center">TeacherName</StyledTableCell>
                <StyledTableCell align="center">Teacher Email</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.courses &&
                props.courses.map((detail, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell align="center" component="th" scope="row">
                      {detail.class}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {detail.subject}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {detail.name}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {detail.email}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    ),
    2: (
      <>
        <TableContainer component={Paper} class="w-50 m-auto">
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Name</StyledTableCell>
                <StyledTableCell align="center">Email</StyledTableCell>
                <StyledTableCell align="center">Current</StyledTableCell>
                <StyledTableCell align="center">Total</StyledTableCell>
                <StyledTableCell align="center">Percentage</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.courses.map((course, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell align="center" component="th" scope="row">
                    {course.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {course.username}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {course.current}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {course.total}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {course.percentage}%
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    ),
    3: (
      <>
        <TableContainer component={Paper} class="w-50 m-auto">
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Class</StyledTableCell>
                <StyledTableCell align="center">Subject</StyledTableCell>
                <StyledTableCell align="center">Teacher</StyledTableCell>
                <StyledTableCell align="center">Current</StyledTableCell>
                <StyledTableCell align="center">Total</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.courses.map((course, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell align="center" component="th" scope="row">
                    {course.class}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {course.subject}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {course.teacher}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {course.current}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {course.total}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    ),
  }[props.index];
}
