import React from "react";
import tw from "twin.macro";
import styled, { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { ReactComponent as QuoteIconBase } from "images/quotes-l.svg"
import "slick-carousel/slick/slick.css";
import Apply from "components/job/openings/fullstack/apply.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import Footer from "components/footers/footers.js";

const HeadingContainer = tw.div``;
const Subheading = tw(SubheadingBase)`text-center text-primary-100 mb-4`;
const Heading = tw(SectionHeading)``;
const Description = tw(SectionDescription)`mx-auto text-center text-gray-300`;

const Testimonial = tw.div`px-6 py-12 sm:px-20 sm:py-16 focus:outline-none flex! flex-col justify-between h-full`
const QuoteContainer = tw.div`relative`
const QuoteIcon = tw(QuoteIconBase)`absolute opacity-15 top-0 left-0 transform -translate-y-2 -translate-x-1/2 sm:-translate-x-full w-10 fill-current text-primary-500`
const Quote = tw.blockquote`font-medium sm:font-normal relative text-sm sm:text-xl text-center sm:text-left`
export default ({
  subheading = "WE'RE HIRING A FULL-TIME ",
  heading = "Full Stack Developer",
  description = " ",
  testimonials = [
    {
     quote:
        "We are looking for a seasoned full-stack engineer to build out and manage our entire web infrastructure. Successful candidates will have a minimum of three years’ recent experience with all of the skills listed below. Our project entails implementing our pre-approved UI, constructing our API, connecting the two, and setting up our server infrastructure. This includes all associated areas such as database and architecture design."
    }
  ],
  testimonials1 = [
  {
    quote:
    ""
  }],
  testimonials2 = [
  {
    quote:
    ""
  }],
  testimonials3 = [
  {
    quote:
    ""
  }]
}) => {

  return (
    <>
    <AnimationRevealPage>
      <Header />
      <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          <Description>{description}</Description>
        </HeadingContainer>
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index}>
              <QuoteContainer>
                <QuoteIcon />
                <Quote>
                  {testimonial.quote}
                </Quote>
              </QuoteContainer>
            </Testimonial>
          ))}
        {subheading && <Subheading>THE MUST-HAVES</Subheading>}
        <Heading>Qualifications</Heading>
          {testimonials1.map((testimonial1, index) => (
            <Testimonial key={index}>
              <QuoteContainer>
                <QuoteIcon />
                <Quote>
                  {testimonial1.quote}
                  <ul>1. At least three months’ experience with:
                    <li>Writing HTML, CSS, and JavaScript. Being up on latest practices is a must.</li>
                    <ol>A relevant back-end programming language. </ol>
                    <ol>Database design and management, including being up on the latest practices and associated versions</ol>
                    <ol>Server management and deployment for the relevant environment.</ol>
                  </ul>
                  <ul>2. Familiarity with a relevant and globally supported framework—both front-end and back-end, if necessary.</ul>
                  <ul>3. Ideally, familiarity with CSS preprocessors, bundlers, and associated languages/syntaxes/libraries.</ul>
                  <ul>4. Thorough understanding of user experience and possibly even product strategy.</ul>
                  <ul>5. Experience implementing testing platforms and unit tests.</ul>
                  <ul>6. Proficiency with Git.</ul>
                  <ul>7. Appreciation for clean and well documented code.</ul>
                </Quote>
              </QuoteContainer>
            </Testimonial>
          ))}
        <HeadingContainer>
          {subheading && <Subheading>THE DAILY TO-DOS</Subheading>}
          <Heading>Responsibilities</Heading>
          <Description>{description}</Description>
        </HeadingContainer>
          {testimonials2.map((testimonial, index) => (
            <Testimonial key={index}>
              <QuoteContainer>
                <QuoteIcon />
                <Quote>
                  {testimonial.quote}
                  <ul>1. Design and implementation of the overall web architecture.</ul>
                  <ul>2. “Pixel-perfect” implementation of our approved user interface.</ul>
                  <ul>3. Design and deployment of our database.</ul>
                  <ul>4. Ensuring the entire stack is designed and built for speed and scalability.</ul>
                  <ul>5. Design and construction of our REST API.</ul>
                  <ul>6. Integrating our front-end UI with the constructed API.</ul>
                  <ul>7. Design and implementation of continuous integration and deployment.</ul>
                </Quote>
              </QuoteContainer>
            </Testimonial>
          ))}
          <HeadingContainer>
          {subheading && <Subheading>THE EXTRA STUFF</Subheading>}
          <Heading>Bonus skills</Heading>
          <Description>{description}</Description>
        </HeadingContainer>
          {testimonials3.map((testimonial, index) => (
            <Testimonial key={index}>
              <QuoteContainer>
                <QuoteIcon />
                <Quote>
                  {testimonial.quote}
                  <ul>1. Have some previous internships.</ul>
                  <ul>2. A basic understanding of design and development principles.</ul>
                </Quote>
              </QuoteContainer>
            </Testimonial>
          ))}
      </ContentWithPaddingXl>
      </Container>
      <Apply />
      <Footer />
    </AnimationRevealPage>
    </>
  );
};
