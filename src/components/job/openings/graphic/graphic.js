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
  heading = "Graphic Designer",
  description = " ",
  testimonials = [
    {
     quote:
        "As our new graphic designer, you will use your knowledge of typography, color, layout, and image manipulation to create visually appealing designs that clearly communicate our core product offerings to our customers. In addition to our design team, you will work closely with our creative directors, project managers, and marketing team to produce world-class assets for print and digital and ensure that all deliverables maintain a look and feel that is consistent with our brand."
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
                  <ul>1. Have proficiency in using Adobe products like InDesign, Illustrator, and Photoshop.</ul>
                  <ul>2. A basic working knowledge of screen design tools like Canva, Sketch.</ul>
                  <ul>3. Excellent communication skills, including the ability to clearly explain design decisions in words and writing.</ul>
                  <ul>4. The ability to receive, interpret, and implement constructive feedback from project stakeholders into your design work.</ul>
                  <ul>5. An appreciation for and awareness of emerging design trends in print and digital.</ul>
                  <ul>6. Able to learn new tools and processes quickly and work in a fast-evolving environment.</ul>
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
                  <ul>1. Design pages for print and digital so that information is easy to find, read, and understand.</ul>
                  <ul>2. Gather all relevant facts for each project and ensure that all deliverables communicate the correct information.</ul>
                  <ul>3. Generate clear ideas, concepts, and designs of creative assets from beginning to end.</ul>
                  <ul>4. Work collaboratively with other designers to ensure a consistent, integrated brand perception.</ul>
                  <ul>5. Collaborate with a cross-functional team that includes marketers, creative directors, and product managers in order to create compelling designs.</ul>
                  <ul>6. Stay on top of the latest standards, processes, and trends in the visual design field.</ul>
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
                  <ul>1. Basic knowledge of UX tools like XD, Figma.</ul>
                  <ul>2. A strong portfolio that showcases aesthetic awareness and design problem solving abilities..</ul>
                  <ul>3. Prior experience as a UI Designer.</ul>
                </Quote>
              </QuoteContainer>
            </Testimonial>
          ))
}
      </ContentWithPaddingXl>
      </Container>
      <Apply role={"graphic-designer"} />
      <Footer />
    </AnimationRevealPage>
    </>
  );
      }
      ;
