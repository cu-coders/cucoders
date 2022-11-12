import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { success, error } from "../messages";

import { useAuth0 } from "@auth0/auth0-react";

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

export default ({ heading = "Checkout the Resources" }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [domain, setDomain] = useState("");
  const [value, setValue] = useState("");

  function submit(e) {
    e.preventDefault();
    var name = document.getElementById("name-input").value;
    var email = document.getElementById("email-input").value;
    var resource = document.getElementById("resource").files[0];
    var description = document.getElementById("message-input").value;
    var phone = document.getElementById("phone-input").value;
    var domain = document.getElementById("domain-input").value;

    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("number", phone);
    formData.append("description", description);
    formData.append("resource", resource);
    formData.append("domain", domain);

    const options = {
      method: "POST",
      body: formData,
    };
    setIsLoading(true);
    fetch("https://backend.cuchapter.tech/resources/add", options)
      .then((res) => {
        setIsLoading(false);
        success("Resources submitted successfully");
        // reset form
        document.getElementById("name-input").value = "";
        document.getElementById("email-input").value = "";
        document.getElementById("phone-input").value = "";
        document.getElementById("message-input").value = "";
        document.getElementById("resource").value = "";
        document.getElementById("domain-input").value = "";
      })
      .catch((err) => {
        setIsLoading(false);
        error("Error : ", err);
      });
  }
  const { user, isAuthenticated } = useAuth0();

  return (
    <Container>
      <Content>
        <FormContainer>
          <div tw="mx-auto max-w-4xl">
            <h2>Share Resource & Help Us </h2>
            <form
              onSubmit={(e) => {
                submit(e);
              }}
            >
              <TwoColumn>
                <Column>
                  {isAuthenticated ? (
                    <InputContainer>
                      <Label htmlFor="name-input">Your Name*</Label>
                      <Input
                        id="name-input"
                        type="name"
                        name="name"
                        required
                        placeholder="E.g. John Doe"
                        defaultValue={
                          user.name.includes("@") ? user.nickname : user.name
                        }
                      />
                    </InputContainer>
                  ) : (
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
                  )}
                  {isAuthenticated ? (
                    <InputContainer>
                      <Label htmlFor="email-input">Your Email Address*</Label>
                      <Input
                        id="email-input"
                        type="email"
                        name="email"
                        required
                        placeholder="E.g. john@mail.com"
                        defaultValue={user.email}
                      />
                    </InputContainer>
                  ) : (
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
                  )}
                  <InputContainer>
                    <Label htmlFor="file-input">Resources*</Label>
                    <Input
                      id="resource"
                      type="file"
                      accept=".docx, .pdf"
                      name="resource"
                      required
                      onChange={(e) => {
                        if (e.target.files[0].size > 10000000) {
                          error("File size should be less than 10MB");
                          e.target.value = "";
                        }
                      }}
                    />
                    <h1
                      style={{
                        fontSize: ".8rem",
                        fontWeight: "bold",
                        color: "#FF895C",
                        marginTop: "10px",
                        marginBottom: "0px",
                        fontFamily: "system-ui",
                      }}
                    >
                      Resource should be a PDF/DOCX under 10MB.{" "}
                    </h1>
                  </InputContainer>
                </Column>
                <Column>
                  {/* <InputContainer>
                    <Label htmlFor="phone-input">Your Phone Number*</Label>
                    <Input
                      id="phone-input"
                      type="tel"
                      name="number"
                      required
                      placeholder="E.g. +91(XXXXX-XXXXX)"
                    />
                  </InputContainer> */}
                  <InputContainer>
                    {/* make PhoneInput an required field */}
                    <Label htmlFor="phone-input">Your Phone Number*</Label>
                    <PhoneInput
                      id="phone-input"
                      placeholder="Enter phone number"
                      defaultCountry="IN"
                      initialValueFormat="national"
                      value={value}
                      onChange={setValue}
                      international={true}
                      // withCountryCallingCode
                      countrySelectProps={{ unicodeFlags: true }}
                      required
                    />
                  </InputContainer>
                  <p>
                    {value
                      ? isValidPhoneNumber(value)
                        ? undefined
                        : "Invalid phone number"
                      : undefined}
                  </p>
                  <InputContainer>
                    <Label htmlFor="domain-input">Domain*</Label>
                    <select
                      id="domain-input"
                      value={domain}
                      onChange={(e) => setDomain(e.target.value)}
                      name="domain"
                      required
                      style={{
                        backgroundColor: "#efefef",
                        color: "black",
                        border: "none",
                        borderRadius: "5px",
                        padding: "5px",
                        fontSize: "0.875rem", // 14px
                        width: "100%",
                        cursor: "pointer",
                        outline: "none",
                      }}
                    >
                      <option value="">Select Domain</option>
                      <option value="Data-Structure-Algorithms">
                        Data-Structure-Algorithms
                      </option>
                      <option value="Competitive-Programming">
                        Competitive-Programming
                      </option>
                      <option value="Web-Development">Web-Development</option>
                      <option value="Programming-Languages">
                        Programming-Languages
                      </option>
                      <option value="AI-and-ML">AI-and-ML</option>
                      <option value="Database">Database</option>
                      <option value="Security">Security</option>
                      <option value="Version-Control">Version-Control</option>
                      <option value="Mobile-Development">
                        Mobile-Development
                      </option>
                      <option value="Cloud-DevOps">Cloud-DevOps</option>
                    </select>
                    <h1
                      style={{
                        fontSize: ".8rem",
                        fontWeight: "bold",
                        color: "#fff",
                        marginTop: "10px",
                        marginBottom: "0px",
                        fontFamily: "system-ui",
                      }}
                    >
                      Selected Domain: {domain}
                    </h1>
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="name-input">Description*</Label>
                    <TextArea
                      id="message-input"
                      type="text"
                      name="description"
                      required
                      placeholder="Type your resources description here"
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
                disabled={isLoading ? true : false}
                value={isLoading ? "Submitting..." : "Submit"}
              >
                Submit
              </SubmitButton>
            </form>
          </div>
          <h1
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#efefef",
              marginTop: "10px",
              marginBottom: "0px",
              fontFamily: "system-ui",
            }}
          >
            <u>Note:</u> Have resources larger than 10MB or other domain? Please
            send us a mail.
            <a href="mailto:contact@cuchapter.tech">
              {" "}
              <u
                style={{
                  color: "#D82E09",
                }}
              >
                Send Mail
              </u>
            </a>
          </h1>
          <SvgDotPattern1 />
        </FormContainer>
      </Content>
    </Container>
  );
};
