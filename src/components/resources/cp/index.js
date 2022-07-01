import React, { useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import Header from "components/headers/light.js";
import Footer from "components/footers/footers.js";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton } from "components/misc/Buttons";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900`;
const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`;
const PostContainer = styled.div`
  ${tw`mt-10 w-full sm:w-1/2 lg:w-1/3 sm:pr-8`}
  ${(props) =>
    props.featured &&
    css`
      ${tw`w-full!`}
      ${Post} {
        ${tw`sm:flex-row! h-full sm:pr-4`}
      }
      ${Image} {
        ${tw`sm:h-96 sm:min-h-full sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg`}
      }
      ${Info} {
        ${tw`sm:-mr-4 sm:pl-8 sm:flex-1 sm:rounded-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0`}
      }
      ${Description} {
        ${tw`text-sm mt-3 leading-loose text-gray-600 font-medium`}
      }
    `}
`;
const Post = tw.div`cursor-pointer flex flex-col bg-gray-100 rounded-lg`;
const Image = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`h-64 w-full bg-cover bg-center rounded-t-lg`}
`;
const Info = tw.div`p-8 border-2 border-t-0 rounded-lg rounded-t-none`;
const Category = tw.div`uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`;
const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`;
const Title = tw.div`mt-1 font-black text-2xl text-gray-900 group-hover:text-primary-500 transition duration-300`;
const Description = tw.div``;

const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;

export default ({
  headingText = "CP Resources",
  posts = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1024&q=80",
      category: "Book",
      date: "Feb 22, 2021",
      title: "Coding Interview Questions By Narasimha Karumanchi",
      description: "",
      url: "https://drive.google.com/file/d/1oQzg7N8k0AngFnEKKyNWgF7RzRnGuWFy/view?usp=sharing",
      featured: false,
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1024&q=80",
      category: "Handbook",
      date: "Feb 22, 2021",
      title: "Competitive Programming",
      description: "",
      url: "https://drive.google.com/file/d/1qFFA5sHO63aLOk3ovZB3xnM59VnndN3B/view?usp=sharing",
      featured: false,
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1024&q=80",
      category: "Book",
      date: "Feb 22, 2021",
      title: "Computational Geometry",
      description: "",
      url: "https://drive.google.com/file/d/1YGiD-IAaZpQJfoumuyQkbg0afa-f9kwH/view?usp=sharing",
      featured: false,
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1024&q=80",
      category: "Book",
      date: "Feb 22, 2021",
      title: "CRACKING the CODING INTERVIEW",
      description: "",
      url: "https://drive.google.com/file/d/1_sORffeUsE8jD4pzOtEmBFAB5zmLllgJ/view?usp=sharing",
      featured: false,
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1024&q=80",
      category: "Book",
      date: "Feb 22, 2021",
      title: "Dynamic Programming Questions:",
      description: "",
      url: "https://res.cloudinary.com/cuchapter/image/upload/v1656487335/addResources/Competitive-Programming/Dynamic_Programming_Questions_r6pb8x.pdf",
      featured: false,
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1024&q=80",
      category: "Book",
      date: "Feb 22, 2021",
      title: "Elements of Programming Interview",
      description: "",
      url: "https://drive.google.com/file/d/19xxtxzkgeyasEtlLhjviz_tCrQekA2Kj/view?usp=sharing",
      featured: false,
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1024&q=80",
      category: "Book",
      date: "Feb 5, 2021",
      title: "Competitive Programmer’s Handbook",
      description:
        "Competitive Programmer's Handbook is a book whose purpose is to give the reader a thorough introduction to competitive programming.",
      url: "https://res.cloudinary.com/cuchapter/image/upload/v1656487320/addResources/Competitive-Programming/Competitive_Programmer_s_Handbook_aar6kh.pdf",
      featured: false,
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1024&q=80",
      category: "Book",
      date: "Feb 5, 2021",
      title: "Handbook of geometry for competitive_programmers",
      description: "",
      url: "https://res.cloudinary.com/cuchapter/image/upload/v1656487351/addResources/Competitive-Programming/Handbook_of_geometry_for_competitive_programmers_qeuium.pdf",
      featured: false,
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1024&q=80",
      category: "Question Bank",
      date: "Feb 5, 2021",
      title: "2011 Stanford Local ACM Programming Contest",
      description: "",
      url: "https://drive.google.com/file/d/1BsDwJ8uLPrI1vl0HUnd4dlDGJDcQskrB/view?usp=sharing",
      featured: false,
    },
  ],
}) => {
  const [visible, setVisible] = useState(9);
  const onLoadMoreClick = () => {
    setVisible((v) => v + 8);
  };
  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Posts>
            {posts.slice(0, visible).map((post, index) => (
              <PostContainer key={index} featured={post.featured}>
                <Post className="group" as="a" target="_blank" href={post.url}>
                  <Image imageSrc={post.imageSrc} />
                  <Info>
                    <Category>{post.category}</Category>
                    <CreationDate>{post.date}</CreationDate>
                    <Title>{post.title}</Title>
                    {post.featured || post.description || (
                      <Description>{post.description}</Description>
                    )}
                  </Info>
                </Post>
              </PostContainer>
            ))}
          </Posts>
          {visible < posts.length && (
            <ButtonContainer>
              <LoadMoreButton onClick={onLoadMoreClick}>
                Load More
              </LoadMoreButton>
            </ButtonContainer>
          )}
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};
