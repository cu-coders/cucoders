import axios from "axios";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import "antd/dist/antd.css";
import { message } from "antd";
import { Container as ContainerBase } from "components/misc/Layouts";
import { ReactComponent as SignUpIcon } from "feather-icons/dist/icons/user-plus.svg";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import githubIconImageSrc from "images/github-icon.svg";
import googleIconImageSrc from "images/google-icon.png";
import logo from "images/logo.png";
import illustration from "images/signup-illustration.svg";
import React, { useState } from "react";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import tw from "twin.macro";

// import { useTransform } from "framer-motion";
// import { useHistory } from "react-router";
const Container = tw(
  ContainerBase
)`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const LogoLink = tw.a``;
const LogoImage = tw.img`h-12 mx-auto`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;

const SocialButtonsContainer = tw.div`flex flex-col items-center`;
const SocialButton = styled.a`
  ${tw`w-full max-w-xs font-semibold rounded-lg py-3 border text-gray-900 bg-gray-100 hocus:bg-gray-200 hocus:border-gray-400 flex items-center justify-center transition-all duration-300 focus:outline-none focus:shadow-outline text-sm mt-5 first:mt-0`}
  .iconContainer {
    ${tw`bg-white p-2 rounded-full`}
  }
  .icon {
    ${tw`w-4`}
  }
  .text {
    ${tw`ml-4`}
  }
`;

const DividerTextContainer = tw.div`my-12 border-b text-center relative`;
const DividerText = tw.div`leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent`;

const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
  ${(props) => `background-image: url("${props.imageSrc}");`}
  ${tw`m-12 xl:m-16 w-full max-w-lg bg-contain bg-center bg-no-repeat`}
`;

export default ({
  logoLinkUrl = "/home",
  illustrationImageSrc = illustration,
  headingText = "Sign Up For CU-Chapter",
  socialButtons = [
    {
      iconImageSrc: googleIconImageSrc,
      text: "Sign Up With Google",
      url: "https://main-cu-coders.herokuapp.com/auth/google",
    },
    {
      iconImageSrc: githubIconImageSrc,
      text: "Sign Up With GitHub",
      url: "https://main-cu-coders.herokuapp.com/auth/github",
    },
  ],
  submitButtonText = "Sign Up",
  SubmitButtonIcon = SignUpIcon,
  tosUrl = "/terms",
  privacyPolicyUrl = "/privacy",
  signInUrl = "/login",
}) => {
  const [user_data, updateData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  // const [message, updateMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    updateData({ ...user_data, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("https://main-cu-coders.herokuapp.com/auth/signup", user_data)
      .then((res) => {
        setLoading(false);
        if (res.data.message) {
          const msg = res.data.message;
          console.log(msg);
          if (msg === "An account with this email already exists") {
            console.log("Executed");
            message.error({
              content: res.data.message,
              duration: 5,
              style: {
                style: {
                  margin: "10px auto",
                },
              },
            });
          }
          if (msg === "Registered, please visit your email") {
            message.success({
              content: res.data.message,
              duration: 5,
              style: {
                style: {
                  margin: "10px auto",
                },
              },
            });
          }
        }
      });
  };

  // Redirecting to home page is already logged in
  return (
    <AnimationRevealPage>
      <Container>
        <Content>
          <MainContainer>
            <LogoLink href={logoLinkUrl}>
              <LogoImage src={logo} />
            </LogoLink>
            <MainContent>
              <Heading>{headingText}</Heading>
              <FormContainer>
                <SocialButtonsContainer>
                  {socialButtons.map((socialButton, index) => (
                    <SocialButton key={index} href={socialButton.url}>
                      <span className="iconContainer">
                        <img
                          src={socialButton.iconImageSrc}
                          className="icon"
                          alt=""
                        />
                      </span>
                      <span className="text">{socialButton.text}</span>
                    </SocialButton>
                  ))}
                </SocialButtonsContainer>
                <DividerTextContainer>
                  <DividerText>
                    <span
                      style={{ backgroundColor: "#ffffff", padding: "0 5px" }}
                    >
                      Or Sign up with your e-mail
                    </span>
                  </DividerText>
                </DividerTextContainer>
                {loading && (
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
                <Form onSubmit={submit}>
                  <Input
                    type="text"
                    name="firstname"
                    placeholder="First name"
                    value={user_data.firstname}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    type="text"
                    name="lastname"
                    placeholder="Last name"
                    value={user_data.lastname}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={user_data.email}
                    onChange={handleChange}
                    required
                  />
                  {/* {message ? (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        textAlign: "left",
                      }}
                    >
                      {message}
                    </div>
                  ) : (
                    ""
                  )} */}
                  <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={user_data.password}
                    onChange={handleChange}
                    required
                  />
                  <SubmitButton type="submit">
                    <SubmitButtonIcon className="icon" />
                    <span className="text">{submitButtonText}</span>
                  </SubmitButton>
                  <p
                    style={{
                      color: "rgba(113,128,150,1)",
                      textAlign: "center",
                      fontSize: "14px",
                      marginTop: "15px",
                    }}
                  >
                    I agree to abide by cuchapter's{" "}
                    <a
                      href={tosUrl}
                      style={{
                        borderBottom: "1px",
                        borderColor: "rgba(113,128,150,1)",
                        borderBottomStyle: "dotted",
                      }}
                    >
                      Terms of Service
                    </a>{" "}
                    and its{" "}
                    <a
                      href={privacyPolicyUrl}
                      style={{
                        borderBottom: "1px",
                        borderColor: "rgba(113,128,150,1)",
                        borderBottomStyle: "dotted",
                      }}
                    >
                      Privacy Policy
                    </a>
                  </p>

                  <p
                    style={{
                      color: "rgba(113,128,150,1)",
                      textAlign: "center",
                      marginTop: "22px",
                    }}
                  >
                    Already have an account?{" "}
                    <a
                      href={signInUrl}
                      style={{
                        borderBottom: "1px",
                        borderColor: "rgba(113,128,150,1)",
                        borderBottomStyle: "dotted",
                      }}
                    >
                      Sign In
                    </a>
                  </p>
                </Form>
              </FormContainer>
            </MainContent>
          </MainContainer>
          <IllustrationContainer>
            <IllustrationImage imageSrc={illustrationImageSrc} />
          </IllustrationContainer>
        </Content>
      </Container>
    </AnimationRevealPage>
  );
};
