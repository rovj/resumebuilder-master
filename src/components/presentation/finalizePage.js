/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from 'react'
import ResumePreview from './resumePreview'
// import jsPDF from 'jspdf'
// import html2canvas from 'html2canvas'
import { useSelector } from 'react-redux'
import { firestore } from '../../index.js'
import ReactToPrint from 'react-to-print'

function Finalize() {
  let contactresume = useSelector((state) => state.contactReducer)
  let documentresume = useSelector((state) => state.documentReducer)
  let educationresume = useSelector((state) => state.educationReducer)
  let professionalresume = useSelector((state) => state.professionalReducer)
  let auth = useSelector((state) => state.firebaseReducer.auth)
  let snackRef = useRef();
  const saveToDatabase = async () => {
    firestore
      .collection('users')
      .doc(auth.uid)
      .update({
        resumeIds: [
          {
            educationresume: educationresume,
            contactresume: contactresume,
            documentresume: documentresume,
            professionalresume: professionalresume,
          },
        ],
      })
      snackRef.current.className = "show";
      setTimeout(()=>{
        snackRef.current.className = "";
      },3000);
  }


  const componentRef = useRef()

  return (
    <div className="container full finalize-page">
      <div className="funnel-section ">
        <div ref={componentRef} className="_outer">
          <div className="finalize-preview-card " id="resumePreview">
            <ResumePreview
              contactSection={contactresume}
              educationSection={educationresume}
              skinCd={documentresume?.skinCd}
              professionalSection={professionalresume}
            ></ResumePreview>
          </div>
        </div>
        <div className="finalize-settings center">
          <div className=" download-resume resume-options">
            <p className="no-margin">Download Resume AS PDF</p>
            <ReactToPrint
              documentTitle="Resume"
              pageStyle={
                '@page { size: A4;  margin: 0mm 1mm; } @media print { body { -webkit-print-color-adjust: exact; } } @page { margin: 2mm 1cm; }'
              }
              trigger={() => (
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={(e) => e.preventDefault()}
                >
                  Print this out!
                </a>
              )}
              content={() => componentRef.current}
            />
          </div>
          <div className=" download-resume resume-options">
            <p className="no-margin">Save your resume</p>
            <a style={{ cursor: 'pointer' }} onClick={saveToDatabase}>
              Save your resume
            </a>
          </div>
        </div>
      </div>
      <div id="snackbar" ref={snackRef}>Saved to Database!</div>
    </div>
  )
}

export default Finalize
