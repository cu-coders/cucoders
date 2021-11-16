import Footer from "components/footers/footers.js";
import Header from "components/headers/light.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import { ReactComponent as UserIcon } from "feather-icons/dist/icons/user.svg";
import { ReactComponent as TagIcon } from "feather-icons/dist/icons/tag.svg";

const Container = tw.div`relative`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Content = tw.div`mt-16`;

const Card = styled.div((props) => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row",
]);
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`,
]);
const Column = tw.div`mt-24 lg:w-1/3`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const Description = tw.p`mt-2 text-sm leading-loose`;
const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;
const Details = tw.div`p-6 flex-1 flex flex-col items-center text-center lg:block lg:text-left`;
const MetaContainer = tw.div`flex items-center`;
const Meta = styled.div`
  ${tw`text-secondary-100 font-medium text-sm flex items-center leading-none mr-6 last:mr-0`}
  svg {
    ${tw`w-4 h-4 mr-1`}
  }
`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;

const cardStyle = {
  height: "fit-content",
  boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
};

const imageStyle = {
  maxHeight: "200px",
  width: "100%",
};
function getDate({ date_start, date_end }) {
  console.log(date_start, new Date(date_start));
  if (date_start !== "" && date_end !== "") {
    return `Event Date - ${new Date(
      date_start
    ).toLocaleDateString()} to ${new Date(date_end).toLocaleDateString()}`;
  } else {
    return "";
  }
}

export default () => {
  // const cards = [
  //   {
  //     imageSrc:
  //       "https://images.unsplash.com/photo-1606326608690-4e0281b1e588?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  //     subtitle: "Contest",
  //     title: "Quiz Eve",
  //     description:
  //       "An all-new MCQ series! The test is 10-15 minutes long and aimed at
  //       beginners and is the best way to spend a Saturday afternoon! Giddy
  //       up.",
  //     url: "/quiz"
  //   }
  // ];

  const [t_cards, update_t_cards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://main-cu-coders.herokuapp.com/api/upcomming-events")
      .then((res) => {
        if (res.ok) {
          console.log(res);
          return res.json();
        }
      })
      .then((result) => {
        update_t_cards(result);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <AnimationRevealPage>
        <Header />
        <Container>
          <Content></Content>
          <HeadingInfoContainer>
            <HeadingTitle>Upcoming Events</HeadingTitle>
            <HeadingDescription>
              Here are some of the most popular events curated by CU-Coders.
            </HeadingDescription>
          </HeadingInfoContainer>

          <Content>
            <ThreeColumn>
              {isLoading && (
                <Loader
                  type="TailSpin"
                  color="#00BFFF"
                  height={80}
                  width={80}
                  style={{
                    zIndex: "2",
                    width: "fit-content",
                    position: "absolute",
                    left: "46%",
                    marginTop: "50px",
                  }}
                />
              )}
              {t_cards === undefined && (
                <div
                  style={{
                    fontSize: "18px",
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "#6415ff",
                    margin: "auto",
                    marginBottom: "50px",
                  }}
                >
                  Events Coming Soon!!
                </div>
              )}
              {t_cards !== undefined &&
                t_cards.map((post, index) => (
                  <Column key={index}>
                    <Card style={cardStyle}>
                      <Image imageSrc={post.imageSrc} style={imageStyle} />
                      <Details style={{ backgroundColor: "#FAFAFA" }}>
                        <Title style={{ color: "#6415FF" }}>{post.title}</Title>
                        <Description
                          style={{ height: "90px", overflow: "hidden" }}
                        >
                          {post.description !== ""
                            ? post.description
                            : "Event information not available at the current moment."}
                        </Description>
                        <small
                          style={{
                            marginTop: "10px",
                            marginBottom: "20px",
                            display: "block",
                            color: "#7C8BA1",
                            fontWeight: "500",
                          }}
                        >
                          {getDate({ ...post })}
                        </small>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            selfAlign: "center",
                            height: "min-content",
                            marginTop: "10px",
                            width: "100%",
                          }}
                        >
                          <Link href={post.url}>See More</Link>
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
                        </div>
                      </Details>
                    </Card>
                  </Column>
                ))}
            </ThreeColumn>
          </Content>
          <SvgDotPattern1 />
          <SvgDotPattern2 />
          <SvgDotPattern3 />
          <SvgDotPattern4 />
        </Container>
        <Footer />
      </AnimationRevealPage>
    </>
  );
};
