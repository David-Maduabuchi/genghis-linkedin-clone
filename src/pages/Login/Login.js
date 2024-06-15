import { useState } from "react";
import LoginHeader from "../../components/LoginHeader/LoginHeader";
import "./Login.scss";
import LoginSections from "../../components/login-sections/LoginSections";
import { sectionsData } from "../../data";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="main-login-container">
      <LoginHeader />
      <h1 className="main-heading">Welcome to your professional community</h1>

      <section>
        <form className="loginForm">
          {/* Each from group is an input field */}
          <div className="form-group">
            <label htmlFor="email">Email or Phone Number</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="david.maduabuchi.243854@unn.edu.ng"
            />
          </div>
          {/* Each form group is an input field */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-wrapper">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                name="password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="toggle-button"
              >
                {passwordVisible ? (
                  <span className="hide-icon">Hide</span>
                ) : (
                  <span className="show-icon">Show</span>
                )}
              </button>
            </div>
          </div>
          {/* Each form group above is an input field */}
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Forgot password?
          </a>
          <button className="signin-button">Sign in</button>
          <span className="googlehr">
            <hr /> or <hr />
          </span>
          <p>
            By clicking By clicking Continue to join or sign in, you agree to
            LinkedIn's{" "}
            <a href="https://www.linkedin.com/legal/user-agreement?trk=homepage-basic_auth-button_user-agreement">
              User Agreement
            </a>
            ,{" "}
            <a href="https://www.linkedin.com/legal/privacy-policy?trk=homepage-basic_auth-button_privacy-policy">
              Privacy Policy
            </a>
            ,and{" "}
            <a href="https://www.linkedin.com/legal/cookie-policy?trk=homepage-basic_auth-button_cookie-policy">
              Cookie Policy
            </a>
            .
          </p>

          {/* Google Section */}
          <div className="google-signin-button">
            Continue with Google{" "}
            <img src="google.svg" alt="" className="googleauth" />
          </div>
          <div className="google-signin-button">New to Linkedin? Join Now</div>
        </form>
        <div className="loginImage">
          <img src="login.svg" alt="" />
        </div>
      </section>
      <div className="login-sections">
        {sectionsData.map((section, index) => (
          <LoginSections
            key={index}
            header={section.header}
            description={section.description}
            buttons={section.buttons}
          />
        ))}
      </div>
    </div>
  );
};

export default Login;
