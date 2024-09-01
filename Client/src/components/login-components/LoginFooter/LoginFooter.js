// Footer.js
import React from "react";
import "./LoginFooter.scss";
const FooterSectionComponent = ({ title, links }) => (
  <div className="footer-section">
    <h4>{title}</h4>
    {links.map((link, index) => (
      <a key={index} href={link.url}>
        {link.text}
      </a>
    ))}
  </div>
);

const Footer = ({ data }) => (
  <footer>
    <div className="footerController">
      <div className="footer-links">
        <img src="login-logo.svg" alt="" />
        {data.sections.map((section, index) => (
          <FooterSectionComponent key={index} {...section} />
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
