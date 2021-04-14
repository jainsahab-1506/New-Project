import React, { Component, useEffect } from "react";
// import axiom from "axiom"
// import $ from "jquery";
import { Link } from "react-router-dom";
import Spinner from "./Components/Loader";
import AssessmentIcon from "@material-ui/icons/Assessment";
class Form extends Component {
  constructor() {
    super();
    this.state = { isLoading: true };
  }

  componentDidMount() {
    this.setState((prevvalue) => {
      return {
        isLoading: false,
      };
    });
  }

  render() {
    return this.state.isLoading ? (
      <Spinner />
    ) : (
      <div class="jumbotron centered main">
        <div class="container">
          {/* <i class="fas fa-key fa-6x"></i> */}
          {/* <i class="fas fa-8x fa-chart-bar"></i> */}
          <img className="graph-icon" src="bar-chart.svg"></img>
          <h1 class="display-3">Attendance Management</h1>
          <p class="lead">Please Select</p>
          <hr />
          <Link
            class="buttonmain btn btn-dark btn-lg"
            to="/login"
            role="button"
          >
            Login
          </Link>
          <Link
            class="buttonmain btn btn-dark btn-lg"
            to="/register"
            role="button"
          >
            Register
          </Link>
        </div>
      </div>
    );
  }
}
export default Form;
