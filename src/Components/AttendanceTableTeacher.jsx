import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#3f51b5",
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

export default function AttendanceTableTeacher(props) {
  const classes = useStyles();
  const [allcheck, setallcheck] = useState(false);
  // const [flag, setFlag] = useState(new Array(props.data.length, false));
  const [flag, setFlag] = useState(() => {
    let arr = [];
    for (let i = 0; i < props.data.length; i++) {
      arr.push(false);
    }
    return arr;
  });

  function checker(idx, event) {
    props.mark(event);
    let newFlags = flag;
    newFlags[idx] = !newFlags[idx];
    setFlag(newFlags);
  }

  function toggleAll(e) {
    if (e.target.checked) {
      setFlag(() => {
        let arr = [];
        for (let i = 0; i < props.data.length; i++) {
          arr.push(true);
          props.mark({
            target: { checked: true, value: props.data[i].username },
          });
        }
        return arr;
      });
    } else {
      setFlag(() => {
        let arr = [];
        for (let i = 0; i < props.data.length; i++) {
          arr.push(false);
          props.mark({
            target: { checked: false, value: props.data[i].username },
          });
        }
        return arr;
      });
    }
  }

  return (
    <TableContainer component={Paper} class="w-50 m-auto">
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Name of Student</StyledTableCell>
            <StyledTableCell align="center">Email-ID</StyledTableCell>
            <StyledTableCell align="center">
              <Checkbox
                checked={flag.includes(false) ? false : true}
                onClick={toggleAll}
              />
              Present/Absent
            </StyledTableCell>
            {/* <StyledTableCell align="center">Current</StyledTableCell>
            <StyledTableCell align="center">Total</StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((dat, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell align="center" component="th" scope="row">
                {dat.name}
              </StyledTableCell>
              <StyledTableCell align="center">{dat.username}</StyledTableCell>
              <StyledTableCell align="center">
                <Checkbox
                  checked={flag[index]}
                  onClick={(e) => checker(index, e)}
                  value={dat.username}
                />
              </StyledTableCell>
              {/* <StyledTableCell align="center">{course.current}</StyledTableCell>
              <StyledTableCell align="center">{course.total}</StyledTableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
