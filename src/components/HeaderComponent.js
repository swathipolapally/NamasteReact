import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";

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
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
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
