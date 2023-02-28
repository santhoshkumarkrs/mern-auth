import React, { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    if (name === "") {
      alert("please enter your name");
    } else if (email === "") {
      alert("please enter your email");
    } else if (!email.includes("@")) {
      alert("enter valid email");
    } else if (password === "") {
      alert("enter your password");
    } else if (password.length < 6) {
      alert("password must be 6 character");
    } else {
      try {
        const url = "http://localhost:8000/api/Register";
        const resp = await axios.post(url, data);
        console.log(resp);
        if (resp.data.message === "User is created") {
          navigate("/login");
        } else {
          alert(resp.data.message);
        }
      } catch (error) {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) {
          setError(error.response.data.message);
        }
      }
    }
  };

  return (
    <div>
      <form className="form">
        <div>
          <h1>SignUp</h1>
        </div>
        <div>
          <label>Name</label>
          <br />
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={data.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email</label>
          <br />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password</label>
          <br />
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            value={data.password}
            onChange={handleChange}
          />
        </div>
        <Button className="btn" onClick={handleSubmit}>
          SignUp
        </Button>
        <p>
          Already have an account ? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
