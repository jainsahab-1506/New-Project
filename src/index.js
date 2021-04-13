import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Form from "./App";
import FormTeacher from "./Components/RegistrationPage";
import Login from "./Components/LoginPage";
import SDash from "./Components/StudentDashboard";
import TDash from "./Components/TeacherDashboard";
import HDash from "./Components/HostDashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <div>
    <Router>
      <Switch>
        <Route path="/" exact component={Form} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={FormTeacher} />
        <Route path="/dashboard/Student" component={SDash} />
        <Route path="/dashboard/Teacher" component={TDash} />
        <Route path="/dashboard/Host" component={HDash} />
      </Switch>
    </Router>
  </div>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
