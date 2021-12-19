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
  heading = "Editorialists",
  description = " ",
  testimonials = [
    {
      quote:
        "If you take pride in making things simple. If you posses love for complex algorithms and like explaining them to eager enthusiasts making them easy to understand. If you have a good command over the English language. And to top it all, if you get elated from the stimulating algorithmic discussions while the problems are being baked in our kitchen before they are served to the rest of the world. You have all the ingredients to be our Editorialist. As an Editorialist, you will be responsible for writing the editorials of all the problems in our contest. We currently need Editorialists for our Contests",
    },
  ],
  testimonials1 = [{ quote: "" }],
  testimonials2 = [{ quote: "" }],
  testimonials3 = [{ quote: "" }],
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
                    <ul>5. Have decent command on English.</ul>
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
                      1. Must verify that the solution for all the problems
                      provided by setter and tester should be commented for
                      better understanding.
                    </ul>
                    <ul>
                      2. The editorials are to be posted immediately after the
                      contest ends.
                    </ul>
                    <ul>
                      3. The editorials may be liked by the smart coders, yet
                      they are targeted to make a newbie approach the problem.
                    </ul>
                    <ul>
                      4. Editorial should contain a discussion of alternate
                      approaches to solving the same problem.
                    </ul>
                    <ul>
                      5. Editorial may contain a discussion of a few variants of
                      the same problem. For example, some interesting variants
                      of the problem that were found during the testing process
                      could be provided.
                    </ul>
                  </Quote>
                </QuoteContainer>
              </Testimonial>
            ))}
          </ContentWithPaddingXl>
        </Container>
        <Apply role={"editorialist"} />
        <Footer />
      </AnimationRevealPage>
    </>
  );
};
