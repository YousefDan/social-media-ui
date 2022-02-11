import "./register.css";
const Register = () => {
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">Social Media</h3>
          <span className="registerDesc">
            Connect with friends and the world around you on Social Media.
          </span>
        </div>
        <div className="registerRight">
          <div className="registerBox">
          <input placeholder="Username" type="text" className="registerInput" />
            <input placeholder="Email" type="email" className="registerInput" />
            <input
              placeholder="Password"
              type="password"
              className="registerInput"
            />
            <input
              placeholder="Confirm Password"
              type="password"
              className="registerInput"
            />
            <button className="registerButton">Sign Up</button>
            <span className="registerForgot">Forgot Password?</span>
            <button className="registerLoginBtn">Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
