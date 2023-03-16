const Register = () => {
  return (
    <div className="registerContainer">
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
      <div className="registerForm">
        <div className="register">
          <div className="registerText">
            <h1>
              Welcome{" "}
              <span>
                <i className="fa-regular fa-face-smile-wink"></i>
              </span>
            </h1>
          </div>
          <form className="rForm">
            <div className="firstGroup">
              <label>First Name</label>
              <input type="text" name="firstName" id="" />
            </div>

            <div className="lastGroup">
              <label>Last Name</label>
              <input type="text" name="lastName" id="" />
            </div>

            <div className="emailGroup">
              <label>Email</label>
              <input type="email" name="email" id="" />
            </div>

            <div className="passwordGroup">
              <label>Password</label>
              <input type="password" name="password" id="" />
            </div>

            <div className="confirmGroup">
              <label>Confirm Password</label>
              <input type="password" name="password" id="" />
            </div>

            <div className="registerBtn">
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
