import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import Footer from "components/footers/footers.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";

import Top from "components/cta/top.js";

import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-3.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 lg:w-1/3`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm lg:max-w-xs`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-80 lg:h-64 rounded`
]);
const Category = tw.div`mt-4 text-secondary-100 font-bold text-sm`;
const Title = tw.h4`mt-2 leading-relaxed font-bold text-lg`;
const Link = tw.a`inline-block mt-2 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

const Description = tw.p`mt-2 text-sm leading-loose`;
const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`-z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`-z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`;

export default () => {
  const blogPosts = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1611589763733-06723d888080?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Learning Series",
      title: "Competitive Programing in 7 days",
      description:
        "Starting from Basic Intro to Programming to Advanced topics of Data Structures and Algorithms, we're going to cover it all! We will be sharing resources everyday in form of pdf and we also have something interesting coming up for you ,stay tuned for further updates!",
      url: 'Details'
    },
    /*{
      imageSrc:
        "https://images.unsplash.com/photo-1603991318729-d12776468d70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80",
      subtitle: "Free",
      title: "Neev - The whirlwind of tech",
      description:
        "An initiative from the Dot QuestionMark which introduces a series of 9 distinct events, all that promises to build a foundation for the knowledge of any specific domain.",
      url: "https://neev.dotquestionmark.com/"
    }*/
  ];
  return (
    <>
    <AnimationRevealPage>
    <Header />
    <Container>
      <Content>
        <HeadingInfoContainer>
          <HeadingTitle>Ongoing Events</HeadingTitle>
          <HeadingDescription>Some amazing events that are going on.</HeadingDescription>
        </HeadingInfoContainer>
        <ThreeColumn>
          {blogPosts.map((post, index) => (
            <Column key={index}>
              <Card>
                <Image imageSrc={post.imageSrc} />
                <Category>{post.category}</Category>
                <Title>{post.title}</Title>
                <Description>{post.description}</Description>
                <Link href={post.url}>See More</Link>
              </Card>
            </Column>
          ))}
        </ThreeColumn>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
    <Top
      heading={<>Chef of the Week</>}
      />
    <Footer />
    </AnimationRevealPage>
    </>
  );
};
