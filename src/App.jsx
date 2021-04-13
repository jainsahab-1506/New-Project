import React, { useEffect } from "react";
// import axiom from "axiom"
// import $ from "jquery";
import { Link } from "react-router-dom";
function Form() {
  // function fetchData() {
  //   const request=axiom.get("localhost:4000/api/login/teacher",{email:"lakshita@gmail.com",password:"qwerty"});
  //   request.then(res =>{
  //     console.log(res.data);
  //   })
  // }

  useEffect(() => {
    const tok = localStorage.getItem("token");
    console.log("token: ", tok);
  });

  return (
    <div class="jumbotron centered main">
      <div class="container">
        <i class="fas fa-key fa-6x"></i>
        <h1 class="display-3">Attendance Management</h1>
        <p class="lead">Please Select</p>
        <hr />
        <Link class="buttonmain btn btn-dark btn-lg" to="/login" role="button">
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
export default Form;
