import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import {ReactComponent as SvgDotPatternIcon} from "../../images/dot-pattern.svg"
import { success, error } from "../messages";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

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
const TextArea = tw.textarea`h-24 sm:h-full resize-none`;
const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;

const SvgDotPattern1 = tw(SvgDotPatternIcon)`absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-primary-500 fill-current w-24`

export default ({
  submitButtonText = "Send",
}) => {
  const [formToken, formTokenState] = useState("");
  const [formData, updateData] = useState({
    name: "",
    email: "",
    details: "",
  });
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    axios
      .get("https://cuchapter.herokuapp.com/form-token",{
        withCredentials:true,
      })
      .then((res) => {
        formTokenState(res.data.formToken);
      })
      .catch((err) => {
        formTokenState("");
      });
  }, []);
  const handleChange = (e) => {
    updateData({ ...formData, [e.target.name]: e.target.value });
  };
  const submit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post("https://cuchapter.herokuapp.com/project", formData,{"xsrf-token":formToken})
      .then((res) => {
        setIsLoading(false)
        if (!res.data.success) {
          const text = `${res.data.err[0].param} - ${res.data.err[0].msg}`;
          error(text)
          console.log(res.data);
        }
        else {
          success("Submission successful")
        }
      })
      .catch((err) => {
        setIsLoading(false);
        error(err.message)
      });
  };
  return (
    <Container>
      <Content>
        <FormContainer>
          <div tw="mx-auto max-w-4xl">
            <h2>Want help with your project</h2>
            <form onSubmit={submit}>
              <TwoColumn>
                <Column>
                  <InputContainer>
                    <Label htmlFor="name-input">Your Name*</Label>
                    <Input id="name-input" type="text" onChange={handleChange} name="name" required placeholder="E.g. John Doe" />
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
                  }}
                />
              )}
                  <InputContainer>
                    <Label htmlFor="email-input">Your Email Address*</Label>
                    <Input id="email-input" type="email" onChange={handleChange} name="email" required placeholder="E.g. john@mail.com" />
                  </InputContainer>
                </Column>
                <Column>
                  <InputContainer tw="flex-1">
                    <Label htmlFor="name-input">Project in Details*</Label>
                    <TextArea id="message-input" name="message" onChange={handleChange} required placeholder="E.g. Details about your event"/>
                  </InputContainer>
                </Column>
              </TwoColumn>
              <input type="hidden" name="_redirect" value="https://cuchapter.tech/calender"/>
              <SubmitButton type="submit" disabled={isLoading ? true : false}>{submitButtonText}</SubmitButton>
            </form>
          </div>
          <SvgDotPattern1 />
        </FormContainer>
      </Content>
    </Container>
  );
};
