import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryLink as PrimaryLinkBase } from "components/misc/Links.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-icon.svg";

import Footer from "components/footers/footers.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";

import Apply from "components/projects/applyproject.js";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const ThreeColumn = tw.div`flex flex-wrap`;
const Column = tw.div``;
const HeadingColumn = tw(Column)`w-full xl:w-1/3`;
const CardColumn = tw(Column)`w-full md:w-1/2 xl:w-1/3 mt-16 xl:mt-0`;

const HeadingInfoContainer = tw.div`text-center xl:text-left max-w-lg xl:max-w-none mx-auto xl:mx-0`;
const HeadingTitle = tw(SectionHeading)`xl:text-left leading-tight`;
const HeadingDescription = tw.p`text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 mt-8`;
const PrimaryLink = styled(PrimaryLinkBase)`
  ${tw`inline-flex justify-center xl:justify-start items-center mt-8 text-lg`}
  svg {
    ${tw`ml-2 w-5 h-5`}
  }
`;
const Link = styled(PrimaryButtonBase).attrs({as: "a"})`
  ${tw`inline-block mt-4 text-sm font-semibold`}
`

const Card = tw.div`mx-auto xl:mx-0 xl:ml-auto max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-xs`;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-80 bg-cover bg-center rounded`
]);

const CardText = tw.div`mt-4`;

const CardHeader = tw.div`flex justify-between items-center`;
const CardType = tw.div`text-primary-500 font-bold text-lg`;

const CardTitle = tw.h5`text-xl mt-4 font-bold`;

const CardMeta = styled.div`
  ${tw`flex flex-row flex-wrap justify-between sm:items-center font-semibold tracking-wide text-gray-600 uppercase text-xs`}
`;

const CardMetaFeature = styled.div`
  ${tw`flex items-center mt-4`}
  svg {
    ${tw`w-5 h-5 mr-1`}
  }
`;

export default ({ isLoggedIn}) => {
  const cards = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80",
      type: "Data Structure & Algorithms",
      title: "Project-on-Data-structure",
      locationText: "GitHub",
      url: "https://github.com/CSoC-2020/Project-on-Data-structure",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80",
      type: "Development",
      title: "Project-music App",
      locationText: "GitHub",
      url: "https://github.com/CSoC-2020/Project-musicApp",
    },
  ];
  return (
    <>
      <AnimationRevealPage>
        <Header isLoggedIn={isLoggedIn} />
        <Container>
          <Content>
            <ThreeColumn>
              <HeadingColumn>
                <HeadingInfoContainer>
                  <HeadingTitle>Our Projects</HeadingTitle>
                  <HeadingDescription>
                    "The major reason for setting a goal is for what it makes of
                    you to accomplish it. What it makes of you will always be
                    the far greater value than what you get." ~ Jim Rohn
                  </HeadingDescription>
                  <PrimaryLink
                    a
                    href="https://github.com/CSoC-2020?tab=repositories"
                  >
                    View All Projects <ArrowRightIcon />
                  </PrimaryLink>
                </HeadingInfoContainer>
              </HeadingColumn>
              {cards.map((card, index) => (
                <CardColumn key={index}>
                  <Card>
                    <CardImage imageSrc={card.imageSrc} />
                    <CardText>
                      <CardHeader>
                        <CardType>{card.type}</CardType>
                      </CardHeader>
                      <CardTitle>{card.title}</CardTitle>
                      <CardMeta>
                        <CardMetaFeature>
                          <LocationIcon /> {card.locationText}
                        </CardMetaFeature>
                      </CardMeta>
                      <Link href={card.url}>See Project</Link>
                    </CardText>
                  </Card>
                </CardColumn>
              ))}
            </ThreeColumn>
          </Content>
        </Container>
        <Apply />
        <Footer />
      </AnimationRevealPage>
    </>
  );
};