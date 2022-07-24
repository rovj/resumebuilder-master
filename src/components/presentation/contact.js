/* eslint-disable no-useless-escape */

import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { fieldCd } from '../../constants/typeCodes'
import { useNavigate } from 'react-router-dom'
import ResumePreview from './resumePreview'
import { useSelector, useDispatch } from 'react-redux'
import { setContactAction } from '../../redux/contactAction'
import { updateContactAction } from '../../redux/contactAction'

function Contact() {
  const navigate = useNavigate()
  let state = useSelector((state) => state.contactReducer)
  let documentResume = useSelector((state) => state.documentReducer)
  let education = useSelector((state) => state.educationReducer)
  let professional = useSelector((state) => state.professionalReducer)
  let dispatch = useDispatch()
  const [contact, setContact] = useState(state)
  let [error, setError] = useState({})
  //let state2 = useSelector(state => state);
  //console.log(state2);
  useEffect(() => {
    if (state == null) {
      dispatch(setContactAction(contact))
    } else {
      dispatch(updateContactAction(contact))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contact])
  const onchange = (event) => {
    var key = event.target.name
    var val = event.target.value
    setContact({ ...contact, [key]: val })
  }
  const onSubmit = async () => {
    let inputList = document.querySelectorAll('input')
    let temp = 0
    let tempErr = {}
    inputList.forEach((input) => {
      if (input.name === fieldCd.Email) {
        if (
          !input.value.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          )
        ) {
          tempErr[input.name] = 'Please enter a valid email!'
          temp = 1
        }
      }
      if (input.name === fieldCd.Phone) {
        if (!input.value.match(/^\d{10}$/)) {
          tempErr[input.name] = 'Please enter a valid phone number!'
          temp = 1
        }
      }
      if (input.name === fieldCd.FirstName) {
        if (input.value === '') {
          tempErr[input.name] = 'Please enter the First Name!'
          temp = 1
        }
      }
      if (input.name === fieldCd.LastName) {
        if (input.value === '') {
          tempErr[input.name] = 'Please enter the Last Name!'
          temp = 1
        }
      }
    })

    if (temp === 1) {
      setError(tempErr)
    } else {
      setError({})
      navigate('/professional')
    }
  }

  const getFieldData = (key) => {
    if (contact && contact[key]) {
      return contact[key]
    }
    return ''
  }

  return (
    <div className="container med contact">
      <div className="section funnel-section">
        <div className="form-card">
          <h2 className="form-heading center">Personal Details</h2>
          <div className="form-section">
            <div className="input-group">
              <label>First Name</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.FirstName}
                  value={getFieldData(fieldCd.FirstName)}
                  onChange={onchange}
                />
                <span></span>
              </div>
              <div className="error">
                {error[fieldCd.FirstName] ? error[fieldCd.FirstName] : ''}
              </div>
            </div>

            <div className="input-group">
              <label>Last Name</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.LastName}
                  value={getFieldData(fieldCd.LastName)}
                  onChange={onchange}
                />
                <span></span>
              </div>
              <div className="error">
                {error[fieldCd.LastName] ? error[fieldCd.LastName] : ''}
              </div>
            </div>

            <div className="input-group">
              <label>Professional Summary</label>
              <div className="effect">
                <textarea
                  rows={5}
                  name={fieldCd.ProfSummary}
                  value={getFieldData(fieldCd.ProfSummary)}
                  onChange={onchange}
                />
                <span></span>
              </div>
              <div className="error"></div>
            </div>

            <div className="input-group">
              <label>Email</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.Email}
                  value={getFieldData(fieldCd.Email)}
                  onChange={onchange}
                />
                <span></span>
              </div>
              <div className="error">
                {error[fieldCd.Email] ? error[fieldCd.Email] : ''}
              </div>
            </div>

            <div className="input-group">
              <label>Phone</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.Phone}
                  value={getFieldData(fieldCd.Phone)}
                  onChange={onchange}
                />
                <span></span>
              </div>
              <div className="error">
                {error[fieldCd.Phone] ? error[fieldCd.Phone] : ''}
              </div>
            </div>

            <div className="input-group">
              <label>Profession</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.Profession}
                  value={getFieldData(fieldCd.Profession)}
                  onChange={onchange}
                />
                <span></span>
              </div>
              <div className="error"></div>
            </div>
            <div className="input-group">
              <label>Street</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.Street}
                  value={getFieldData(fieldCd.Street)}
                  onChange={onchange}
                />
                <span></span>
              </div>
              <div className="error"></div>
            </div>

            <div className="input-group">
              <label>City</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.City}
                  value={getFieldData(fieldCd.City)}
                  onChange={onchange}
                />
                <span></span>
              </div>
              <div className="error"></div>
            </div>

            <div className="input-group">
              <label>State</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.State}
                  value={getFieldData(fieldCd.State)}
                  onChange={onchange}
                />
                <span></span>
              </div>
              <div className="error"></div>
            </div>

            <div className="input-group">
              <label>Country</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.Country}
                  value={getFieldData(fieldCd.Country)}
                  onChange={onchange}
                />
                <span></span>
              </div>
              <div className="error"></div>
            </div>
            <div className="input-group">
              <label>Pin Code</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.ZipCode}
                  value={getFieldData(fieldCd.ZipCode)}
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
              <NavLink to="/getting-started" className="center">
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

export default Contact
