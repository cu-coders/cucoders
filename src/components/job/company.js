import { SectionHeading as SubheadingBase } from "components/misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";
import React from "react";
import styled from "styled-components";
// eslint-disable-next-line
import { css } from "styled-components/macro"; //eslint-disable-line
import tw from "twin.macro";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Heading = tw(SubheadingBase)`w-full`;

const VerticalSpacer = tw.div`mt-10 w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-sm`}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`border text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-mono-0 text-2xl leading-none`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default ({ cards = null, heading = "PERKS OF THE JOB" }) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) title - the title of the card
   *  2) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const defaultCards = [
    {
      title: "Growth",
      description:
        "We want you to develop and learn. Every employee has the opportunity to grow in their role(s) at CodeChef CU Chapter through hands-on experience, paid learning and workshops.",
    },
    {
      title: "Flexible Hours",
      description:
        "As a club built on creativity, we want you at your best. That's why we work remotely on select days and even let you adjust your hours depending on life's impromptu moments.",
    },
    {
      title: "Opportunity",
      description:
        "We want you to get placed in some awesome company. Every employee has the opportunity to get internship in the parallel company.",
    },
    {
      title: "Employee Satisfaction",
      description:
        "A simple thank-you or compliment can change your day. It can even do something really incredible: actually make you happier.",
    },
    {
      title: "Networking",
      description:
        "With such a large and diverse community at your fingertips, there are plenty of opportunities for networking in large companies.",
    },
    {
      title: "Irresistible Culture",
      description:
        "At the risk of sounding cliche, we fight for culture at every turn. You won't find any cubicles, stuffy dress codes, or micro managers within these walls. But what you will find is enthusiasm, learning opportunities, and freedom to work.",
    },
  ];

  if (!cards) cards = defaultCards;

  return (
    <Container>
      <ThreeColumnContainer>
        <Heading>{heading}</Heading>
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description ||
                    "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
