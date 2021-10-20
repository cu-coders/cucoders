import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/footers.js";
import ContactUsForm from "components/forms/contact.js";

export default ({isLoggedIn}) => {
  return (
    <AnimationRevealPage>
      <Header isLoggedIn={isLoggedIn}/>
      <ContactUsForm />
      <Footer />
    </AnimationRevealPage>
  );
};
