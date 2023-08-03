import React, { useState } from "react";
import "./Sign.css";
import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function SignIn() {
  const [data, setdata] = useState({
    email: "",
    password: "",
  });

  const [loginStatus, setLoginStatus] = useState(null);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setdata((prevData) => ({ ...prevData, [name]: value }));
  };

  const navigate = useNavigate(); // Create a navigate function

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        // Handle successful login here if needed
        setLoginStatus("success");
        navigate("/dashboard"); // Navigate to the dashboard after successful login
      })
      .catch((err) => {
        alert(err.message);
        setLoginStatus("failed");
      });
  };

  return (
    <div className="up-cont">
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            onChange={handleInput}
            type="text"
            name="email"
            id="email"
            value={data.email}
          />
        </div>
        <div className="input-container">
          <label htmlFor="passw">Password</label>
          <input
            type="password"
            name="password"
            id="passw"
            onChange={handleInput}
            value={data.password}
          />
        </div>

        <div className="button">
          <button type="submit">Login</button>
        </div>
        {loginStatus === "success" && (
          <div className="message">
            <p>Login successful!</p>
          </div>
        )}
        {loginStatus === "failed" && (
          <div className="message">
            <p>Login failed. Please check your email and password.</p>
          </div>
        )}
      </form>
     
    </div>
    <div className="img">
        <img src="https://yuvadisha.bizjunket.co.nz/wp-content/uploads/2019/08/left-col-bg.jpg?id=4648" />
      </div>
    </div>
  );
}

export default SignIn;
