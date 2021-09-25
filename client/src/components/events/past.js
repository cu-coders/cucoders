import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {css} from "styled-components/macro"; //eslint-disable-line
import { SectionHeading as HeadingTitle, Subheading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as UserIcon } from "feather-icons/dist/icons/user.svg";
import { ReactComponent as TagIcon } from "feather-icons/dist/icons/tag.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-3.svg";

import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import Footer from "components/footers/footers.js";
const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 lg:w-1/3`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm flex flex-col h-full`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-80 lg:h-64 rounded rounded-b-none`
]);

const Details = tw.div`p-6 rounded border-2 border-t-0 rounded-t-none border-dashed border-primary-100 flex-1 flex flex-col items-center text-center lg:block lg:text-left`;
const MetaContainer = tw.div`flex items-center`;
const Meta = styled.div`
  ${tw`text-secondary-100 font-medium text-sm flex items-center leading-none mr-6 last:mr-0`}
  svg {
    ${tw`w-4 h-4 mr-1`}
  }
`;

const Title = tw.h5`mt-4 leading-snug font-bold text-lg`;
const Description = tw.p`mt-2 text-sm text-secondary-100`;
const Link = styled(PrimaryButtonBase).attrs({as: "a"})`
  ${tw`inline-block mt-4 text-sm font-semibold`}
`

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`-z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`-z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`;

