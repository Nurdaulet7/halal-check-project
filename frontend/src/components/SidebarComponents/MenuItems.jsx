import { BiSearchAlt, BiLeaf } from "react-icons/bi";
import { GrCertificate } from "react-icons/gr";
import { RiTeamLine } from "react-icons/ri";
import { PiBarcode, PiPhoneCallBold } from "react-icons/pi";
import { TbMessage2Question } from "react-icons/tb";
import { v4 as uuidv4 } from "uuid";
import { MenuItem } from "./MenuItem.jsx";
import styles from "../../styles/Sidebar.module.css";

const menuItem = [
  {
    path: "/vertification",
    name: "Halal Verification",
    icon: <BiSearchAlt />,
  },
  {
    path: "/scanner",
    name: "Barcode Scanner",
    icon: <PiBarcode />,
  },
  {
    path: "/additives",
    name: "E-additives",
    icon: <BiLeaf />,
  },
  {
    path: "/certificate",
    name: "Certified Enterprises",
    icon: <GrCertificate />,
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

export const MenuItems = () => {
  return (
    <ul className={`${styles["menu-links"]}`}>
      {menuItem.map((item) => (
        <MenuItem item={item} key={uuidv4()} />
      ))}
    </ul>
  );
};
