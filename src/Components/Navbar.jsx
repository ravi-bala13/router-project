import "./Navbar.css";
import { BsChevronCompactDown } from "react-icons/bs";

function Navbar() {
  return (
    <div className="navbar">
      <div className="left-logo">
        <img
          className="logo"
          src="https://www.freepnglogos.com/uploads/eagle-png-logo/lakes-eagles-png-logo-14.png"
          alt=""
        />
        <p>Eagle shopping</p>
      </div>
      <div className="middle-categories">
        <p>
          Men
          <span>
            <BsChevronCompactDown />
          </span>
        </p>
        <p>
          Women
          <span>
            <BsChevronCompactDown />
          </span>
        </p>
        <p>
          Kids
          <span>
            <BsChevronCompactDown />
          </span>
        </p>
      </div>
      <div className="right-btns">
        <p>
          About us{" "}
          <span>
            <BsChevronCompactDown />
          </span>{" "}
        </p>
        <p>Login</p>
        <button>Start free trail</button>
      </div>
    </div>
  );
}

export default Navbar;
