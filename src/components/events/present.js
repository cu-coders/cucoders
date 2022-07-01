import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Footer from "components/footers/footers.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";

import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import { ReactComponent as UserIcon } from "feather-icons/dist/icons/user.svg";
import { ReactComponent as TagIcon } from "feather-icons/dist/icons/tag.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-3.svg";
import { useEffect } from "react";
import { useState } from "react";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 lg:w-1/3`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm lg:max-w-xs`;
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-80 lg:h-64 rounded`,
]);
const Title = tw.h4`mt-2 leading-relaxed font-bold text-lg`;
const Link = tw.a`inline-block mt-2 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

const Description = tw.p`mt-2 text-sm leading-loose`;
const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`-z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`-z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`;
const Details = tw.div`p-6 flex-1 flex flex-col items-center text-center lg:block lg:text-left`;
const MetaContainer = tw.div`flex items-center`;
const Meta = styled.div`
  ${tw`text-secondary-100 font-medium text-sm flex items-center leading-none mr-6 last:mr-0`}
  svg {
    ${tw`w-4 h-4 mr-1`}
  }
`;

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
  const [t_cards, update_t_cards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3001/api/ongoing-events")
      .then((res) => {
        if (res.ok) {
          console.log(res);
          return res.json();
        }
      })
      .then((result) => {
        update_t_cards(result);
        console.log(result);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <AnimationRevealPage>
        <Header />
        <Container>
          <Content>
            <HeadingInfoContainer>
              <HeadingTitle>Ongoing Events</HeadingTitle>
              <HeadingDescription>
                Some amazing events that are going on.
              </HeadingDescription>
            </HeadingInfoContainer>
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
              {(t_cards === undefined || t_cards.length === 0) && (
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
                        </div>
                      </Details>
                    </Card>
                  </Column>
                ))}
            </ThreeColumn>
          </Content>
          <DecoratorBlob1 />
          <DecoratorBlob2 />
        </Container>
        <Footer />
      </AnimationRevealPage>
    </>
  );
};
