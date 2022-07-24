/* eslint-disable jsx-a11y/alt-text */
import { skinCodes } from "../../constants/typeCodes";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setDocument } from "../../redux/documentActions";
import { updateDocument } from "../../redux/documentActions";

function GettingStarted() {
  let navigate = useNavigate();
  let state = useSelector((state) => state.documentReducer);
  let dispatch = useDispatch();
  const onChange = async (skinCd) => {
    if (state.id) {
      dispatch(updateDocument(skinCd));
    } else {
      dispatch(setDocument(skinCd));
    }
    navigate("/contact");
  };
  return (
    <div className="container med gettingStarted">
      <div className="section">
        <h1 className=" center">Select a resume template to get started</h1>
        <p className=" center">
          You’ll be able to edit and change this template later!
        </p>
        <div className="styleTemplate ">
          {skinCodes.map((value, index) => {
            return (
              <div key={index} className="template-card rounded-border">
                <i
                  className={
                    value === "demo-value" ? "selected fa fa-check" : "hide"
                  }
                ></i>
                <img
                  className=""
                  src={process.env.PUBLIC_URL + "/images/" + value + ".svg"}
                />
                <button
                  type="button"
                  onClick={() => onChange(value)}
                  className="btn-select-theme"
                >
                  USE TEMPLATE
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default GettingStarted;
