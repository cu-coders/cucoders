import "slick-carousel/slick/slick.css";

import Footer from "components/footers/footers.js";
import Header from "components/headers/light.js";
import Apply from "components/job/apply.js";
import {
  SectionHeading,
  Subheading as SubheadingBase
} from "components/misc/Headings.js";
import {Container, ContentWithPaddingXl} from "components/misc/Layouts.js";
import {SectionDescription} from "components/misc/Typography.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import {ReactComponent as QuoteIconBase} from "images/quotes-l.svg"
import React from "react";
import styled, {css} from "styled-components/macro"; //eslint-disable-line
import tw from "twin.macro";

const HeadingContainer = tw.div``;
const Subheading = tw(SubheadingBase) `text-center text-primary-100 mb-4`;
const Heading = tw(SectionHeading) ``;
const Description = tw(SectionDescription) `mx-auto text-center text-gray-300`;

const Testimonial =
    tw.div`px-6 py-12 sm:px-20 sm:py-16 focus:outline-none flex! flex-col justify-between h-full`
const QuoteContainer = tw.div`relative`
const QuoteIcon = tw(
    QuoteIconBase) `absolute opacity-15 top-0 left-0 transform -translate-y-2 -translate-x-1/2 sm:-translate-x-full w-10 fill-current text-primary-500`
const Quote =
    tw.blockquote`font-medium sm:font-normal relative text-sm sm:text-xl text-center sm:text-left`
export default ({
  subheading = "WE'RE HIRING A FULL-TIME ",
  heading = "Back-End Developer",
  description = " ",
  testimonials = [ {
    quote :
        "We are looking for an analytical, results-driven Back-end Developer who will work with team members to troubleshoot and improve current back-end applications and processes. The Back-end Developer will use his or her understanding of programming languages and tools to analyze current codes and industry developments, formulate more efficient processes, solve problems, and create a more seamless experience for users. You should have excellent communication, computer, and project management skills."
  } ],
  testimonials1 = [ {quote : ""} ],
  testimonials2 = [ {quote : ""} ],
  testimonials3 = [ {quote : ""} ]
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
                  <ul>1. Basic understanding of front-end technologies and platforms, such as JavaScript, HTML5, and CSS3</ul>
                  <ul>2. Understanding of server-side CSS preprocessors, such as LESS and SASS</ul>
                  <ul>3. Understanding accessibility and security compliance.</ul>
                  <ul>4. User authentication and authorization between multiple systems, servers, and environments.</ul>
                  <ul>5. Integration of multiple data sources and databases into one system.</ul>
                  <ul>6. Management of hosting environment, including database administration and scaling an application to support load changes.</ul>
                  <ul>7. Data migration, transformation, and scripting.</ul>
                  <ul>8. Creating database schemas that represent and support business processes.</ul>
                  <ul>9. Proficient knowledge of a back-end programming language.</ul>
                  <ul>10. Proficient understanding of code versioning tools, such as Git.</ul>
                  <ul>11. Proficient understanding of OWASP security principles.</ul>
                  <ul>12. Understanding of “session management” in a distributed server environment.</ul>
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
                  <ul>1. Integration of user-facing elements developed by a front-end developers with server side logic.</ul>
                  <ul>2. Building reusable code and libraries for future use.</ul>
                  <ul>3. Optimization of the application for maximum speed and scalability.</ul>
                  <ul>4. Implementation of security and data protection.</ul>
                  <ul>5. Design and implementation of data storage solutions.</ul>
                </Quote>
              </QuoteContainer>
            </Testimonial>
          ))
}<HeadingContainer> {subheading && <Subheading>THE EXTRA STUFF</Subheading>}
          <Heading>Bonus skills</Heading>
          <Description>{description}</Description>
        </HeadingContainer>
          {testimonials3.map((testimonial, index) => (
            <Testimonial key={index}>
              <QuoteContainer>
                <QuoteIcon />
                <Quote>
                  {testimonial.quote}
                  <ul>1. Basic knowledge of react.js.</ul>
                  <ul>2. Comfortable working in the command line.</ul>
                  <ul>3. Prior experience as a UI Designer.</ul>
                </Quote>
              </QuoteContainer>
            </Testimonial>
          ))}
      </ContentWithPaddingXl>
      </Container>
        <Apply role={"backend-developer"}/>
      <Footer />
    </AnimationRevealPage>
    </>
  );
};
