import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { success, error } from "../messages";

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
  input,
  textarea {
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
const TextArea = tw.textarea`h-24 sm:h-full resize-none`;
const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-primary-500 fill-current w-24`;

export default ({ role }) => {
  const [isLoading, setIsLoading] = useState(false);
  console.log(role);
  function submit(e) {
    e.preventDefault();
    var name = document.getElementById("name-input").value;
    var email = document.getElementById("email-input").value;
    var resume = document.getElementById("resume").files[0];
    var address = document.getElementById("message-input").value;
    var phone = document.getElementById("phone-input").value;
    console.log(name, email, resume, address, phone);
    const formData = new FormData();

    formData.append("name", name);
    formData.append("role", role);
    formData.append("email", email);
    formData.append("number", phone);
    formData.append("address", address);
    formData.append("resume", resume);

    const options = {
      method: "POST",
      body: formData,
    };
    setIsLoading(true);
    fetch("http://localhost:3001/jobs/apply", options)
      .then((res) => {
        console.log("Successful: ", res);
        setIsLoading(false);
        success("Application submitted successfully");
        //clear form
        document.getElementById("name-input").value = "";
        document.getElementById("email-input").value = "";
        document.getElementById("phone-input").value = "";
        document.getElementById("message-input").value = "";
        document.getElementById("resume").value = "";
      })
      .catch((err) => {
        console.log("Failed : ", err);
        setIsLoading(false);
        error("Error : ", err);
      });
  }

  return (
    <Container>
      <Content>
        <FormContainer>
          <div tw="mx-auto max-w-4xl">
            <h2>Apply Now</h2>
            <form
              onSubmit={(e) => {
                submit(e);
              }}
            >
              <TwoColumn>
                <Column>
                  <InputContainer>
                    <Label htmlFor="name-input">Your Name*</Label>
                    <Input
                      id="name-input"
                      type="name"
                      name="name"
                      required
                      placeholder="E.g. John Doe"
                    />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="email-input">Your Email Address*</Label>
                    <Input
                      id="email-input"
                      type="email"
                      name="email"
                      required
                      placeholder="E.g. john@mail.com"
                    />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="name-input">Your Resume*</Label>
                    <Input
                      id="resume"
                      type="file"
                      accept=".docx, .pdf"
                      name="resume"
                      required
                    />
                  </InputContainer>
                </Column>
                <Column>
                  <InputContainer>
                    <Label htmlFor="name-input">Your Address*</Label>
                    <TextArea
                      id="message-input"
                      type="text"
                      name="address"
                      required
                      placeholder="E.g. CU-Coders, Chandigarh"
                    />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="phone-input">Your Phone Number*</Label>
                    <Input
                      id="phone-input"
                      type="tel"
                      name="number"
                      required
                      placeholder="E.g. +91(XXXXX-XXXXX)"
                    />
                  </InputContainer>
                  {isLoading && (
                    <Loader
                      type="TailSpin"
                      color="#00BFFF"
                      height={80}
                      width={80}
                      style={{
                        zIndex: "2",
                        width: "fit-content",
                        position: "absolute",
                        left: "46%",
                        top: "45%",
                      }}
                    />
                  )}
                </Column>
              </TwoColumn>
              <SubmitButton
                type="submit"
                value="Submit"
                disabled={isLoading ? true : false}
              >
                Submit
              </SubmitButton>
            </form>
          </div>
          <SvgDotPattern1 />
        </FormContainer>
      </Content>
    </Container>
  );
};
