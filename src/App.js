import { useAuth0 } from "@auth0/auth0-react";
import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";

// import axios from "axios";
import { Lines } from "react-preloaders";

/*
 * This is the entry point component of this project. You can change the below
 * exported default App component to any of the prebuilt landing page components
 * by uncommenting their import and export lines respectively. See one of the
 * landing page components to better understand how to import and render
 * different components (Always make sure if you are building your own page, the
 * root component should be the AnimationRevealPage component. You can disable
 * the animation by using the disabled prop.
 *
 * The App component below is using React router to render the landing page that
 * you see on the live demo website and the component previews.
 *
 */

/* Use AnimationRevealPage as a wrapper component for your pages if you are
 * custom building it */
// import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import ComponentRenderer from "ComponentRenderer.js";
import ComingSoon from "components/cta/comingsoon.js";
import Coming from "components/events/comingsoon.js";
import Events from "components/events/event.js";
import Past from "components/events/past.js";
import Present from "components/events/present.js";
import ThankYouSoMuch from "components/events/thanks.js";
import Upcoming from "components/events/upcoming.js";
import Back from "components/job/openings/backend/backend.js";
import Editorial from "components/job/openings/editorialist/editorialist.js";
import Front from "components/job/openings/frontend/frontend.js";
import Full from "components/job/openings/fullstack/fullstack.js";
import Graphic from "components/job/openings/graphic/graphic.js";
import Motion from "components/job/openings/motion/motion.js";
import Setter from "components/job/openings/setter/setter.js";
import Tester from "components/job/openings/tester/tester.js";
import UIUX from "components/job/openings/uiux/uiux.js";
import Member from "components/membership/member.js";
import Calender from "components/projects/calendly.js";
import Projects from "components/projects/project.js";
import Resources from "components/resources/resources.js";
import Error from "components/hero/error.js";
// import LostPassword from "pages/lostPassword.js";
import Algo from "components/resources/algorithms/index.js";
import AI from "components/resources/ai/index.js";
import ComingNow from "components/resources/comingsoon.js";
import CP from "components/resources/cp/index.js";
import Database from "components/resources/database/index.js";
import Security from "components/resources/security/index.js";
import Language from "components/resources/language/index.js";
import Mobile from "components/resources/mobile/index.js";
import Open from "components/resources/open/index.js";
import VersionControl from "components/resources/version_control/index.js";
import Web from "components/resources/web/index.js";
import Thanks from "components/thanks/thanks.js";
import LoginError from "components/hero/loginError.js";
import Home from "MainLandingPage.js";
import About from "pages/AboutUs.js";
import Contact from "pages/ContactUs.js";
import Careers from "pages/jobHome.js";
import ThankYou from "components/membership/thanks.js";
// import Login from "pages/Login.js";
import Privacy from "pages/PrivacyPolicy.js";
// import Signup from "pages/Signup";
import Team from "pages/Team.js";
import Terms from "pages/TermsOfService.js";
import React from "react";
// import { Navigate } from "react-router";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { css } from "styled-components/macro"; //eslint-disable-line

export default function App() {
  //-----------------------------------------INITIALIZING
  // STATES-------------------------//
  // const [isVerified, updateIsVerified] = useState(false);

  const { isAuthenticated, user } = useAuth0();
  localStorage.setItem("logrocketID", isAuthenticated ? (user.name.includes("@") ? user.nickname : user.name) : "login first")
  localStorage.setItem("isLogrocketID", isAuthenticated ? true : false)

  //-----------------------------------------CHECK
  // AUTHENTICATION------------------------//
  // useEffect(() => {
  //   axios
  //     .get("https://backend.cuchapter.tech/auth/user", {
  //       withCredentials: true,
  //     })
  //     .then((res) => {
  //       if (res.data.username) {
  //         updateIsVerified(true);
  //       } else {
  //         updateIsVerified(false);
  //       }
  //     });
  // }, []);

  return (
    <Router>
      <Switch>
        <Route path="/components/:type/:subtype/:name">
          <ComponentRenderer />
        </Route>
        <Route exact path="/components/:type/:name">
          <ComponentRenderer />
        </Route>
        <Route exact path="/team">
          <Team />
        </Route>
        <Route exact path="/upcoming">
          <Upcoming />
        </Route>
        <Route exact path="/events">
          <Events />
        </Route>
        <Route exact path="/present">
          <Present />
        </Route>
        <Route exact path="/past">
          <Past />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route path="/resources">
          {isAuthenticated ? <Resources /> : <LoginError />}
        </Route>
        <Route exact path="/comingnow">
          <ComingNow />
        </Route>
        <Route exact path="/careers">
          <Careers />
        </Route>
        <Route exact path="/comingsoon">
          <ComingSoon />
        </Route>
        <Route exact path="/coming">
          <Coming />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route path="/backend">
          <Back />
        </Route>
        <Route exact path="/frontend">
          <Front />
        </Route>
        <Route exact path="/fullstack">
          <Full />
        </Route>
        <Route path="/setter">
          <Setter />
        </Route>
        <Route exact path="/tester">
          <Tester />
        </Route>
        <Route exact path="/editorialist">
          <Editorial />
        </Route>
        <Route exact path="/graphic">
          <Graphic />
        </Route>
        <Route exact path="/motion">
          <Motion />
        </Route>
        <Route exact path="/uiux">
          <UIUX />
        </Route>
        <Route exact path="/thanks">
          <Thanks />
        </Route>
        <Route exact path="/calender">
          <Calender />
        </Route>
        <Route exact path="/calender">
          <Calender />
        </Route>
        <Route exact path="/ThankYouSoMuch">
          <ThankYouSoMuch />
        </Route>
        <Route exact path="/privacy">
          <Privacy />
        </Route>
        <Route exact path="/terms">
          <Terms />
        </Route>
        <Route exact path="/member">
          <Member />
        </Route>
        <Route exact path="/thankyou">
          <ThankYou />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/algo">
          {isAuthenticated ? <Algo /> : <LoginError />}
        </Route>
        <Route exact path="/ai">
          <AI />
        </Route>
        <Route exact path="/cp">
          {isAuthenticated ? <CP /> : <LoginError />}
        </Route>
        <Route exact path="/Security">
          {isAuthenticated ? <Security /> : <LoginError />}
        </Route>
        <Route exact path="/Language">
          {isAuthenticated ? <Language /> : <LoginError />}
        </Route>
        <Route exact path="/Database">
          {isAuthenticated ? <Database /> : <LoginError />}
        </Route>
        <Route exact path="/VersionControl">
          {isAuthenticated ? <VersionControl /> : <LoginError />}
        </Route>
        <Route exact path="/mobile">
          {isAuthenticated ? <Mobile /> : <LoginError />}
        </Route>
        <Route exact path="/open">
          {isAuthenticated ? <Open /> : <LoginError />}
        </Route>
        <Route exact path="/web">
          {isAuthenticated ? <Web /> : <LoginError />}
        </Route>
        {/* <Route exact path="/lostpassword">
          <LostPassword />
        </Route> */}
        {/* <Route exact path="/loginerror">
          <LoginError />
        </Route> */}
        {/* <Route exact path="/login">
          {isVerified ? (
            <Navigate to="/home" />
          ) : (
            <Login updateIsLoggedIn={updateIsVerified} />
          )}
        </Route>
        <Route exact path="/signup">
          {isVerified ? <Navigate to="/" /> : <Signup />}
        </Route> */}
        <Route path="/">
          <Error />
        </Route>
      </Switch>
      <Lines />
    </Router>
  );
}
