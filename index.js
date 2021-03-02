import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Form from './App';
import FormTeacher from './Components/FormTeacher';
import Login from './Components/LoginForm';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
    <div>
    <Router>
        <Switch>
            <Route path="/" exact component={Form}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={FormTeacher}/>
            
        </Switch>
    </Router>
    </div>,
    
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

