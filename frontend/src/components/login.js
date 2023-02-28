import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    if (email === "") {
      alert("please enter your email");
    } else if (!email.includes("@")) {
      alert("enter valid email");
    } else if (password === "") {
      alert("enter your password");
    } else if (password.length < 6) {
      alert("password must be 6 character");
    } else {
      const url = "http://localhost:8000/api/Login";
      const resp = await axios.post(url, data);
      console.log(resp);

      if (resp.data.message === "login success") {
        console.log(resp.data.message);
        navigate("/welcome");
        // localStorage.setItem("undersdatatoken", resp.result.token);
        setData({ ...data, email: "", password: "" });
      } else {
        alert(resp.data.message);
      }
    }
  };
  return (
    <div>
      <form className="form">
        <div>
          <h1>signIn</h1>
          <br />
          <br />
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
            type="Password"
            name="password"
            placeholder="Enter Your Password"
            value={data.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <Button onClick={handleSubmit} className="btn">
            Login
          </Button>
          <br />
          <br />
          <p>
            Dont have an accound?<Link to="/">Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
export default Login;
