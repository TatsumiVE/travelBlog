import styled from "./register.module.css";
const Register = () => {
  return (
    <div className={styled.registerContainer}>
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
      <div className={styled.registerForm}>
        <div className={styled.register}>
          <div className={styled.registerText}>
            <h1>
              Welcome{" "}
              <span>
                <i className="fa-regular fa-face-smile-wink"></i>
              </span>
            </h1>
          </div>
          <form>
            <div className="firstGroup">
              <label>First Name</label>
              <input type="text" name="firstName" id="" />
            </div>

            <div className={styled.lastGroup}>
              <label>Last Name</label>
              <input type="text" name="lastName" id="" />
            </div>

            <div className={styled.emailGroup}>
              <label>Email</label>
              <input type="email" name="email" id="" />
            </div>

            <div className={styled.passwordGroup}>
              <label>Password</label>
              <input type="password" name="password" id="" />
            </div>

            <div className={styled.confirmGroup}>
              <label>Confirm Password</label>
              <input type="password" name="password" id="" />
            </div>

            <div className={styled.registerBtn}>
              <a href="/" target="_blank">
                Register
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
