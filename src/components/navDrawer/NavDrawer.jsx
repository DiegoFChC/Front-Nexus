import "./navDrawer.scss";
import logo from "../../assets/Logo_Vertical.png";
import { ListItemIcon, List, ListItem } from "@mui/material";

const NavDrawer = ({ navLinks }) => {
  return (
    <div className="NavDrawer">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="list">
        {navLinks.map((item) => {
          return (
            <div className="btn" key={item.title}>
              <img src={item.icon} alt={item.title} />
              <button key={item.title}>{item.title}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NavDrawer;
