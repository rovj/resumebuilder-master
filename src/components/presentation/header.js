/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../static/images/logo.jpg";
import { useSelector, useDispatch } from "react-redux";
import { isLoaded } from "react-redux-firebase";
import { isEmpty } from "react-redux-firebase";
import { signout } from "../../redux/authActions";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../../index.js";

function LoggesOut(props) {
  return (
    <ul>
      <li className="signup ">
        <NavLink className=" btnv-1" to="/register">
          Register
        </NavLink>
      </li>
      <li className="signin">
        <NavLink className="text-blue btnv-3" to="/login">
          Sign In
        </NavLink>
      </li>
    </ul>
  );
}

const Header = () => {
  let [nameHeader, setNameHeader] = useState("");
  let auth = useSelector((state) => state.firebaseReducer.auth);
  let dispatch = useDispatch();
  let changeName = async () => {
    if (!isEmpty(auth)) {
      const docSnap = await getDoc(doc(firestore, "users", auth.uid));
      setNameHeader(docSnap.data().name);
    } else {
      setNameHeader("");
    }
  };
  useEffect(() => {
    changeName();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  const handleLogOut = () => {
    dispatch(signout());
    console.log("The user will sign out");
  };

  return (
    <header className="header">
      <nav className="nav">
        <a href="/" className="holder-logo">
          <img className="logo" src={logo}></img>
        </a>
        <div className="header-links full-height">
          {isLoaded(auth) && !isEmpty(auth) ? (
            <>
              <ul>
                <li className="signin ">
                  <NavLink className="  " to="/">
                    <b>{nameHeader}</b>
                  </NavLink>
                </li>
                <li className="signin">
                  <button className="text-blue btnv-3" onClick={handleLogOut}>
                    Signout
                  </button>
                </li>
              </ul>
            </>
          ) : (
            <LoggesOut></LoggesOut>
          )}

          <ul id="nav-mid">
            <li>
              <NavLink className="btn-nvt-gm" to="/resume-templates">
                Resume Templates
              </NavLink>
            </li>
            <li className="holder-pricing">
              <NavLink className="btn-nvt-gm" to="/about-us">
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
