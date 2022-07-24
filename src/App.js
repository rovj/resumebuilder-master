import React, { useEffect } from "react";
import "./static/scss/app.scss";
import "react-router-dom";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import Header from "./components/presentation/header";
import Footer from "./components/presentation/footer";
import LandingPage from "./components/presentation/landingPage";
import GettingStarted from "./components/presentation/gettingStarted";
import Login from "./components/presentation/login";
import Register from "./components/presentation/register";
import AboutUs from "./components/presentation/aboutUs";
import Contacts from "./components/presentation/contact";
import Education from "./components/presentation/education";
import Finalize from "./components/presentation/finalizePage";
import Professional from "./components/presentation/professional";
import { setContactAction } from "./redux/contactAction";
import { setEducationAction } from "./redux/educationAction";
import { setDocument } from "./redux/documentActions";
import { setProfessionalAction } from "./redux/professionalActions";
import { isEmpty, isLoaded } from "react-redux-firebase";
import { Navigate } from "react-router-dom";
import { Routes } from "react-router-dom";
import { AuthContextProvider } from "./contextApi/AuthContext";
import { AuthContext } from "./contextApi/AuthContext";
import { useContext } from "react";
import { resetDocument } from "./redux/documentActions";
import { resetContactAction } from "./redux/contactAction";
import { resetEducationAction } from "./redux/educationAction";
import { resetProfessionalAction } from "./redux/professionalActions";

function App() {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <AuthContextProvider>
          <Header></Header>
          <Routes>
            <Route
              path="/education"
              element={<PrivateRoute component={Education} />}
            ></Route>
            <Route
              path="/contact"
              element={<PrivateRoute component={Contacts} />}
            ></Route>
            <Route
              path="/professional"
              element={<PrivateRoute component={Professional} />}
            ></Route>
            <Route
              path="/getting-started"
              element={<PrivateRoute component={GettingStarted} />}
            ></Route>
            <Route
              path="/resume-templates"
              element={<PrivateRoute component={GettingStarted} />}
            ></Route>
            <Route path="/about-us" element={<AboutUs />}></Route>
            <Route
              path="/finalize"
              element={<PrivateRoute component={Finalize} />}
            ></Route>
            <Route
              path="/login"
              element={<PrivateRoute2 component={Login} />}
            ></Route>
            <Route
              path="/register"
              element={<PrivateRoute2 component={Register} />}
            ></Route>
            <Route
              path="/"
              element={<PrivateRoute component={LandingPage} />}
            ></Route>
          </Routes>
          <Footer></Footer>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}
function PrivateRoute(props) {
  let Component = props.component;
  let auth = useSelector((state) => state.firebaseReducer.auth);

  return isLoaded(auth) && !isEmpty(auth) ? (
    <Component />
  ) : (
    <Navigate to="/login" />
  );
}

function PrivateRoute2(props) {
  let Component = props.component;
  let contextObj = useContext(AuthContext);
  let dispatch = useDispatch();
  useEffect(() => {
    if (contextObj.userData && contextObj.userData.resumeIds.length > 0) {
      dispatch(
        setDocument(contextObj.userData.resumeIds[0].documentresume.skinCd)
      );
      dispatch(
        setContactAction(contextObj.userData.resumeIds[0].contactresume)
      );
      dispatch(
        setEducationAction(contextObj.userData.resumeIds[0].educationresume)
      );
      dispatch(
        setProfessionalAction(
          contextObj.userData.resumeIds[0].professionalresume
        )
      );
    } else {
      dispatch(resetDocument());
      dispatch(resetContactAction());
      dispatch(resetEducationAction());
      dispatch(resetProfessionalAction());
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contextObj.userData]);

  return (
    <>
      {" "}
      {contextObj.userData && contextObj.userData.resumeIds.length > 0 ? (
        <Navigate to="/contact" />
      ) : contextObj.userData ? (
        <Navigate to="/" />
      ) : (
        <Component />
      )}{" "}
    </>
  );
}

export default App;
