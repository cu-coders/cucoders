import React from "react";
import tw from "twin.macro";
import styled, { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { ReactComponent as QuoteIconBase } from "images/quotes-l.svg"
import "slick-carousel/slick/slick.css";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

const HeadingContainer = tw.div``;
const Heading = tw(SectionHeading)``;
const Description = tw(SectionDescription)`mx-auto text-center text-gray-300`;

const Testimonial = tw.div`px-6 py-12 sm:px-20 sm:py-16 focus:outline-none flex! flex-col justify-between h-full`
const QuoteContainer = tw.div`relative`
const QuoteIcon = tw(QuoteIconBase)`absolute opacity-15 top-0 left-0 transform -translate-y-2 -translate-x-1/2 sm:-translate-x-full w-10 fill-current text-primary-500`
const Quote = tw.blockquote`font-medium sm:font-normal relative text-sm sm:text-xl text-center sm:text-left`
export default ({
  subheading = "WE'RE HIRING A FULL-TIME ",
  heading = "About",
  description = " ",
  testimonials = [
    {
     quote:
        "✨Starting from Basic Intro to Programming to Advanced topics of Data Structures and Algorithms, we're going to cover it all!✨"
    },
    {
     quote:
        "👩🏼‍💻We will be sharing resources everyday in form of pdf and we also have something interesting coming up for you ,stay tuned for further updates!🌟💫"
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
  }]
}) => {

  return (
    <>
    <AnimationRevealPage>
      <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
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
        <Heading>Prizes</Heading>
          {testimonials1.map((testimonial1, index) => (
            <Testimonial key={index}>
              <QuoteContainer>
                <QuoteIcon />
                <Quote>
                  {testimonial1.quote}
                  The winners of this event will earn recognition via our social media channels and special perks are-
                  <ul>1. Participation certificates to all participants</ul>
                  <ul>2. Achievement certificates to top 3 contest winners!</ul>
                </Quote>
              </QuoteContainer>
            </Testimonial>
          ))}
      </ContentWithPaddingXl>
      </Container>
    </AnimationRevealPage>
    </>
  );
};
