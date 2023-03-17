import styled from "./login.module.css";

const Login = () => {
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
              <input type="email" name="" id="" />
            </div>

            <div className={styled.passwordGroup}>
              <label>Password</label>
              <input type="password" name="" id="" />
            </div>

            <div className={styled.button}>
              <a href="/" target="_blank">
                Login
              </a>
            </div>

            <div className={styled.button}>
              <a href="/register" target="_blank">
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
