import axios from "axios";
import Header from "components/headers/light.js";
import { Container as ContainerBase } from "components/misc/Layouts";
import { ReactComponent as LoginIcon } from "feather-icons/dist/icons/log-in.svg";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import githubIconImageSrc from "images/github-icon.svg";
import googleIconImageSrc from "images/google-icon.png";
import illustration from "images/login-illustration.svg";
import logo from "images/logo.png";
import React from "react";
import { useState, useEffect } from "react";
import { Navigate } from "react-router";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import tw from "twin.macro";
import { success, error, warning } from '../components/messages'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Container = tw(
  ContainerBase
)`min-h-screen text-white font-medium flex justify-center -m-8`;
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
  ${tw`m-12 xl:m-16 w-full max-w-sm bg-contain bg-center bg-no-repeat`}
`;

export default ({
  updateIsLoggedIn,
  logoLinkUrl = "/home",
  illustrationImageSrc = illustration,
  headingText = "Sign In To CU-Chapter",
  isLoggedIn,
  socialButtons = [
    {
      iconImageSrc: googleIconImageSrc,
      text: "Sign In With Google",
      url: "https://main-cu-coders.herokuapp.com/auth/google",
    },
    {
      iconImageSrc: githubIconImageSrc,
      text: "Sign In With GitHub",
      url: "https://main-cu-coders.herokuapp.com/auth/github",
    },
  ],
  submitButtonText = "Sign In",
  SubmitButtonIcon = LoginIcon,
  forgotPasswordUrl = "/lostpassword",
  signupUrl = "/signup",
}) => {
  //--------------------------------INITIALIZING STATES-------------------------
  const [isVarified, updateIsVarified] = useState();
  const [formToken, formTokenState] = useState("");
  const [credentials, updateCredentials] = useState({
    email: "",
    password: "",
  });
  //--------------------------------ON PAGE LOAD--------------------------------

  //---------------------------------UPDATING INPUTS-----------------------------
  useEffect(() => {
    axios
      .get("https://main-cu-coders.herokuapp.com/form-token", {
        withCredentials: true,
      })
      .then((res) => {
        formTokenState(res.data.formToken);
      })
      .catch((err) => {
        formTokenState("");
      });
  }, []);
  const handleChange = (e) => {
    updateCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  //---------------------------------SUBMITING LOGIN FORM------------------------
  const [loading, setLoading] = useState(false)
  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("https://main-cu-coders.herokuapp.com/auth/login", credentials, {
        withCredentials: true,
        "xsrf-token": formToken,
      })
      .then((res) => {
        setLoading(false);
        console.log("Response from login API : ", res)
        if (res.data.success) {
          success("User logged in successfully", 1);
          setTimeout(() => {
            updateIsVarified(true);
            updateIsLoggedIn(true);
          }, 1000)
        }
        else {
          if (res.data.message === "Invalid Credentials") error("Invalid Credentials")
          else if (res.data.message === "unregistered email") error("Unregistered email")
          else if (res.data.message === "Invalid login mode") error("Invalid Login mode")
          else {
            warning("Please verify your email")
          }
        }
      }).catch((err) => {
        setLoading(false);
        error("Email or password incorrect")
      });
  };
  if (isVarified) return <Navigate to="/" />;

  return (
    <AnimationRevealPage>
      <Header isLoggedIn={isLoggedIn} />
      <br />
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
                <DividerTextContainer>
                  <DividerText>
                    <span
                      style={{ backgroundColor: "#ffffff", padding: "0 5px" }}
                    >
                      Or Sign in with your e-mail
                    </span>
                  </DividerText>
                </DividerTextContainer>
                <Form onSubmit={submit}>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                  />
                  <Input
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                  />
                  <SubmitButton type="submit">
                    <SubmitButtonIcon className="icon" />
                    <span className="text">{submitButtonText}</span>
                  </SubmitButton>
                </Form>
                <p
                  // tw="mt-6 text-xs text-gray-600 text-center"
                  style={{
                    color: "rgba(113,128,150,1)",
                    textAlign: "center",
                    fontSize: "14px",
                    marginTop: "15px",
                  }}
                >
                  <a
                    href={forgotPasswordUrl}
                    // tw="border-b border-gray-500 border-dotted"
                    style={{
                      borderBottom: "1px",
                      borderColor: "rgba(113,128,150,1)",
                      borderBottomStyle: "dotted",
                    }}
                  >
                    Forgot Password ?
                  </a>
                </p>
                <p
                  // tw="mt-8 text-sm text-gray-600 text-center"
                  style={{
                    color: "rgba(113,128,150,1)",
                    textAlign: "center",
                    marginTop: "22px",
                  }}
                >
                  Dont have an account?{" "}
                  <a
                    href={signupUrl}
                    // tw="border-b border-gray-500 border-dotted"
                    style={{
                      borderBottom: "1px",
                      borderColor: "rgba(113,128,150,1)",
                      borderBottomStyle: "dotted",
                    }}
                  >
                    Sign Up
                  </a>
                </p>
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
