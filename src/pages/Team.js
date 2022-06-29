import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/footers.js";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import { useEffect } from "react";
import { useState } from "react";

import styled from "styled-components";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings";
import { SectionDescription } from "components/misc/Typography";
import { ReactComponent as InstagramIcon } from "images/instagram.svg";
import { ReactComponent as LinkedinIcon } from "images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "images/github-icon.svg";
const HeadingContainer = tw.div``;
const Heading = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`mx-auto text-center`;

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`;
const Card = tw.div`mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center`;
const CardImage = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`w-64 h-64 bg-contain bg-center rounded`}
`;
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-primary-500`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-900`}
  }
`;

const CardLinks = styled.div`
  ${tw`mt-6 flex`}
  .link {
    ${tw`mr-8 last:mr-0 text-gray-400 hocus:text-primary-500 transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`;

export default ({
  isLoggedIn,
  heading = "Meet These Fine Folks.",
  subheading = "Our Team",
  description = "It is impossible to do great things alone. For doing something big, one needs a team where each individual is doing what he's best at. Here's our strong team, working to get you all what we promise.",
}) => {
  const [t_cards, update_t_cards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3001/api/team")
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
    <AnimationRevealPage>
      <Header isLoggedIn={isLoggedIn} />
      <Container>
        <ContentWithPaddingXl>
          <HeadingContainer>
            {subheading && <Subheading>{subheading}</Subheading>}
            {heading && <Heading>{heading}</Heading>}
            {description && <Description>{description}</Description>}
          </HeadingContainer>

          <Cards>
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
                Team Coming Soon!!
              </div>
            )}
            {t_cards !== undefined &&
              t_cards.map((member, index) => (
                <Card key={index}>
                  <CardImage imageSrc={member.profileImage} />
                  <CardContent>
                    <span className="fullname">{member.fullname}</span>
                    <span className="role">{member.role}</span>
                    <CardLinks>
                      <a key={index} className="link" href={member.instagram}>
                        <InstagramIcon
                          style={{
                            width: "20px",
                            height: "20px",
                          }}
                        ></InstagramIcon>
                      </a>
                      <a key={index} className="link" href={member.linkedin}>
                        <LinkedinIcon
                          style={{
                            width: "20px",
                            height: "20px",
                          }}
                        ></LinkedinIcon>
                      </a>
                      <a key={index} className="link" href={member.github}>
                        <GithubIcon
                          style={{
                            width: "20px",
                            height: "20px",
                          }}
                        ></GithubIcon>
                      </a>
                    </CardLinks>
                  </CardContent>
                </Card>
              ))}
          </Cards>
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};
