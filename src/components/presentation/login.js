import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { signin } from '../../redux/authActions'

function Login() {
  let authMine = useSelector((state) => state.authReducer)
  let dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  /*if(auth.uid){
    //console.log(window.location.href);
    firestore.collection("users").doc(auth.uid).get().then((user)=>{
      user = user.data();
      
      if(user.resumeIds!=undefined && user.resumeIds!=null && user.resumeIds.length>0){
        dispatch(setDocument(user.resumeIds[0].documentresume.skinCd));
        dispatch(setContactAction(user.resumeIds[0].contactresume));
        dispatch(setEducationAction(user.resumeIds[0].educationresume));
        dispatch(setProfessionalAction(user.resumeIds[0].professionalresume));
        
      }
      else{
        
      }
    
    })
  }*/
  //console.log(document);
  //console.log(education);
  //console.log(contact);
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const onSubmit = () => {
    let obj = { email: email, password: password }
    dispatch(signin(obj))
  }

  return (
    <>
      <>
        {authMine.loading ? (
          <div className="container med contact">
            <div className="section funnel-section">
              <div
                style={{
                  minHeight: '52vh',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
                className="form-card"
              >
                <h4>Please Wait... Logging you in</h4>
              </div>
            </div>
          </div>
        ) : (
          <div className="container med contact">
            <div className="section funnel-section">
              <div className="form-card">
                <h2 className="form-heading center">Enter Login details</h2>
                <div className="form-section">
                  <div className="input-group full">
                    <label>Email</label>
                    <div className="effect">
                      <input
                        type="text"
                        name="email"
                        value={email || ''}
                        onChange={handleEmail}
                      />
                      <span></span>
                    </div>
                  </div>

                  <div className="input-group full">
                    <label>Password</label>
                    <div className="effect">
                      <input
                        type="password"
                        name="password"
                        value={password || ''}
                        onChange={handlePassword}
                      />
                      <span></span>
                    </div>
                  </div>
                  {authMine?.error !== '' ? (
                    <div className="input-group full">
                      <span className="error-message">{authMine?.error}</span>
                    </div>
                  ) : (
                    <></>
                  )}
                  <div className="form-buttons">
                    <button
                      onClick={onSubmit}
                      className="btn hvr-float-shadow"
                      type="button"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    </>
  )
}

export default Login
