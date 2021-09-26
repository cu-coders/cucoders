import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { InlineWidget } from "react-calendly";

import {ReactComponent as SvgDotPatternIcon} from "../../images/dot-pattern.svg"
import Footer from "components/footers/footers.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const FormContainer = styled.div`
  ${tw`p-10 sm:p-12 md:p-16 bg-primary-500 text-gray-100 rounded-lg relative`}
  form {
    ${tw`mt-4`}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  }
  input,textarea {
    ${tw`w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 text-gray-100 hocus:border-pink-400 focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-gray-500`}
    }
  }
`;


const SvgDotPattern1 = tw(SvgDotPatternIcon)`absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-primary-500 fill-current w-24`

export default () => {
  return (
    <>
    <AnimationRevealPage>
    <Header /><Container>
      <Content>
        <FormContainer>
          <div tw="mx-auto max-w-4xl">
            <h2>Choose the meeting type that applies to your needs and schedule a time to meet with someone from our team. We look forward to speaking with you soon!</h2>
          </div>
          <SvgDotPattern1 />
        </FormContainer>
      </Content>
    </Container>
    <div>
    <div id="schedule_form">
    <div className="App">
    <InlineWidget
	  pageSettings={{
	    backgroundColor: 'ffffff',
	    hideEventTypeDetails: false,
	    hideLandingPageDetails: false,
	    primaryColor: '000000',
	    textColor: '000000'
	  }}
	  styles={{
	    height: '1000px'
	  }}
 		url="https://booking.setmore.com/scheduleappointment/9d4c4983-434e-42da-8072-dfd291ac4b1e"
	/>
    </div>
    </div>
    </div>
    <Footer />
    </AnimationRevealPage>
    </>
  );
};
