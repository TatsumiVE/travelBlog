import styled from "./login.module.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const data = [{ email: "john@gmail.com", password: "1234" }];

const Login: React.FC = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [error, setError] = useState<string>("");

  const [loginData, setData] = useState(data);

  const dashboard = (e: any) => {

    e.preventDefault();

    if (email == "") {
      setEmailError("Enter your email.");
    } else {
      setEmailError("");
    }

    if (password == "") {
      setPasswordError("Enter your password.");
    } else {
      setPasswordError("");
    }

    if (email != "" && password != "") {
      loginData.filter(item => {
        if (item.email === email && item.password === password) {
          login();
          navigate("/dashboard")
        } else {
          setError("Your email and password was wrong.");
        }
      })
    } else {
      setError("Please enter email and password.");
    }

  }


  return (
    <div className={styled.loginContainer}>
      <div className="loginBg">
        <div className="titleBox">
          <div className="titleLogin">
            <h1>Travel brings power and love back into your life.</h1>
            <p>
              It allows us to explore new cultures, meet new people, and gain a
              greater understanding of the world we live in.
            </p>
          </div>
        </div>
      </div>

      <div className={styled.loginForm}>
        <div className={styled.login}>
          <div className={styled.text}>
            <div className={styled.error}>
              {error}
            </div>
            <h1>
              Hello{" "}
              <span>
                <i className="fa-regular fa-face-smile-wink"></i>
              </span>
            </h1>
            <p>Enter the information you entered while registering</p>
          </div>
          <form>
            <div className={styled.emailGroup}>
              <label>Email</label>
              <input
                type="email"
                name=""
                id=""
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <span className={styled.error}>
                {emailError}
              </span>
            </div>

            <div className={styled.passwordGroup}>
              <label>Password</label>
              <input
                type="password"
                name=""
                id=""
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <span className={styled.error}>
                {passwordError}
              </span>
            </div>

            <div className={styled.button}>
              <Link to="/dashboard" onClick={dashboard}>Login</Link>
            </div>

            <div className={styled.button}>
              <a href="/#" target="_blank">
                Register
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
