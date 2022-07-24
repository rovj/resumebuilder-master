import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import ResumePreview from './resumePreview'
import { fieldCd } from './../../constants/typeCodes'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setEducationAction } from '../../redux/educationAction'
import { updateEducationAction } from '../../redux/educationAction'
function Education() {
  let navigate = useNavigate()
  let state = useSelector((state) => state.educationReducer)
  let contact = useSelector((state) => state.contactReducer)
  let documentResume = useSelector((state) => state.documentReducer)
  let professional = useSelector((state) => state.professionalReducer)
  let dispatch = useDispatch()
  const [education, setEducation] = useState(state)
  const [error, setError] = useState({})
  const onchange = (event) => {
    var key = event.target.name
    var val = event.target.value
    setEducation({ ...education, [key]: val })
  }
  useEffect(() => {
    if (state === null) {
      dispatch(setEducationAction(education))
    } else {
      dispatch(updateEducationAction(education))
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [education])
  const getFieldData = (key) => {
    if (education && education[key]) {
      return education[key]
    }
    return ''
  }
  const onSubmit = async () => {
    let inputList = document.querySelectorAll('input')
    let temp = 0
    let tempArr = {}
    inputList.forEach((input) => {
      if (input.name === fieldCd.GraduationCGPA) {
        if (!input.value.match(/^[0-9]\.\d\d$/)) {
          temp = 1
          tempArr[input.name] = 'Please enter a valid CGPA!'
        }
      } else if (
        input.name === fieldCd.GraduationYear ||
        input.name === fieldCd.HscYear ||
        input.name === fieldCd.SscYear
      ) {
        if (!input.value.match(/^(19[5-9]\d|20[0-4]\d|2050)$/)) {
          temp = 1
          tempArr[input.name] = 'Please enter a valid Graduation Year!'
        }
      } else if (
        input.name === fieldCd.HscPercentage ||
        input.name === fieldCd.SscPercentage
      ) {
        let val = parseFloat(input.value)
        if (isNaN(val) || val < 0 || val > 100) {
          temp = 1
          tempArr[input.name] = 'Please enter a valid figure!'
        }
      } else {
        if (input.value === '') {
          temp = 1
          tempArr[input.name] = 'Please enter this field'
        }
      }
    })
    if (temp === 1) {
      setError(tempArr)
    } else {
      setError({})
      navigate('/finalize')
    }
  }

  return (
    <div className="container med education">
      <div className="section funnel-section">
        <div className="form-card">
          <h2 className="form-heading center">Educational Section</h2>
          <div className="form-section">
            <div className="input-group">
              <label>College Name</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.SchoolName}
                  onChange={onchange}
                  value={getFieldData(fieldCd.SchoolName)}
                />
                <span></span>
              </div>
              <div className="error">
                {error[fieldCd.SchoolName] ? error[fieldCd.SchoolName] : ''}
              </div>
            </div>

            <div className="input-group">
              <label>Degree</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.Degree}
                  onChange={onchange}
                  value={getFieldData(fieldCd.Degree)}
                />
                <span></span>
              </div>
              <div className="error">
                {error[fieldCd.Degree] ? error[fieldCd.Degree] : ''}
              </div>
            </div>

            <div className="input-group">
              <label>CGPA</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.GraduationCGPA}
                  onChange={onchange}
                  value={getFieldData(fieldCd.GraduationCGPA)}
                />
                <span></span>
              </div>
              <div className="error">
                {error[fieldCd.GraduationCGPA]
                  ? error[fieldCd.GraduationCGPA]
                  : ''}
              </div>
            </div>

            <div className="input-group">
              <label>City/State</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.City}
                  onChange={onchange}
                  value={getFieldData(fieldCd.City)}
                />
                <span></span>
              </div>
              <div className="error">
                {error[fieldCd.City] ? error[fieldCd.City] : ''}
              </div>
            </div>

            <div className="input-group">
              <label>Graduation Month</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.GraduationDate}
                  onChange={onchange}
                  value={getFieldData(fieldCd.GraduationDate)}
                />
                <span></span>
              </div>
              <div className="error">
                {error[fieldCd.GraduationDate]
                  ? error[fieldCd.GraduationDate]
                  : ''}
              </div>
            </div>

            <div className="input-group">
              <label>Graduation Year</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.GraduationYear}
                  onChange={onchange}
                  value={getFieldData(fieldCd.GraduationYear)}
                />
                <span></span>
              </div>
              <div className="error">
                {error[fieldCd.GraduationYear]
                  ? error[fieldCd.GraduationYear]
                  : ''}
              </div>
            </div>

            <div className="input-group">
              <label>Junior College</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.JuniorCollege}
                  onChange={onchange}
                  value={getFieldData(fieldCd.JuniorCollege)}
                />
                <span></span>
              </div>
              <div className="error">
                {error[fieldCd.JuniorCollege]
                  ? error[fieldCd.JuniorCollege]
                  : ''}
              </div>
            </div>

            <div className="input-group">
              <label>HSC Percentage</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.HscPercentage}
                  onChange={onchange}
                  value={getFieldData(fieldCd.HscPercentage)}
                />
                <span></span>
              </div>
              <div className="error">
                {error[fieldCd.HscPercentage]
                  ? error[fieldCd.HscPercentage]
                  : ''}
              </div>
            </div>

            <div className="input-group">
              <label>HSC Passing Month</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.HscMonth}
                  onChange={onchange}
                  value={getFieldData(fieldCd.HscMonth)}
                />
                <span></span>
              </div>
              <div className="error">
                {error[fieldCd.HscMonth] ? error[fieldCd.HscMonth] : ''}
              </div>
            </div>

            <div className="input-group">
              <label>HSC Passing Year</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.HscYear}
                  onChange={onchange}
                  value={getFieldData(fieldCd.HscYear)}
                />
                <span></span>
              </div>
              <div className="error">
                {error[fieldCd.HscYear] ? error[fieldCd.HscYear] : ''}
              </div>
            </div>

            <div className="input-group">
              <label>School</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.HighSchool}
                  onChange={onchange}
                  value={getFieldData(fieldCd.HighSchool)}
                />
                <span></span>
              </div>
              <div className="error">
                {error[fieldCd.HighSchool] ? error[fieldCd.HighSchool] : ''}
              </div>
            </div>

            <div className="input-group">
              <label>SSC Percentage</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.SscPercentage}
                  onChange={onchange}
                  value={getFieldData(fieldCd.SscPercentage)}
                />
                <span></span>
              </div>
              <div className="error">
                {error[fieldCd.SscPercentage]
                  ? error[fieldCd.SscPercentage]
                  : ''}
              </div>
            </div>

            <div className="input-group">
              <label>SSC Passing Month</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.SscMonth}
                  onChange={onchange}
                  value={getFieldData(fieldCd.SscMonth)}
                />
                <span></span>
              </div>
              <div className="error">
                {error[fieldCd.SscMonth] ? error[fieldCd.SscMonth] : ''}
              </div>
            </div>

            <div className="input-group">
              <label>SSC Passing Year</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.SscYear}
                  onChange={onchange}
                  value={getFieldData(fieldCd.SscYear)}
                />
                <span></span>
              </div>
              <div className="error">
                {error[fieldCd.SscYear] ? error[fieldCd.SscYear] : ''}
              </div>
            </div>

            <div className="form-buttons">
              <button
                className="btn hvr-float-shadow"
                type="button"
                onClick={onSubmit}
              >
                Next
              </button>
              <NavLink to="/professional" className="center">
                Back
              </NavLink>
            </div>
          </div>
        </div>
        <div className="preview-card">
          <ResumePreview
            contactSection={contact}
            educationSection={education}
            skinCd={documentResume?.skinCd}
            professionalSection={professional}
          ></ResumePreview>
        </div>
      </div>
    </div>
  )
}

export default Education
