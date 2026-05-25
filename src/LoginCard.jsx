import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import styles from "./LoginCard.css";
import { useEffect } from "react";


function LoginCard() {
  useEffect(() => {
  document.title = "Login Card";
}, []);
    useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  const navigate =useNavigate();
const goHome = () => {
    navigate('/home');
  };
  const [active, setActive] = useState(false);

  const moveCard = () => {
    setActive(true);
  };
const moveback = () => {
  setActive(false);
}
  return (
    <div className="Loginbody">

      {/* Login Card */}
      <div className={`second ${active ? "active" : ""}`}>

        <h3 className="textt">Login</h3>

        <hr />

        <label htmlFor="emaill"></label>

        <p className="textt">
          Email:
          <i
            className="fa fa-envelope"
            style={{ fontSize: "16px", marginLeft: "5px" }}
          ></i>
        </p>

        <input
          type="email"
          placeholder="Myemail@gmail.com"
          id="emaill"
        />

        <label htmlFor="pass"></label>

        <p className="textt">
          Password:
          <i
            className="fa fa-lock"
            style={{ fontSize: "20px", marginLeft: "5px" }}
          ></i>
        </p>

        <input
          type="password"
          placeholder="*****"
          id="pass"
        />

        
          <button id="butt" type="button"
          onClick={goHome}>
          Login
          </button>
        

        <p className="textt">
          Don't have an account ?

          <button onClick={moveCard} id="span">
            Register
          </button>
        </p>
      </div>

      {/* Register Card */}
      <div className={`third ${active ? "active" : ""}`}>

        <h3 className="textt2">New Account</h3>

        <hr />

        <p className="namee">
          Name
          <i
            className="fa fa-user"
            style={{ fontSize: "16px", marginLeft: "5px" }}
          ></i>
        </p>

        <input
          type="text"
          placeholder="Enter your Name"
          id="name2"
        />

        <label htmlFor="emaill2"></label>

        <p className="textt2">
          Email:
          <i
            className="fa fa-envelope"
            style={{ fontSize: "16px", marginLeft: "5px" }}
          ></i>
        </p>

        <input
          type="email"
          placeholder="Myemail@gmail.com"
          id="emaill2"
        />

        <label htmlFor="pass2"></label>

        <p className="textt2">
          Password:
          <i
            className="fa fa-lock"
            style={{ fontSize: "20px", marginLeft: "5px" }}
          ></i>
        </p>

        <input
          type="password"
          placeholder="*****"
          id="pass2"
        />

        <label htmlFor="pass3"></label>

        <p className="textt3">
          Confirm Password:
          <i
            className="fa fa-lock"
            style={{ fontSize: "20px", marginLeft: "5px" }}
          ></i>
        </p>

        <input
          type="password"
          placeholder="*****"
          id="pass3"
        />

        <button id="butt2" type="button" onClick={goHome}>
          Sign up
        </button>
         <p className="textt2">
          Already have an account ?

          <button onClick={moveback} id="span2">
            Login
          </button>
        </p>
      </div>
    </div>
  );
}
export default LoginCard;