import axios from "axios";
import React, { useState } from "react";
import "./login.scss";
export default function LoginForm() {
  const [userLogin, setUserLogin] = useState({});
  const [data, setData] = useState({});

  const config = {
    method: "post",
    //url: "http://localhost:8080/api/auth/signin",
    url: "http://localhost:8088/api/auth/signin",
    headers: {
      "Content-Type": "application/json",
    },
    data: userLogin,
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserLogin({ ...userLogin, [name]: value });
  };
  const handleSignIn = async (event) => {
    event.preventDefault();
    console.log("userLogin", userLogin);
    await axios(config)
      .then((result) => {
        console.log(result);
        localStorage.setItem("token", result.data.token);
        return setData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
    //checkuser();
  };
  return (
    <div className="form-login">
      <h2 style={{ textAlign: "center" }}>Login Form</h2>
      <form onSubmit={handleSignIn}>
        <input
          onChange={handleChange}
          type="tetx"
          name="username"
          placeholder="username"
          value={userLogin.username || ""}
        />
        <input
          onChange={handleChange}
          type="tetx"
          name="password"
          placeholder="password"
          value={userLogin.password || ""}
        />

        <button type="submit">Login</button>
      </form>
      <br />
    </div>
  );
}