export default ({
  subheading = "Past Events",
  heading = <>We Love <span tw="text-primary-500">Events.</span></>,
  description = "Some amazing events that are conducted by even more amazing people.",

}) => {
  const blogPosts = [
  {
      imageSrc:
        "https://images.unsplash.com/photo-1620297907912-5175a9a9ccec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "CU, SNU, IIST, DMCE, SCIT, SIT Chapter",
      category: "Contest",
      title: "10-11th April, 2021",
      description: "A 24 Hours Coding Contest Consist Of Problems From Data Structures And Algorithms.",
      url: "https://www.codechef.com/RTR2021?itm_campaign=contest_listing"
  },
  {
      imageSrc:
        "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      author: "CU & UMIT Chapter",
      category: "Quiz",
      title: "20th March, 2021",
      description: "The test is 10-15 minutes long and aimed at beginners and is the best way to spend a Saturday Evening!.",
      url: "https://quizizz.com/admin/quiz/60559464d6284e001de5a866"
  },
  {
      imageSrc:
        "https://images.unsplash.com/photo-1606326608690-4e0281b1e588?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      author: "CU & UMIT Chapter",
      category: "Quiz",
      title: "13th March, 2021",
      description: "The test is 10-15 minutes long and aimed at beginners and is the best way to spend a Saturday Evening!.",
      url: "https://quizizz.com/admin/quiz/604c888a3e134e001b0dd581"
  },
  {
      imageSrc:
        "https://images.unsplash.com/photo-1564207550505-5135c0fe4e76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      author: "CU & UMIT Chapter",
      category: "Quiz",
      title: "06th March, 2021",
      description: "The test is 10-15 minutes long and aimed at beginners and is the best way to spend a Saturday Evening!.",
      url: "https://quizizz.com/admin/quiz/60433eb6ee4035001d364321"
  },
  {
      imageSrc:
        "https://images.unsplash.com/photo-1612286648571-5cde43a710ba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "CU & UMIT Chapter",
      category: "Contest",
      title: "03rd February, 2021",
      description: "After a week full of learning and fun, we are back with a programming contest to *test* your learning so far 🤓,This contest is for all the programmers from beginner to a high level.",
      url: "https://www.codechef.com/CP7D2021"
  },
  {
      imageSrc:
        "https://images.unsplash.com/photo-1611996430260-9c7d638fd4c7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Yashraj Kakkad",
      category: "Speaker Session",
      title: "02nd February, 2021",
      description: "To further enhance your skills on Dynamic Programming, A session was organised with Yashraj Kakkad, incoming Summer Analyst at Goldman Sachs.🌟",
      url: "https://meet.google.com/hvh-dmne-auv"
  },
  {
      imageSrc:
        "https://images.unsplash.com/photo-1611589763733-06723d888080?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "CU & UMIT",
      category: "Learning Series",
      title: "26th-01st February, 2021",
      description: "Starting from Basic Intro to Programming to Advanced topics of Data Structures and Algorithms, we cover it all! We shared resources everyday in form of pdf",
      url: ""
  },
  {
      imageSrc:
        "https://images.unsplash.com/photo-1620297862868-41c020dd8a7f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Shashank Mishra",
      category: "Speaker Session",
      title: "01st February, 2021",
      description: "To further give info about placement and common mistakes by you, A session was organised with Shashank Mishra, Data Engineer at Amazon.🌟",
      url: "https://meet.google.com/tuj-miee-yuw"
  },
  {
      imageSrc:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1051&q=80",
      author: "Ankit Raj",
      category: "Coding Contest",
      title: "11th January, 2021",
      description: "An online Test for All Year Engineering Students on 26th December 2020 under the supervision of respected HOD Academic Unit 1 Er. Vikas Wasson. This coding contest was based on concepts of algorithms, data structures and problem solving. All the problems have the same points allotted to them and participants are ranked according to the most problem solved and time constraints.",
      url: "https://cujudge.herokuapp.com/contests/1"
  },
  {
      imageSrc:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
      author: "Ankit Raj",
      category: "Coding Contest",
      title: "26th December, 2020",
      description: "An online Test for All Year Engineering Students on 26th December 2020 under the supervision of respected HOD Academic Unit 1 Er. Vikas Wasson. This coding contest was based on concepts of algorithms, data structures and problem solving. All the problems have the same points allotted to them and participants are ranked according to the most problem solved and time constraints.",
      url: "https://www.hackerrank.com/contests/intro-to-cp/"
  },
  {
      imageSrc:
        "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
      author: "Ankit Raj",
      category: "BootCamp",
      title: "16th November - 16th December, 2020",
      description: "An initiative from the Dot QuestionMark which introduces a series of 9 distinct events, all that promises to build a foundation for the knowledge of any specific domain.",
      url: "https://neev.dotquestionmark.com/"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
      author: "Ankit Raj",
      category: "Coding Contest",
      title: "04th November, 2020",
      description: "An online Test for First Year Engineering Students on 04th November 2020 under the supervision of respected HOD Academic Unit 1 Er. Vikas Wasson. This coding contest was based on concepts of algorithms, data structures and problem solving. All the problems have the same points allotted to them and participants are ranked according to the most problem solved and time constraints.",
      url: "https://www.hackerrank.com/contests/welcome-to-cu-coders/challenges"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1994&q=80",
      author: "CU-Coders",
      category: "Webinar",
      title: "27th Sept, 2020",
      description: "The purpose of the System Design is to supplement the system architecture by providing information and data useful and necessary for implementation of the system elements. This is one of the most important topics that is covered in job interviews.",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1527427337751-fdca2f128ce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      author: "Ankit Raj",
      category: "Coding Contest",
      title: "05-11th August, 2020",
      description: "An online test for First, Second and Third Year Engineering Students from 05th August 2020 to 11th August 2020. This coding contest was based on concepts of algorithms, data structures and problem solving in which 3 levels were there and difficulty level increased with time.",
      url: "https://www.codechef.com/POID2020"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      author: "CSoC Committee",
      category: "Webinar",
      title: "27th Jun, 2020",
      description: "A workshop on 27th June 2020 under the CSoC contest.How to start with Open Source By Kushal Kushwaha : An hour webinar where students are given a clear cut idea of how to start and where to start in open source in umbrella of Pi Shaped learning. Students intriduced to foss community, given ideas about GSOC's and MLH fellowship.",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
      author: "Ankit Raj",
      category: "Coding Contest",
      title: "10th May, 2020",
      description: "An online Test for First Year Engineering Students on 10th May 2020 under the supervision of respected HOD Academic Unit 1 Er. Vikas Wasson. This coding contest was based on concepts of algorithms, data structures and problem solving. All the problems have the same points allotted to them and participants are ranked according to the most problem solved and time constraints.",
      url: "https://www.codechef.com/CUCO2020"
    },
    {
      imageSrc:
        "https://images.unsplash.com/flagged/photo-1556655678-9d4812e3fbe9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
      author: "Ankit Raj",
      category: "Coding Contest",
      title: "30th April, 2020",
      description: "An online Test for First Year Engineering Students on 30th April 2020 under the supervision of respected HOD Academic Unit 1 Er. Vikas Wasson. This coding contest was based on concepts of algorithms, data structures and problem solving. All the problems have the same points allotted to them and participants are ranked according to the most problem solved and time constraints.",
      url: "https://www.hackerrank.com/contests/cu-coders/challenges"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      author: "CU-Coders",
      category: "Summer of Code",
      title: "22nd April, 2020",
      description: "A 2 months coding contest start from 22nd April 2020 CSoC ( CU-Coders University Summer of Code) is a program organised by Developers of CU-Coders in collaboration with CodeChef focused on bringing more student developers into open source software development.",
      url: "https://github.com/CSoC-2020"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1559424432-7d6c9a977daf?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
      author: "Ankit Raj",
      category: "Hackathon",
      title: "02nd April, 2020",
      description: "The hackathon was conducted to create solutions against the spread of the COVID-19. Any hardware or software solutions to stop the spread or predication and detection models against the disease. It was completely an Online Hackathon to make something world changing and to save millons of life!!",
      url: "https://www.codechef.com/COVDHACK?itm_campaign=contest_listing"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      author: "Ankit Raj",
      category: "Coding Contest",
      title: "04th March, 2020",
      description: "An online Test for First Year Engineering Students on 04th March 2020 under the supervision of respected HOD Academic Unit 1 Er. Vikas Wasson. This coding contest was based on concepts of algorithms, data structures and problem solving. All the problems have the same points allotted to them and participants are ranked according to the most problem solved and time constraints.",
      url: "https://www.codechef.com/MAR32020"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1596496181848-3091d4878b24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      author: "Anustup Mukherjee",
      category: "Workshop",
      title: "02nd March, 2020",
      description: "A workshop for First Year Engineering Students on 02nd March 2020. ABC's of R workshop By Anustup Mukherjee : A day long workshop starting from the basics of R , implemetation of R in statistical computing , data modelling and how we can use R in Machine learning and AI . Students from TCS brach are given hands on trainig on advanced R software.",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      author: "Anustup Mukherjee",
      category: "Workshop",
      title: "28th Feb, 2020",
      description: "A one day long workhsop for First Year Engineering Students on 28th Feb 2020 held at chandigarh university from CodeChef CU-Coders where students are trained with the basic concepts of python and machine learning from scratch.Building real life algorithms ,implementing deep learning and creating models to solve real world issues.",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      author: "Ankit Raj",
      category: "Coding Contest",
      title: "25th Feb, 2020",
      description: "An online Test for First Year Engineering Students on 25th Feb 2020 under the supervision of respected HOD Academic Unit 1 Er. Vikas Wasson. This coding contest was based on concepts of algorithms, data structures and problem solving. All the problems have the same points allotted to them and participants are ranked according to the most problem solved and time constraints.",
      url: "https://www.codechef.com/MAR12020"
    },
    {
      imageSrc:
      "https://images.unsplash.com/photo-1526925539332-aa3b66e35444?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
      author: "Ankit Raj",
      category: "Coding Contest",
      title: "12th Feb, 2020",
      description: "An online Test for First Year Engineering Students on 12th Feb 2020 under the supervision of respected HOD Academic Unit 1 Er. Vikas Wasson. This coding contest was based on concepts of algorithms, data structures and problem solving. All the problems have the same points allotted to them and participants are ranked according to the most problem solved and time constraints.",
      url: "https://www.codechef.com/MAHA2020"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1536148935331-408321065b18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80",
      author: "Ankit Raj",
      category: "Coding Contest",
      title: "20th Jan, 2020",
      description: "An online Test for First Year Engineering Students on 20th Jan 2020 under the supervision of respected HOD Academic Unit 1 Er. Vikas Wasson. This coding contest was based on concepts of algorithms, data structures and problem solving. All the problems have the same points allotted to them and participants are ranked according to the most problem solved and time constraints.",
      url: "https://www.codechef.com/MABT2020"
    }
  ];
  return (
    <AnimationRevealPage>
    <Header />
    <Container>
      <Content>
        <HeadingInfoContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <HeadingTitle>{heading}</HeadingTitle>
          <HeadingDescription>{description}</HeadingDescription>
        </HeadingInfoContainer>
        <ThreeColumn>
          {blogPosts.map((post, index) => (
            <Column key={index}>
              <Card>
                <Image imageSrc={post.imageSrc} />
                <Details>
                  <MetaContainer>
                    <Meta>
                      <UserIcon />
                      <div>{post.author}</div>
                    </Meta>
                    <Meta>
                      <TagIcon />
                      <div>{post.category}</div>
                    </Meta>
                  </MetaContainer>
                  <Title>{post.title}</Title>
                  <Description>{post.description}</Description>
                  <Link href={post.url}>See More</Link>
                </Details>
              </Card>
            </Column>
          ))}
          <DecoratorBlob1 />
          <DecoratorBlob2 />
        </ThreeColumn>
      </Content>
      <Footer />
    </Container>
    </AnimationRevealPage>
  );
};
