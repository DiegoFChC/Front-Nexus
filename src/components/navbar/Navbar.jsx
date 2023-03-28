import "./navbar.scss";
import { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import CreateIcon from "@mui/icons-material/Create";
import { Box, Drawer, IconButton } from "@mui/material";
import logo from "../../assets/Logo_Horizontal.png";
import logo2 from "../../assets/Logo_Vertical.png";
import video from "../../assets/Video2.mp4";
import useMediaQuery from "@mui/material/useMediaQuery";
import NavDrawer from "../navDrawer/NavDrawer";
import loginImage from "../../assets/login.svg";
import registerImage from "../../assets/register.svg";
import menu from "../../assets/menu.svg";

const navLinksPage = [
  { title: "Login", path: "/login", icon: loginImage },
  { title: "Register", path: "/register", icon: registerImage },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  return (
    <div className="Navbar">
      <div className="bg__video">
        <div className="overlay"></div>
        <div className="logo">
          <img
            src={logo2}
            alt="logo"
            style={{ width: `${isNonMobile ? "40%" : "60%"}` }}
          />
        </div>
        <video src={video} autoPlay loop muted />
      </div>
      <nav style={{ height: `${isNonMobile ? "80px" : "60px"}` }}>
        <img src={logo} alt="Logo" />
        {isNonMobile ? (
          <Box>
            {navLinksPage.map((item) => {
              return <button key={item.title}>{item.title}</button>;
            })}
          </Box>
        ) : (
          <img
            className="menu"
            src={menu}
            alt="menu"
            onClick={() => setOpen(true)}
          />
        )}
      </nav>
      <div></div>
      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}

        // sx={{ display: { xs: "flex", sm: "none" } }}
      >
        <NavDrawer navLinks={navLinksPage} />
      </Drawer>
    </div>
  );
};

export default Navbar;
