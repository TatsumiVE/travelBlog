import styled from "./login.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const data = [{ email: "1234", password: "1234" }];

const Login: React.FC = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [loginData, setData] = useState(data);

  // const dashboard = (e: any) => {
  //   e.preventDefault();

  //   if (email === "" && password === "") {
  //     alert("Please enter email and password");
  //   } else {
  //     loginData.filter((item) => {
  //       if (item.email === email && item.password === password) {
  //         login();
  //         navigate("/dashboard");
  //       } else {
  //         alert("Your email and password was wrong");
  //       }
  //     });
  //   }
  // };

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
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className={styled.passwordGroup}>
              <label>Password</label>
              <input
                type="password"
                name=""
                id=""
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <div className={styled.button}>
              <Link to="/dashboard">Login</Link>
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
