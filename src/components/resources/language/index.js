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
  headingText = "Programming Language Resources",
  posts = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1542831371-d531d36971e6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1024&q=80",
      category: "Book",
      date: "Feb 22, 2021",
      title: "C Notes for Professionals",
      description: "",
      url: "https://res.cloudinary.com/cuchapter/image/upload/v1656481981/addResources/languages/C_yzm4yi.pdf",
      featured: false,
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1542831371-d531d36971e6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1024&q=80",
      category: "Book",
      date: "Feb 22, 2021",
      title: "Head First Python",
      description: "",
      url: "https://drive.google.com/file/d/1s5jFYX-XenDMBinULndtIX190JzZ71pV/view?usp=sharing",
      featured: false,
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1542831371-d531d36971e6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1024&q=80",
      category: "Book",
      date: "Feb 22, 2021",
      title: "CPP Notes for Professionals",
      description: "",
      url: "https://res.cloudinary.com/cuchapter/image/upload/v1656481984/addResources/languages/CPlusPlus_gghczb.pdf",
      featured: false,
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1542831371-d531d36971e6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1024&q=80",
      category: "Book",
      date: "Feb 22, 2021",
      title: "Bash Notes for Professionals",
      description: "",
      url: "https://res.cloudinary.com/cuchapter/image/upload/v1656481985/addResources/languages/Bash_hule5l.pdf",
      featured: false,
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1542831371-d531d36971e6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1024&q=80",
      category: "Book",
      date: "Feb 22, 2021",
      title: "All Java Programs",
      description: "",
      url: "https://res.cloudinary.com/cuchapter/image/upload/v1656481978/addResources/languages/All_Java_Programs_dpr2es.pdf",
      featured: false,
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1542831371-d531d36971e6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1024&q=80",
      category: "Book",
      date: "Feb 22, 2021",
      title: "CPP STL",
      description: "",
      url: "https://res.cloudinary.com/cuchapter/image/upload/v1656481986/addResources/languages/Cpp_STL_Reference-Manual_v7b0cc.pdf",
      featured: false,
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1542831371-d531d36971e6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1024&q=80",
      category: "Book",
      date: "Feb 22, 2021",
      title: "Ruby Notes for Professionals",
      description: "",
      url: "https://res.cloudinary.com/cuchapter/image/upload/v1656481999/addResources/languages/Ruby_gcivom.pdf",
      featured: false,
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1542831371-d531d36971e6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1024&q=80",
      category: "Book",
      date: "Feb 22, 2021",
      title: "OOPs Question",
      description: "",
      url: "https://res.cloudinary.com/cuchapter/image/upload/v1656481991/addResources/languages/oops_questions_for_cse_3rd_sem_hj2f4p.pdf",
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
                <Post className="group" as="a" href={post.url}>
                  <Image imageSrc={post.imageSrc} />
                  <Info>
                    <Category>{post.category}</Category>
                    <CreationDate>{post.date}</CreationDate>
                    <Title>{post.title}</Title>
                    {post.featured && post.description && (
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
