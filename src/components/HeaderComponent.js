import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router";

const HeaderComponent = () => {
  const [btnName, setbtnName] = useState("Login");
  console.log("Component called!");

  useEffect(() => {
    console.log("Use effect called!");
  }, [btnName]);
  return (
    <div className="header">
      <div className="logo-cotainer">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link className="login" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="login" to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="login" to="/contact">
              Contact Us
            </Link>
          </li>
          <li>
            <Link className="login" to="/contact">
              Cart
            </Link>
          </li>
          <li>
            <button
              className="login"
              onClick={() => {
                const name = btnName === "Login" ? "Logout" : "Login";
                setbtnName(name);
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
