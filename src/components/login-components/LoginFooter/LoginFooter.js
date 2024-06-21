// Footer.js
import React from "react";

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
    <div className="footer-links">
      {data.sections.map((section, index) => (
        <FooterSectionComponent key={index} {...section} />
      ))}
    </div>
    <div className="footer-bottom">
      {data.policies.map((policy, index) => (
        <a key={index} href={policy.url}>
          {policy.text}
        </a>
      ))}
      <div className="language-selector">
        <label htmlFor="language">Language: </label>
        <select id="language">
          {data.languages.map((language, index) => (
            <option key={index} value={language}>
              {language}
            </option>
          ))}
        </select>
      </div>
    </div>
    <div className="footer-social">
      {data.socialLinks.map((social, index) => (
        <a key={index} href={social.url} className="social-icon">
          {social.platform}
        </a>
      ))}
    </div>
  </footer>
);

export default Footer;
