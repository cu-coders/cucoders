import React from "react";
import tw from "twin.macro";
import styled, { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { ReactComponent as QuoteIconBase } from "images/quotes-l.svg"
import "slick-carousel/slick/slick.css";
import Apply from "components/job/openings/uiux/apply.js";
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
  heading = "UI/UX Designer",
  description = " ",
  testimonials = [
    {
     quote:
        "We are looking for an experienced and talented UI/UX designer to design and shape unique, user-centric products and experiences. The ideal candidate will have experience working in agile teams, with developers, UX designers and copywriters. You will be able to make deliberate design decisions and to translate any given user-experience journey into a smooth and intuitive interaction."
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
                  <ul>1. Knowledge of wireframe tools (e.g. Adobe XD, figma, InVision etc.)</ul>
                  <ul>2. Up-to-date knowledge of design software like Adobe Illustrator and Photoshop.</ul>
                  <ul>3. Team spirit; strong communication skills to collaborate with various stakeholders.</ul>
                  <ul>4. Good time-management skills.</ul>
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
                  <ul>1. Gather and evaluate user requirements in collaboration with product managers and engineers.</ul>
                  <ul>2. Illustrate design ideas using storyboards, process flows and sitemaps.</ul>
                  <ul>3. Design graphic user interface elements, like menus, tabs and widgets.</ul>
                  <ul>4. Build page navigation buttons and search fields.</ul>
                  <ul>5. Develop UI mockups and prototypes that clearly illustrate how sites function and look like.</ul>
                  <ul>6. Create original graphic designs (e.g. images, sketches and tables). </ul>
                  <ul>7. Prepare and present rough drafts to internal teams and key stakeholders.</ul>
                  <ul>8. Identify and troubleshoot UX problems (e.g. responsiveness).</ul>
                  <ul>9. Conduct layout adjustments based on user feedback.</ul>
                  <ul>10. Adhere to style standards on fonts, colors and images.</ul>
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
                  <ul>1. Functional experience in Front-End developments.</ul>
                  <ul>2. Experience in immersive design (AR/VR).</ul>
                  <ul>3. Portfolio of design projects.</ul>
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
