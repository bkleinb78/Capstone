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
          src="https://www.katiejoyce.com/x/cdn/?https://storage.googleapis.com/wzukusers/user-500000/images/jJrmUzl1NUG8Jpm-g26wQQ.jpg"
          alt=""
        />
      </div>
      <ul>
        <NavLink to="/">Wolfman Entertainment</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/inquiry">Inquiry</NavLink>
        <NavLink to="/payments">Payments</NavLink>
      </ul>
    </div>
  );
};

export default Navbar;