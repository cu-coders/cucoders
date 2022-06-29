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
  headingText = "Web Resources",
  posts = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      category: "Book",
      date: "Feb 15, 2021",
      title: "Eloquent Javascript",
      url: "https://res.cloudinary.com/cuchapter/image/upload/v1656483877/addResources/Web-Development/Eloquent_JavaScript_m3ehn2.pdf",
      featured: false,
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      category: "Book",
      date: "Feb 15, 2021",
      title: "HTML5",
      url: "https://res.cloudinary.com/cuchapter/image/upload/v1656483890/addResources/Web-Development/HTML5_kviunp.pdf",
      featured: false,
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      category: "Book",
      date: "Feb 15, 2021",
      title: "HTML5 Canvas",
      url: "https://res.cloudinary.com/cuchapter/image/upload/v1656483901/addResources/Web-Development/HTML5Canvas_vsrg4h.pdf",
      featured: false,
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      category: "Book",
      date: "Feb 15, 2021",
      title: "CSS",
      url: "https://res.cloudinary.com/cuchapter/image/upload/v1656483876/addResources/Web-Development/CSS_zjzjhr.pdf",
      featured: false,
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      category: "Book",
      date: "Feb 15, 2021",
      title: "Javascript",
      url: "https://res.cloudinary.com/cuchapter/image/upload/v1656483914/addResources/Web-Development/JavaScript_xhq3ux.pdf",
      featured: false,
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      category: "Book",
      date: "Feb 15, 2021",
      title: "jQuery",
      url: "https://res.cloudinary.com/cuchapter/image/upload/v1656483930/addResources/Web-Development/jQuery_owt6c6.pdf",
      featured: false,
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      category: "Book",
      date: "Feb 15, 2021",
      title: "NodeJS",
      url: "https://res.cloudinary.com/cuchapter/image/upload/v1656483979/addResources/Web-Development/NodeJS_nnn87y.pdf",
      featured: false,
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      category: "Book",
      date: "Feb 15, 2021",
      title: "ReactJS",
      url: "https://res.cloudinary.com/cuchapter/image/upload/v1656484006/addResources/Web-Development/ReactJS_zy8rce.pdf",
      featured: false,
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      category: "Book",
      date: "Feb 15, 2021",
      title: "AngularJS",
      url: "https://res.cloudinary.com/cuchapter/image/upload/v1656483870/addResources/Web-Development/angularjs_tutorial_ednj40.pdf",
      featured: false,
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      category: "Book",
      date: "Feb 15, 2021",
      title: "HTML & CSS",
      url: "https://res.cloudinary.com/cuchapter/image/upload/v1656483884/addResources/Web-Development/HTML_and_CSS_knngta.pdf",
      featured: false,
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      category: "Book",
      date: "Feb 15, 2021",
      title: "Javascript",
      url: "https://drive.google.com/file/d/1QNc83CfPWfRJ8FaWwiILL1xW3Vl5X64S/view?usp=sharing",
      featured: false,
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      category: "Book",
      date: "Feb 15, 2021",
      title: "Bootstrap",
      url: "https://res.cloudinary.com/cuchapter/image/upload/v1656483873/addResources/Web-Development/Bootstrap-Programming-Cookbook_cz66c0.pdf",
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
