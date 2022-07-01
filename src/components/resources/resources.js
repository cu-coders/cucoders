import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";
import Resources from "components/resources/addResources.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header1 from "components/headers/light.js";
import Footer from "components/footers/footers.js";

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;

const TabContent = tw(
  motion.div
)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(
  motion.a
)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;
const CardButton = tw(PrimaryButtonBase)`text-sm`;

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
  isLoggedIn,
  heading = "Checkout the Resources",
  tabs = {
    Starters: [
      {
        imageSrc:
          "https://images.unsplash.com/photo-1477039181047-efb4357d01bd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        title: "Data Structure & Algorithm",
        content:
          "A good algorithm usually comes together with a set of good data structures that allow the algorithm to manipulate the data efficiently.",
        price: "$5.99",
        rating: "5.0",
        reviews: "87",
        url: "algo",
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        title: "Competitive Programming",
        content:
          "Competitive programming is a mind sport usually held over the Internet or a local network, involving participants trying to program according to provided specifications.",
        price: "$7.99",
        rating: "4.9",
        reviews: "89",
        url: "cp",
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        title: "Web Development",
        content:
          "Web development is the work involved in developing a Web site for the Internet or an intranet.",
        price: "$8.99",
        rating: "4.6",
        reviews: "12",
        url: "web",
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1613068687893-5e85b4638b56?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        title: "Programming Language",
        content:
          "A programming language is a formal language comprising a set of instructions that produce various kinds of output. Programming languages are used in computer programming to implement algorithms. Most programming languages consist of instructions for computers.",
        price: "$7.99",
        rating: "4.2",
        reviews: "19",
        url: "language",
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        title: "AI & ML",
        content:
          "I refers to the concept of machines mimicking human cognition. To reference artificial intelligence is to allude to machines performing tasks that only seemed plausible with human thinking and logic.",
        price: "$7.99",
        rating: "4.2",
        reviews: "19",
        url: "ComingNow",
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1610924125440-db821b18a56e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        title: "Database",
        content:
          "A database is an organized collection of data, generally stored and accessed electronically from a computer system. Where databases are more complex they are often developed using formal design and modeling techniques.",
        price: "$2.99",
        rating: "5.0",
        reviews: "61",
        url: "database",
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1514168757508-07ffe9ae125b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGV0aGljYWwlMjBoYWNraW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        title: "Security",
        content:
          "Computer security, cybersecurity or information technology security is the protection of computer systems and networks from information disclosure, theft of or damage to their hardware, software, or electronic data, as well as from the disruption or misdirection of the services they provide.",
        price: "$2.99",
        rating: "5.0",
        reviews: "61",
        url: "security",
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        title: "Version Control",
        content:
          "In software engineering, version control is a class of systems responsible for managing changes to computer programs, documents, large web sites, or other collections of information. Version control is a component of software configuration management.",
        price: "$3.99",
        rating: "4.2",
        reviews: "95",
        url: "versioncontrol",
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        title: "Mobile Development",
        content:
          "Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones.",
        price: "$3.99",
        rating: "4.2",
        reviews: "95",
        url: "Mobile",
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1599227577308-4323e4e2c946?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        title: "Cloud",
        content:
          "Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user.",
        price: "$3.99",
        rating: "3.9",
        reviews: "26",
        url: "ComingNow",
      },
    ],
  },
}) => {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  const tabsKeys = Object.keys(tabs);
  const [activeTab] = useState(tabsKeys[0]);

  return (
    <>
      <AnimationRevealPage>
        <Header1 isLoggedIn={isLoggedIn} />
        <Container>
          <ContentWithPaddingXl>
            <HeaderRow>
              <Header>{heading}</Header>
            </HeaderRow>
            {tabsKeys.map((tabKey, index) => (
              <TabContent
                key={index}
                variants={{
                  current: {
                    opacity: 1,
                    scale: 1,
                    display: "flex",
                  },
                  hidden: {
                    opacity: 0,
                    scale: 0.8,
                    display: "none",
                  },
                }}
                transition={{ duration: 0.4 }}
                initial={activeTab === tabKey ? "current" : "hidden"}
                animate={activeTab === tabKey ? "current" : "hidden"}
              >
                {tabs[tabKey].map((card, index) => (
                  <CardContainer key={index}>
                    <Card
                      className="group"
                      href={card.url}
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                    >
                      <CardImageContainer imageSrc={card.imageSrc}>
                        <CardHoverOverlay
                          variants={{
                            hover: {
                              opacity: 1,
                              height: "auto",
                            },
                            rest: {
                              opacity: 0,
                              height: 0,
                            },
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <CardButton>See Resources</CardButton>
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

          <Resources />
        </Container>
        <Footer />
      </AnimationRevealPage>
    </>
  );
};
