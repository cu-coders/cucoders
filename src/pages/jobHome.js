import Footer from "components/footers/footers.js";
import Header from "components/headers/light.js";
import Company from "components/job/company.js";
import JobSwitcher1 from "components/job/jobSwitcher-2.js";
import JobSwitcher2 from "components/job/jobSwitcher-3.js";
import JobSwitcher from "components/job/jobSwitcher.js";
import {SectionHeading} from "components/misc/Headings.js";
import {
  Container,
  ContentWithVerticalPadding
} from "components/misc/Layouts.js";
import {SectionDescription} from "components/misc/Typography.js";
import {
  ReactComponent as CheckboxIcon
} from "feather-icons/dist/icons/check-circle.svg";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import {ReactComponent as SvgDecoratorBlob1} from "images/dot-pattern.svg"
import {ReactComponent as QuotesLeftIconBase} from "images/quotes-l.svg"
import React from "react";
import styled from "styled-components";
import {css} from "styled-components/macro"; //eslint-disable-line
import tw from "twin.macro";

// import JobList from "components/job/jobSwitcher.js";
// import JobList2 from "components/job/jobSwitcher-2.js";
// import JobList3 from "components/job/jobSwitcher-3.js";
const Row =
    tw.div`flex flex-col lg:flex-row justify-between items-center lg:pt-16 max-w-screen-2xl mx-auto sm:px-8`;
const Column = tw.div``;
const TextColumn =
    tw(Column) `mr-auto lg:mr-0 max-w-lg lg:max-w-xl xl:max-w-2xl`;
const Heading =
    tw(SectionHeading) `text-left text-primary-900 leading-snug xl:text-6xl`;
const Description =
    tw(SectionDescription) `mt-4 lg:text-base text-gray-700 max-w-lg`;
const FeatureList = tw.ul`mt-12 leading-loose`;
const Feature = tw.li`flex items-center`;
const FeatureIcon = tw(CheckboxIcon) `w-5 h-5 text-primary-500`;
const FeatureText = tw.p`ml-2 font-medium text-gray-700`;
const ImageColumn =
    tw(Column) `ml-auto lg:mr-0 relative mt-16 lg:mt-0 lg:ml-32`;
const ImageContainer =
    tw.div`relative z-40 transform xl:-translate-x-24 xl:-translate-y-16`;
const Image = tw.img`max-w-full w-96 rounded-t sm:rounded relative z-20`;
const Offsetbackground = tw.div`absolute inset-0 bg-gray-300 rounded xl:-mb-8`
const ImageDecoratorBlob = styled(SvgDecoratorBlob1) `
  ${tw`pointer-events-none z-10 absolute right-0 bottom-0 transform translate-x-10 translate-y-10 h-32 w-32 opacity-25 text-gray-900 fill-current`}
`;
const Testimonial =
    tw.div`max-w-sm rounded-b md:rounded-none relative sm:absolute bottom-0 inset-x-0 z-20 px-8 py-6 sm:px-10 sm:py-8 bg-primary-900 text-gray-400 font-medium transform md:-translate-x-32 text-sm leading-relaxed md:-mr-16 xl:mr-0`
const QuotesLeftIcon = tw(
    QuotesLeftIconBase) `w-16 h-16 md:w-12 md:h-12 absolute top-0 left-0 text-gray-100 md:text-red-500 transform translate-x-1 md:-translate-x-1/2 md:-translate-y-5 opacity-10 md:opacity-100`
const Quote = tw.blockquote``
const CustomerName = tw.p`mt-4 font-bold`
const CustomerCompany = tw.p`mt-1 text-sm text-gray-500`

export default ({
  heading = "CU-Coders is a fast-growing campus chapter of CodeChef.",
  description = "We build a robust Competitive Programming culture and making it accessible to all not only in the field of Competitive Programming, we cover all domains of Computer Science from Design to Data Science.",
  imageSrc = "https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9",
  imageDecoratorBlob = true,
  primaryButtonUrl = "https://google.com",
  primaryButtonText = "Get Started",
  buttonRounded = true,
  features = ["Certificates", "Letter of Recommendation", "Internship opprtunity in Parallel Company", "Opportunities to Network"],
  testimonial = {
  quote: "You can't always pick your family, but you can pick where you work.",
      customerName: "Ankit Raj", customerCompany: "Founder, CU-Coders."
  }
}) => {
  return (
    <>
      <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithVerticalPadding>
          <Row>
            <TextColumn>
              <Heading>{heading}</Heading>
              <Description>{description}</Description>
              <FeatureList>
                {features.map((feature, index) => (
                  <Feature key={index}>
                    <FeatureIcon />
                    <FeatureText>{feature}</FeatureText>
                  </Feature>
                ))}
              </FeatureList>
            </TextColumn>
            <ImageColumn>
              <ImageContainer>
                <Image src={
    imageSrc} />
                {imageDecoratorBlob && <ImageDecoratorBlob />}
                <Testimonial>
                  <QuotesLeftIcon/>
                  <Quote>{testimonial.quote}</Quote>
                  <CustomerName>{testimonial.customerName}</CustomerName>
                  <CustomerCompany>{testimonial.customerCompany}</CustomerCompany>
                </Testimonial>
              </ImageContainer>
              <Offsetbackground />
            </ImageColumn>
          </Row>
        </ContentWithVerticalPadding>
      </Container>
      <Company />
      <JobSwitcher />
      <JobSwitcher1 />
      <JobSwitcher2 />
      <Footer />
      </AnimationRevealPage>
    </>
  );
}
;
