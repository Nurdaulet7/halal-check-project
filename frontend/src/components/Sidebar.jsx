import React, { useState, useEffect } from "react";
import { BiSearchAlt, BiLeaf } from "react-icons/bi";
import { GrCertificate, GrMap } from "react-icons/gr";
import { RiTeamLine } from "react-icons/ri";
import { PiBarcode, PiPhoneCallBold } from "react-icons/pi";
import { TbMessage2Question } from "react-icons/tb";
import logo from "../img/logo.png";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const darkToggle = () => setDarkMode(!darkMode);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    // Применение класса 'dark-mode' к <body>, в зависимости от состояния darkMode
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const menuItem = [
    {
      path: "/",
      name: "Halal Verification",
      icon: <BiSearchAlt />,
    },
    {
      path: "/scanner",
      name: "Barcode Scanner",
      icon: <PiBarcode />,
    },
    {
      path: "/additivies",
      name: "E-additivies",
      icon: <BiLeaf />,
    },
    {
      path: "/certificate",
      name: "Halal Certification",
      icon: <GrCertificate />,
    },
    {
      path: "/establishments",
      name: "Establishments Map",
      icon: <GrMap />,
    },
    {
      path: "/about",
      name: "About us",
      icon: <RiTeamLine />,
    },
    {
      path: "/faq",
      name: "FAQ",
      icon: <TbMessage2Question />,
    },
    {
      path: "/contact",
      name: "Contact us",
      icon: <PiPhoneCallBold />,
    },
  ];
  return (
    <div className="container">
      <nav className={isOpen ? "sidebar close" : "sidebar"}>
        <header>
          <div className="image-text">
            <span className="image">
              <img src={logo} alt="logo" />
            </span>

            <div className="text header-text">
              <span className="name">HalalCheck</span>
              <span className="subtext">Your halal lifestyle companion</span>
            </div>
          </div>

          <i className="bx bxs-chevron-left toggle" onClick={toggle}></i>
        </header>

        <div className="menu-bar">
          <div className="menu">
            <ul className="menu-links">
              {menuItem.map((item, i) => (
                <li className="nav-link" key={i}>
                  <NavLink
                    to={item.path}
                    key={i}
                    className={({ isActive }) =>
                      `${isActive && "activeLink"} nav-link`
                    }
                  >
                    <i className="icon">{item.icon}</i>
                    <span className="text nav-text">{item.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="bottom-content">
            <li className="mode">
              <div className="moon-sun">
                <i className="bx bx-moon icon moon"></i>
                <i className="bx bx-sun icon sun"></i>
              </div>
              <span className="mode-text text">DarkMode</span>

              <div
                onClick={darkToggle}
                className={darkMode ? "toggle-switch" : "toggle-switch dark"}
              >
                <span className="switch"></span>
              </div>
            </li>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>

    /* // <div className="container">
    //   <div style={{ width: isOpen ? "375px" : "50px" }} className="sidebar">
    //     <div className="top_section">
        //   <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
    //         <div className="sidebar_head">
    //           <img src={logo} alt="Логотип" />
    //           <span>
    //             <h5>HalalCheck </h5>
    //             <p>Your halal lifestyle companion</p>
    //           </span>
    //         </div>
    //       </h1>
    //       <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
    //         <FaBars onClick={toggle} />
    //       </div>
    //     </div>
    //     {menuItem.map((item, index) => (
    //       <NavLink
            // to={item.path}
            // key={index}
            // className="link"
            // activeclassName="active"
    //       >
    //         <div className="icon">{item.icon}</div>
    //         <div
    //           style={{ display: isOpen ? "block" : "none" }}
    //           className="link_text"
    //         >
    //           {item.name}
    //         </div>
    //       </NavLink>
    //     ))}
    //   </div>
    //   <main>{children}</main>
    // </div> */
  );
};

export default Sidebar;
