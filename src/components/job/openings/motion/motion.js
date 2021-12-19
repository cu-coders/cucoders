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
  heading = "Motion Designer",
  description = " ",
  testimonials = [ {
    quote :
        "We are looking for a creative Animator to develop excellent visual frames with 2D/3D or other techniques. Your work will give life to storylines and characters in films, games or videos. Animators possess a creative eye and artistic aptitude. They can easily turn a script or a concept into an impressive computer-generated animation."
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
                  <ul>1. Proficient with Adobe Photoshop, Illustrator, Premiere, and After Effects.</ul>
                  <ul>2. Proficient in motion graphic animation techniques.</ul>
                  <ul>3. Willingness to be a part of multiple projects simultaneously.</ul>
                  <ul>4. Knowledge of 2D/3D, stop motion and computer-generated animation</ul>
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
                  <ul>1. Read scripts and storylines to understand animation requirements.</ul>
                  <ul>2. Prepare presentations with raw designs to customers.</ul>
                  <ul>3. Develop storyboards for the initial stages of production.</ul>
                  <ul>4. Create models, drawings and illustrations by hand or electronically</ul>
                  <ul>5. Join images with background graphics and special effects.</ul>
                  <ul>6. Ensure synchronization of frames and audio.</ul>
                  <ul>7. Direct the work of animation assistants</ul>
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
                  <ul>1. Willingness to be a part of multiple projects simultaneously.</ul>
                  <ul>2. Collaborate with design, animation, and visual effects departments to meet the highest visual quality</ul>
                </Quote>
              </QuoteContainer>
            </Testimonial>
          ))}
      </ContentWithPaddingXl>
      </Container>
      <Apply role={"motion-designer"} />
      <Footer />
    </AnimationRevealPage>
    </>
  );
};
