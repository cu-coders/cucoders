import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import axios from "axios";
import {PrimaryButton as PrimaryButtonBase} from "components/misc/Buttons.js";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import EmailIllustrationSrc from "images/email-illustration.svg";
import React, {useEffect} from "react";
import {useState} from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";
import {css} from "styled-components/macro"; //eslint-disable-line
import tw from "twin.macro";

import {error, success, warning} from "../messages";

const Container = tw.div`relative`;
const TwoColumn =
    tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column) `md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(
    (props) => [tw`md:w-7/12 mt-16 md:mt-0`,
                props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first`
                                 : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image =
    styled.div((props) => [`background-image: url("${props.imageSrc}");`,
                           tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase) `text-center md:text-left`;
const Heading = tw(
    SectionHeading) `mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description =
    tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Form =
    tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`;
const Input =
    tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`;
const Textarea = styled(Input).attrs({ as: "textarea" })`
  ${tw`h-24`}
`;

const SubmitButton = tw(PrimaryButtonBase) `inline-block mt-8`;

export default ({
  subheading = "Contact Us",
  heading = (
    <>
      Feel free to <span tw="text-primary-500">get in touch</span>
      <wbr /> with us.
    </>
  ),
  description = "We’re here to help and answer any question you might have. We look forward to hearing from you 🙂",
  submitButtonText = "Send",
  formAction = process.env.REACT_APP_C_FORM,
  formMethod = "post",
  textOnLeft = true,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  const [formToken, formTokenState] = useState("");
  const [formData, updateData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    axios
        .get("https://main-cu-coders.herokuapp.com/form-token", {
          withCredentials : true,
        })
        .then((res) => { formTokenState(res.data.formToken); })
        .catch((err) => { formTokenState(""); });
  }, []);
  const handleChange = (e) => {
    updateData({...formData, [e.target.name] : e.target.value});
  };
  const submit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
        .post("https://main-cu-coders.herokuapp.com/contact-us", formData,
              {"xsrf-token" : formToken})
        .then((res) => {
          setIsLoading(false)
          if (!res.data.success) {
            let text = `${res.data.err[0].param} - ${res.data.err[0].msg}`;
            error(text)
          }
          else {
            success("Submission successful")
          }
        })
        .catch((err) => {error(err.message)});
  };
  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={
    EmailIllustrationSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {
    subheading &&
        <Subheading>{
            subheading}</Subheading>}
            <Heading>{heading}</Heading>{
            " "} {
      description &&
          <Description>{description}<
              /Description>}
            <Form onSubmit={submit}>
              <Input
                type="email"
                onChange={handleChange}
                required
                name="email"
                placeholder="Your Email Address"
              /> {isLoading && (
                <Loader
        type = "TailSpin"
        color = "#00BFFF"
        height = {80} width = {80} style =
        {
          {
            zIndex: "2", width: "fit-content", position: "absolute",
                left: "46%",
          }
        } />
              )}
              <Input
                type="text"
                onChange={handleChange}
                required
                name="fullname"
                placeholder="Full Name"
              / >
            {" "} < Input
        type = "text"
        onChange = {handleChange} required
        name = "subject"
        placeholder = "Subject" / > {" "} < Textarea
        name = "message"
        onChange = {handleChange} required
                placeholder="Your Message Here"
              />
              <SubmitButton type="submit" disabled={isLoading ? true : false}>{submitButtonText}</SubmitButton>
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
      };
