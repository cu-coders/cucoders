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
  headingText = "DSA Resources",
  posts = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      category: "Book",
      date: "Feb 22, 2021",
      title:
        "Algorithms by S. Dasgupta, C. H. Papadimitriou, and U. V. Vazirani",
      description: "",
      url: "https://res.cloudinary.com/cuchapter/image/upload/v1656485437/addResources/Data-Structure-Algorithms/Algorithms_1_x8d2xx.pdf",
      featured: false,
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      category: "Book",
      date: "Feb 22, 2021",
      title: "Algorithms Notes for Professionals",
      description: "",
      url: "https://res.cloudinary.com/cuchapter/image/upload/v1656485438/addResources/Data-Structure-Algorithms/Algorithms_hjozqi.pdf",
      featured: false,
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      category: "Book",
      date: "Feb 22, 2021",
      title: "Data Structures (Into Java)",
      description: "",
      url: "https://res.cloudinary.com/cuchapter/image/upload/v1656486026/addResources/Data-Structure-Algorithms/data-structures_pfoaeh.pdf",
      featured: false,
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      category: "Book",
      date: "Feb 22, 2021",
      title: "Data Structures and Algorithm Analysis in C++",
      description: "By Mark Allen Weiss",
      url: "https://res.cloudinary.com/cuchapter/image/upload/v1656485448/addResources/Data-Structure-Algorithms/DSA-_Mark_Allen_Weiss_mkxmav.pdf",
      featured: false,
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      category: "Book",
      date: "Feb 22, 2021",
      title: "Matters Computational Ideas, Algorithms, Source Code",
      description: "By Jorg Arndt",
      url: "https://res.cloudinary.com/cuchapter/image/upload/v1656485469/addResources/Data-Structure-Algorithms/Matters_computational_hzghq2.pdf",
      featured: false,
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      category: "Book",
      date: "Feb 5, 2021",
      title: "Introduction to Algorithms",
      description:
        "Introduction to Algorithms is a book on computer programming by Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, and Clifford Stein.",
      url: "https://res.cloudinary.com/cuchapter/image/upload/v1656485471/addResources/Data-Structure-Algorithms/Introduction_to_Algorithms_3rd_Edition_The_MIT_Press_mzmifm.pdf",
      featured: false,
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      category: "Book",
      date: "Feb 5, 2021",
      title: "DSA by Narsimha Karamuchi",
      description:
        "Data Structure And Algorithmic Puzzles is a book that offers solutions to complex data structures and algorithms. There are multiple solutions for each problem and the book is coded in C/C++, it comes handy as an interview and exam guide for computer scientists",
      url: "https://drive.google.com/file/d/1VA3gEEmqmkMgmp2AYrmNRJuS8tOgsFIX/view?usp=sharing",
      featured: false,
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      category: "Book",
      date: "Feb 5, 2021",
      title: "Dynamic Programming for coding interviews.",
      description:
        "This book takes dynamic programming head-on. It first explain the concepts with simple examples and then deep dives into complex DP problems.",
      url: "https://drive.google.com/file/d/1nLCKUxeQzayofpp4Lj5ce37gg44gmCFV/view?usp=sharing",
      featured: false,
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      category: "Book",
      date: "Feb 5, 2021",
      title: "The Algorithm Design Manual",
      description:
        "The Algorithm Design Manual provides straightforward access to combinatorial algorithms technology, stressing design over analysis. The first part, Techniques, provides accessible instruction on methods for designing and analyzing computer algorithms.",
      url: "https://res.cloudinary.com/cuchapter/image/upload/v1656485477/addResources/Data-Structure-Algorithms/The_Algorithm_design_Manual_rpqbr7.pdf",
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
