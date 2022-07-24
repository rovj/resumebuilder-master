import React, { useState } from 'react'
import { isLoaded } from 'react-redux-firebase'
import { register } from '../../redux/authActions'
import { useNavigate } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'

function Register() {
  let authMine = useSelector((state) => state.authReducer)
  let auth = useSelector((state) => state.firebaseReducer.auth)
  console.log('uid => ' + auth.uid)
  let dispatch = useDispatch()
  let navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  if (auth.uid) {
    navigate('/')
  }
  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const onSubmit = () => {
    dispatch(register({ email: email, password: password, name: name }))
  }

  return (
    <>
      {!isLoaded(auth) ? (
        <></>
      ) : (
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
                  <h4>Please Wait... Signing you up</h4>
                </div>
              </div>
            </div>
          ) : (
            <div className="container med contact">
              <div className="section funnel-section">
                <div className="form-card">
                  <h2 className="form-heading center">Enter your details</h2>

                  <div className="form-section">
                    <div className="input-group full">
                      <label>Full Name</label>
                      <div className="effect">
                        <input
                          type="text"
                          name="name"
                          value={name || ''}
                          onChange={handleName}
                        />
                        <span></span>
                      </div>
                    </div>

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
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  )
}

export default Register
