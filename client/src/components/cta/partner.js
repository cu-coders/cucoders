import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";

const Header = tw(SectionHeading)``;

const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(motion.a)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;

const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-500`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

export default ({
  heading = "Our Partner",
  tabs = {
    Partner: [
      {
        imageSrc:
          "https://images.unsplash.com/photo-1611255893028-4164531350f0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        title: "CodeChef",
        content: "Platform Partner",
        price: "$5.99",
        rating: "5.0",
        reviews: "87",
        url: "https://www.linkedin.com/company/dot-questionmark?originalSubdomain=in"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1611256159511-50fa6f584d38?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        title: "GiveMyCertificate",
        content: "Certificate Partner",
        price: "$2.99",
        rating: "4.8",
        reviews: "32",
        url: "https://www.givemycertificate.com/"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1611256248482-1ebbda81b51d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        title: "Dot QuestionMark",
        content: "Community Partner",
        price: "$8.99",
        rating: "4.6",
        reviews: "12",
        url: "https://www.linkedin.com/company/dot-questionmark?originalSubdomain=in"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1611255561864-970a12f5c6e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        title: "UMIT CodeChef Chapter",
        content: "Chapter Partner",
        price: "$7.99",
        rating: "4.2",
        reviews: "19",
        url: "https://www.instagram.com/codechef_umit_chapter/"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1611255781074-47c8f5699acc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        title: "Jetbrains",
        content: "Software Partner",
        price: "$2.99",
        rating: "5.0",
        reviews: "61",
        url: "https://www.jetbrains.com/"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1611255864762-901c0cd93ab7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        title: "GitHub",
        content: "Platform Partner",
        price: "$3.99",
        rating: "4.2",
        reviews: "95",
        url: "https://wwww.github.com"
      }
    ],
  }
}) => {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  const tabsKeys = Object.keys(tabs);
  const [activeTab] = useState(tabsKeys[0]);

  return (
    <Container>
      <ContentWithPaddingXl>
          <Header>{heading}</Header>

        {tabsKeys.map((tabKey, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                opacity: 1,
                scale:1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale:0.8,
                display: "none",
              }
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {tabs[tabKey].map((card, index) => (
              <CardContainer key={index}>
                <Card className="group" href={card.url} initial="rest" whileHover="hover" animate="rest">
                  <CardImageContainer imageSrc={card.imageSrc}>
                    <CardHoverOverlay
                      variants={{
                        hover: {
                          opacity: 0,
                          height: "auto"
                        },
                        rest: {
                          opacity: 1,
                          height: 0
                        }
                      }}
                      transition={{ duration: 0.3 }}
                    >
                    </CardHoverOverlay>
                  </CardImageContainer>
                  <CardText>
                    <CardTitle>{card.title}</CardTitle>
                    <CardContent>{card.content}</CardContent>
                  </CardText>
                </Card>
              </CardContainer>
            ))}
          </TabContent>
        ))}
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};

