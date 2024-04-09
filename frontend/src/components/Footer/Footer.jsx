import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        {/* <h3>HalalCheck</h3> */}
        <p>Your companion in the world of halal nutrition</p>
        <ul className="socials">
          <li>
            <a
              href="https://mail.google.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa">
                <BiLogoGmail />
              </i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa">
                <FaLinkedin />
              </i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa">
                <FaGithub />
              </i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>© HalalCheck 2024</p>
      </div>
    </footer>
  );
};
