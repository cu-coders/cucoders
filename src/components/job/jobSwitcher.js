import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as SvgDecoratorBlob } from "images/svg-decorator-blob-6.svg";
const HeaderContainer = tw.div`mt-10 w-full flex flex-col items-center`;
const Heading = tw(SubheadingBase)`w-full`;

const JobsContainer = tw.div`flex justify-between flex-col lg:flex-row items-center lg:items-stretch relative`;
const Job = styled.div`
  ${tw`w-full max-w-sm mt-16 lg:mr-8 lg:last:mr-0 text-center px-8 rounded-lg shadow relative pt-2 text-gray-900 bg-white flex flex-col`}
  .jobHighlight {
    ${tw`rounded-t-lg absolute top-0 inset-x-0 h-2`}
  }

  ${props =>
    props.featured &&
    css`
      background: rgb(100,21,255);
      background: linear-gradient(135deg, rgba(100,21,255,1) 0%, rgba(128,64,252,1) 100%);
background: rgb(85,60,154);
background: linear-gradient(135deg, rgba(85,60,154,1) 0%, rgba(128,90,213,1) 100%);
background: rgb(76,81,191);
background: linear-gradient(135deg, rgba(76,81,191,1) 0%, rgba(102,126,234,1) 100%);
      ${tw`bg-primary-500 text-gray-100`}
      .jobHighlight {
        ${tw`hidden`}
      }
      .duration {
        ${tw`text-gray-200!`}
      }
      ${JobFeatures} {
        ${tw`border-indigo-500`}
      }
      .feature:not(.mainFeature) {
        ${tw`text-gray-300!`}
      }
      ${BuyNowButton} {
        ${tw`bg-gray-100 text-primary-500 hocus:bg-gray-300 hocus:text-primary-800`}
    `}
`;

const JobHeader = styled.div`
  ${tw`flex flex-col uppercase leading-relaxed py-8`}
  .name {
    ${tw`font-bold text-xl`}
  }
  .price {
    ${tw`font-bold text-4xl sm:text-5xl my-1`}
  }
  .duration {
    ${tw`text-gray-500 font-bold tracking-widest`}
  }
`;
const JobFeatures = styled.div`
  ${tw`flex flex-col -mx-8 px-8 py-8 border-t-2 border-b-2 flex-1`}
  .feature {
    ${tw`mt-5 first:mt-0 font-medium`}
    &:not(.mainFeature) {
      ${tw`text-gray-600`}
    }
  }
  .mainFeature {
    ${tw`text-xl font-bold tracking-wide`}
  }
`;

const JobAction = tw.div`px-4 sm:px-8 xl:px-16 py-8`;
const BuyNowButton = styled(PrimaryButtonBase)`
  ${tw`rounded-full uppercase tracking-wider py-4 w-full text-sm hover:shadow-xl transform hocus:translate-x-px hocus:-translate-y-px focus:shadow-outline`}
`;

const DecoratorBlob = styled(SvgDecoratorBlob)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-25 transform -translate-x-1/2 translate-y-1/2`}
`;


export default ({
  heading = "Openings",
  Jobs = null,
  primaryButtonText = "Apply Now",
}) => {
  const defaultJobs = [
    {
      name: "Back-End Developer",
      duration: "Full-Time",
      mainFeature: "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
      //features: ["30 Templates", "7 Landing Pages", "12 Internal Pages", "Basic Assistance"],
      //featured: true,
      url: "backend",
    },
    {
      name: "Front-End Developer",
      duration: "Full-Time",
      mainFeature: "You're a seasoned developer with a love for clean, functional code, relentless work ethic and an exceptional eye for detail.",
      //features: ["30 Templates", "7 Landing Pages", "12 Internal Pages", "Basic Assistance"],
      url: "frontend"
    },
    {
      name: "Full Stack Developer",
      duration: "Full-Time",
      mainFeature: "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.",
      //features: ["30 Templates", "7 Landing Pages", "12 Internal Pages", "Basic Assistance"],
      //featured: true,
      url: "fullstack"
    }
  ];

  if (!Jobs) Jobs = defaultJobs;

  const highlightGradientsCss = [
    css`
      background: rgb(56, 178, 172);
      background-image: linear-gradient(115deg, #6415ff, #7431ff, #8244ff, #8e56ff, #9a66ff);
    `,
    css`
      background: rgb(56, 178, 172);
      background: linear-gradient(115deg, rgba(56, 178, 172, 1) 0%, rgba(129, 230, 217, 1) 100%);
    `,
    css`
      background: rgb(245, 101, 101);
      background: linear-gradient(115deg, rgba(245, 101, 101, 1) 0%, rgba(254, 178, 178, 1) 100%);
    `
  ];

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderContainer>
          <Heading>{heading}</Heading>
        </HeaderContainer>
        <JobsContainer>
          {Jobs.map((job, index) => (
            <Job key={index} featured={job.featured}>
              {!job.featured && <div className="jobHighlight" css={highlightGradientsCss[index % highlightGradientsCss.length]} />}
              <JobHeader>
                <span className="name">{job.name}</span>
                <span className="duration">{job.duration}</span>
              </JobHeader>
              <JobFeatures>
                <span className="feature mainFeature">{job.mainFeature}</span>
              </JobFeatures>
              <JobAction>
                <BuyNowButton css={!job.featured && highlightGradientsCss[index]} as="a" href={job.url}>{primaryButtonText}</BuyNowButton>
              </JobAction>
            </Job>
          ))}
          <DecoratorBlob/>
        </JobsContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};
