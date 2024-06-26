import "./Login.scss";
import { footerData, loginBottom, sectionsData } from "../../data";
import LoginHeader from "../../components/login-components/LoginHeader/LoginHeader";
import LoginSections from "../../components/login-components/login-sections/LoginSections";
import Gallery from "../../components/login-components/OpenToWork/Z-Gallery";
import ConectAndLearn from "../../components/login-components/ConnectAndLearn/ConectAndLearn";
import FindFriends from "../../components/login-components/FindFriends/FindFriends";
import JoinColleagues from "../../components/login-components/JoinColleagues/JoinColleagues";
import Footer from "../../components/login-components/LoginFooter/LoginFooter";

const Login = () => {
  return (
    <div className="main-login-container">
      <LoginHeader />
      <h1 className="main-heading">Welcome to your professional community</h1>

      <section className="login-section">
        <form method="POST" className="loginForm">
          {/* Each from group is an input field */}
          <div className="google-signin-button">
            Continue with Google{" "}
            <img src="google.svg" alt="" className="googleauth" />
          </div>
          <div className="google-signin-button">Sign in with email</div>
          {/* Each form group above is an input field */}

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

          <p className="new-to-linkedin?">
            New to LinkedIn? <a href="##">Join now</a>
          </p>

          {/* Google Section */}
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
            buttonHeader={section.buttonHeader}
            description={section.description}
            buttons={section.buttons}
            coloredBackground={section.coloredBackground}
          />
        ))}
      </div>

      <div className="opentowork">
        <Gallery />
      </div>

      <div className="connect-and-learn">
        <ConectAndLearn />
      </div>
      <div className="Find-Friends">
        <FindFriends />
      </div>
      <div className="join-colleagues">
        <JoinColleagues />
      </div>
      <div className="footer">
        <Footer data={footerData} />
      </div>
      <div className="LoginBottom">
        <div className="copyright">
          <img src="black-white-logo.svg" alt="" />
          <h6>© 2024</h6>
        </div>
        {loginBottom.map((item, index) => (
          <a key={index} href={item.url}>
            <span>{item.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Login;
