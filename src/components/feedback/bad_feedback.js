import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import {ReactComponent as SvgDotPatternIcon} from "../../images/dot-pattern.svg"

import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Footer from "components/footers/footers.js";
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

const TwoColumn = tw.div`flex flex-col sm:flex-row justify-between`;
const Column = tw.div`sm:w-5/12 flex flex-col`;
const InputContainer = tw.div`relative py-5 mt-6`;
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`;
const Input = tw.input``;
const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;

const SvgDotPattern1 = tw(SvgDotPatternIcon)`absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-primary-500 fill-current w-24`

export default () => {
  return ( 
    <>
    <AnimationRevealPage>
    <Header />
    <Container>
      <Content>
        <FormContainer>
          <div tw="mx-auto max-w-4xl">
            <h3>Your experience is bad till now. Please fill some more info so that we can know where we are lacking.</h3>
            <form method="post"action="https://formbucket.com/f/buk_SrgCs8cuxkUSXljW17OMRjSq">
              <TwoColumn>
                <Column>
                  <InputContainer>
                    <Label htmlFor="name-input">Your Name*</Label>
                    <Input id="name-input" type="text" name="name" required placeholder="E.g. John Doe" />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="email-input">Your Email Address*</Label>
                    <Input id="email-input" type="email" name="email" required placeholder="E.g. john@mail.com" />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="message-input">Your Experience*</Label>
                    <textarea name="message" type="text"  required placeholder="E.g. All the best" />
                  </InputContainer>
                </Column>
                <Column>
                  <InputContainer>
                    <Label htmlFor="college-input">Your College/Organization Name*</Label>
                    <Input id="phone-input" type="text" name="college" required placeholder="E.g. Chandigarh University" />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="tel-input">Your Phone Number*</Label>
                    <Input id="phone-input" type="tel" name="number" required placeholder="E.g. +91(XXXXX-XXXXX)" />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="help-input">Anything you want from us</Label>
                    <textarea name="help"  placeholder="E.g. Contest on frequent time"/>
                  </InputContainer>
                </Column>
              </TwoColumn>
              <SubmitButton type="submit" value="Submit">Submit</SubmitButton>
            </form>
          </div>
          <SvgDotPattern1 />
        </FormContainer>
      </Content>
    </Container>
    <Footer />
    </AnimationRevealPage>
    </>
  );
};
