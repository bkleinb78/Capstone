import React from "react";
import { useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
// import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  // const { logoutUser, user } = useContext(AuthContext);
  // const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="https://static.wixstatic.com/media/190aaf_98c7a59bcc024760aa633631f5b09672~mv2.png/v1/fill/w_1231,h_691,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/WOLFMAN001%20B%20WS%20YELLOW.png"
          alt=""
        />
      </div>
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/inquiry">Inquiry</NavLink>
        <NavLink to="/payments">Payments</NavLink>
      </ul>
    </div>
  );
};

export default Navbar;