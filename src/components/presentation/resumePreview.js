import React from 'react'
import { fieldCd } from '../../constants/typeCodes'

import '../../static/scss/documentStyles.scss'

function ResumePreview(props) {
  // console.log('Resume Preview');
  const rvContact = (key, valToAppend) => {
    if (props.contactSection) {
      return props.contactSection[key]
        ? props.contactSection[key] + (valToAppend ? valToAppend : '')
        : ''
    }
    return ''
  }
  const rvEducation = (key, valToAppend) => {
    if (props.educationSection) {
      return props.educationSection[key]
        ? props.educationSection[key] + (valToAppend ? valToAppend : '')
        : ''
    }
    return ''
  }
  const rvProfessional = (key) => {
    if (props.professionalSection) {
      if (props.professionalSection[key]) {
        let newarray = props.professionalSection[key]
          .split('\n')
          .map((line) => {
            if (line) {
              return (
                <>
                  <div className="split-item">{`- ${line}`}</div>
                </>
              )
            } else return <></>
          })
        return newarray
      }
      //return props.professionalSection[key]?props.professionalSection[key]  :'';
    }
    return ''
  }
  return (
    <div className={props.skinCd + ' resume-preview '}>
      <div className={'name-section'}>
        <div className={'contact-name-section'}>
          <p className={'center contact-name'}>
            {' '}
            {rvContact(fieldCd.FirstName, ' ') +
              rvContact(fieldCd.LastName)}{' '}
          </p>
        </div>
        <div className={'contact-details-section'}>
          <p className={'center address'}>
            {rvContact(fieldCd.Street, ', ') +
              rvContact(fieldCd.City, ', ') +
              rvContact(fieldCd.State, ', ') +
              rvContact(fieldCd.Country, ', ') +
              rvContact(fieldCd.ZipCode, ', ')}
          </p>
          <p className={'center email'}>{rvContact(fieldCd.Email)}</p>
          <p className={'center phone'}>{rvContact(fieldCd.Phone)} </p>
          <p className={'center profession'}>{rvContact(fieldCd.Profession)}</p>
        </div>
      </div>

      {rvContact(fieldCd.ProfSummary) &&  <div className={'profSummSection'}>
        <p className="heading bold text-upper">PROFESSIONAL SUMMARY</p>
        <div className={'divider'}></div>
        <p className="ProfSummary">{rvContact(fieldCd.ProfSummary)}</p>
      </div> }

      <div className="professional-section">
        {rvProfessional(fieldCd.Skills) && <div className={'profSummSection'}>
          <p className="heading bold">SKILLS</p>
          <div className={'divider'}></div>
          <div className="split">{rvProfessional(fieldCd.Skills)}</div>
        </div>}

        {rvProfessional(fieldCd.Experience) && <div className={'profSummSection'}>
          <p className="heading bold">EXPERIENCE</p>
          <div className={'divider'}></div>
          <div className="split">{rvProfessional(fieldCd.Experience)}</div>
        </div>}

        {rvProfessional(fieldCd.Certifications) && <div className={'profSummSection'}>
          <p className="heading bold">CERTIFICATIONS</p>
          <div className={'divider'}></div>
          <div className="split">{rvProfessional(fieldCd.Certifications)}</div>
        </div>}

        {rvProfessional(fieldCd.Achievements) && <div className={'profSummSection'}>
          <p className="heading bold">ACHIEVEMENTS</p>
          <div className={'divider'}></div>
          <div className="split">{rvProfessional(fieldCd.Achievements)}</div>
        </div>}
      </div>
      {(rvEducation(fieldCd.SchoolName) || rvEducation(fieldCd.Degree) || rvEducation(fieldCd.GraduationCGPA) || rvEducation(fieldCd.GraduationDate) || rvEducation(fieldCd.GraduationYear) || rvEducation(fieldCd.City) || rvEducation(fieldCd.JuniorCollege) || rvEducation(fieldCd.HscPercentage) || rvEducation(fieldCd.HscMonth) || rvEducation(fieldCd.HscYear) || rvEducation(fieldCd.HighSchool) || rvEducation(fieldCd.SscPercentage) || rvEducation(fieldCd.SscMonth) || rvEducation(fieldCd.SscYear)) && <div className={'educationSection text-upper'}>
        <div className={'profSummSection'}>
          <div className="split-section">
            <p className="heading bold">EDUCATIONAL DETAILS</p>
          </div>
          <div className={'divider'}></div>
          <div className="split-section split-section-right">
            <div className="educationDetailsContainer">
              <p>
                <b>{rvEducation(fieldCd.SchoolName)}</b>
              </p>
              <p>
                <b>
                  {rvEducation(fieldCd.Degree) === ''
                    ? ''
                    : '(' + rvEducation(fieldCd.Degree) + ')'}
                </b>
              </p>
            </div>
            <div className="educationDetailsContainer">
              <p>
                <b>CGPA - </b>
                {rvEducation(fieldCd.GraduationCGPA)}
              </p>
              <p>
                <b>Passing Month - </b>
                {rvEducation(fieldCd.GraduationDate)}
              </p>
              <p>
                <b>Passing Year - </b>
                {rvEducation(fieldCd.GraduationYear)}
              </p>
              <p>
                <b>City - </b>
                {rvEducation(fieldCd.City)}
              </p>
            </div>
            <div className={'divider'}></div>
            <div className="educationDetailsContainer">
              <p>
                <b>{rvEducation(fieldCd.JuniorCollege)}</b>
              </p>
            </div>
            <div className="educationDetailsContainer">
              <p>
                <b>HSC % - </b>
                {rvEducation(fieldCd.HscPercentage)}
              </p>
              <p>
                <b>Passing Month - </b>
                {rvEducation(fieldCd.HscMonth)}
              </p>
              <p>
                <b>Passing Year - </b>
                {rvEducation(fieldCd.HscYear)}
              </p>
            </div>
            <div className={'divider'}></div>
            <div className="educationDetailsContainer">
              <p>
                <b>{rvEducation(fieldCd.HighSchool)}</b>
              </p>
            </div>
            <div className="educationDetailsContainer">
              <p>
                <b>SSC % - </b>
                {rvEducation(fieldCd.SscPercentage)}
              </p>
              <p>
                <b>Passing Month - </b>
                {rvEducation(fieldCd.SscMonth)}
              </p>
              <p>
                <b>Passing Year - </b>
                {rvEducation(fieldCd.SscYear)}
              </p>
            </div>
          </div>
        </div>
      </div>}
    </div>
  )
}
export default ResumePreview
