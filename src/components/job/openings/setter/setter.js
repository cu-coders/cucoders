import "slick-carousel/slick/slick.css";

import Footer from "components/footers/footers.js";
import Header from "components/headers/light.js";
import Apply from "components/job/apply.js";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionDescription } from "components/misc/Typography.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { ReactComponent as QuoteIconBase } from "images/quotes-l.svg";
import React from "react";
import styled, { css } from "styled-components/macro"; //eslint-disable-line
import tw from "twin.macro";

const HeadingContainer = tw.div``;
const Subheading = tw(SubheadingBase)`text-center text-primary-100 mb-4`;
const Heading = tw(SectionHeading)``;
const Description = tw(SectionDescription)`mx-auto text-center text-gray-300`;

const Testimonial = tw.div`px-6 py-12 sm:px-20 sm:py-16 focus:outline-none flex! flex-col justify-between h-full`;
const QuoteContainer = tw.div`relative`;
const QuoteIcon = tw(
  QuoteIconBase
)`absolute opacity-15 top-0 left-0 transform -translate-y-2 -translate-x-1/2 sm:-translate-x-full w-10 fill-current text-primary-500`;
const Quote = tw.blockquote`font-medium sm:font-normal relative text-sm sm:text-xl text-center sm:text-left`;
export default ({
  subheading = "WE'RE HIRING A FULL-TIME ",
  heading = "Problem Setter",
  description = " ",
  testimonials = [
    {
      quote:
        "Some would say that razor-sharp analytical skills and creativity do not go hand-in-hand, but we disagree. We know there are plenty of programmers out there who can come up with fun problems for our contests. Are you a mastermind who's bored of winning our monthly algorithm contests? Do you want to get some experience on the other side of the equation?",
    },
  ],
  testimonials1 = [{ quote: "" }],
  testimonials2 = [{ quote: "" }],
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
                  <Quote>{testimonial.quote}</Quote>
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
                    <ul>
                      1. Knowledge of Data Structures and Algorithms/
                      Programming Concepts.
                    </ul>
                    <ul>2. 3* or more in CodeChef</ul>
                    <ul>3. Div 1 or 2 in CodeForces or Topcoder.</ul>
                    <ul>4. Competed in at least 10 rated contests.</ul>
                    <ul>
                      5. Have decent knowledge of other Computer Science domain
                      such as backend development, frontend development, android
                      etc.
                    </ul>
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
                    <ul>
                      1. Set Programming challenges that test the logical
                      ability of the person.
                    </ul>
                    <ul>
                      2. Set multiple choice questions to test if someone has
                      actually worked on that language or technology? Instead of
                      theoretical questions, these need to be practical things
                      like debugging scenarios, identifying problems with
                      architectures and so on.
                    </ul>
                  </Quote>
                </QuoteContainer>
              </Testimonial>
            ))}
          </ContentWithPaddingXl>
        </Container>
        <Apply role={"problem-setter"} />
        <Footer />
      </AnimationRevealPage>
    </>
  );
};
