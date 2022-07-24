import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import ResumePreview from "./resumePreview";
import { fieldCd } from "../../constants/typeCodes";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setProfessionalAction } from "../../redux/professionalActions";
import { updateProfessionalAction } from "../../redux/professionalActions";

function Professional() {
  let contact = useSelector((state) => state.contactReducer);
  let document = useSelector((state) => state.documentReducer);
  let education = useSelector((state) => state.educationReducer);
  let state = useSelector((state) => state.professionalReducer);
  const [professionalDetails, setProfessionalDetails] = useState(state);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const onchange = (event) => {
    var key = event.target.name;
    var val = event.target.value;
    setProfessionalDetails({ ...professionalDetails, [key]: val });
  };
  useEffect(() => {
    if (state == null) {
      dispatch(setProfessionalAction(professionalDetails));
    } else {
      dispatch(updateProfessionalAction(professionalDetails));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [professionalDetails]);
  const onSubmit = async () => {
    navigate("/education");
  };
  const getFieldData = (key) => {
    if (professionalDetails && professionalDetails[key]) {
      return professionalDetails[key];
    }
    return "";
  };
  return (
    <div className="container med contact">
      <div className="section funnel-section">
        <div className="form-card">
          <h2 className="form-heading center">Professional Details</h2>
          <div className="form-section">
            <div className="input-group full">
              <label>Skills</label>
              <div className="effect">
                <textarea
                  rows={5}
                  name={fieldCd.Skills}
                  value={getFieldData(fieldCd.Skills)}
                  onChange={onchange}
                />
                <span></span>
              </div>
              <div className="error"></div>
            </div>

            <div className="input-group full">
              <label>Experience</label>
              <div className="effect">
                <textarea
                  rows={5}
                  name={fieldCd.Experience}
                  value={getFieldData(fieldCd.Experience)}
                  onChange={onchange}
                />
                <span></span>
              </div>
              <div className="error"></div>
            </div>

            <div className="input-group full">
              <label>Certifications</label>
              <div className="effect">
                <textarea
                  rows={5}
                  name={fieldCd.Certifications}
                  value={getFieldData(fieldCd.Certifications)}
                  onChange={onchange}
                />
                <span></span>
              </div>
              <div className="error"></div>
            </div>

            <div className="input-group full">
              <label>Achievements</label>
              <div className="effect">
                <textarea
                  rows={5}
                  name={fieldCd.Achievements}
                  value={getFieldData(fieldCd.Achievements)}
                  onChange={onchange}
                />
                <span></span>
              </div>
              <div className="error"></div>
            </div>

            <div className="form-buttons">
              <button
                onClick={onSubmit}
                className="btn hvr-float-shadow"
                type="button"
              >
                Next
              </button>
              <NavLink to="/contact" className="center">
                Back
              </NavLink>
            </div>
          </div>
        </div>

        <div className="preview-card">
          <ResumePreview
            contactSection={contact}
            educationSection={education}
            skinCd={document?.skinCd}
            professionalSection={professionalDetails}
          ></ResumePreview>
        </div>
      </div>
    </div>
  );
}

export default Professional;
