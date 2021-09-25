import React from "react";
import tw from "twin.macro";
import styled, { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { ReactComponent as QuoteIconBase } from "images/quotes-l.svg"
import "slick-carousel/slick/slick.css";
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
  subheading = "All the Best ",
  heading = "About Event",
  description = " ",
  testimonials = [
    {
     quote:
        "An all-new MCQ series! The test is 10-15 minutes long and aimed at beginners and is the best way to spend a Saturday Evening! Hurry up."
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
  }],
  testimonials4 = [
  {
    quote:
    ""
  }]
}) => {

  return (
    <>
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
        <HeadingContainer>
          <Heading>Prizes</Heading>
          <Description>{description}</Description>
        </HeadingContainer>
          {testimonials2.map((testimonial, index) => (
            <Testimonial key={index}>
              <QuoteContainer>
                <QuoteIcon />
                <Quote>
                  {testimonial.quote}
                  <ul>1. Participation Certificate to every participants.</ul>
                  <ul>2. Achievement Certificate to top 3 participants.</ul>
                </Quote>
              </QuoteContainer>
            </Testimonial>
          ))}
          <HeadingContainer>
          <Heading>Rules</Heading>
          <Description>{description}</Description>
        </HeadingContainer>
          {testimonials3.map((testimonial, index) => (
            <Testimonial key={index}>
              <QuoteContainer>
                <QuoteIcon />
                <Quote>
                  {testimonial.quote}
                  <ul>1. The creator of this contest is solely responsible for setting and communicating the eligibility requirements associated with prizes awarded to participants, as well as for procurement and distribution of all prizes.</ul>
                  <ul>2. This is an individual participation contest.</ul>
                  <ul>3. Any case of cheating will result in disqualification.</ul>
                  <ul>4. All questions are tested and working.</ul>
                </Quote>
              </QuoteContainer>
            </Testimonial>
          ))}
          <HeadingContainer>
          <Heading>Scoring</Heading>
          <Description>{description}</Description>
        </HeadingContainer>
          {testimonials4.map((testimonial, index) => (
            <Testimonial key={index}>
              <QuoteContainer>
                <QuoteIcon />
                <Quote>
                  {testimonial.quote}
                  <ul>1. Each challenge has a pre-determined score.</ul>
                  <ul>2. Participants are ranked by score. If two or more participants achieve the same score, then the tie is broken by the total time taken to submit the last solution resulting in a higher score.</ul>
                </Quote>
              </QuoteContainer>
            </Testimonial>
          ))}
      </ContentWithPaddingXl>
      </Container>
      <Footer />
    </>
  );
};
