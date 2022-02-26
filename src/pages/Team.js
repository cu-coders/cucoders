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
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings";
import {SectionDescription} from "components/misc/Typography";
import { ReactComponent as InstagramIcon} from "images/instagram.svg";
import { ReactComponent as LinkedinIcon} from "images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "images/github-icon.svg";
const HeadingContainer = tw.div``
const Heading = tw(SectionHeading)``
const Subheading = tw(SubheadingBase)`text-center mb-3`
const Description = tw(SectionDescription)`mx-auto text-center`

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`
const Card = tw.div`mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center`
const CardImage = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`w-64 h-64 bg-contain bg-center rounded`}
`
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-primary-500`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-900`}
  }
`

const CardLinks = styled.div`
  ${tw`mt-6 flex`}
  .link {
    ${tw`mr-8 last:mr-0 text-gray-400 hocus:text-primary-500 transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`

export default ({
  isLoggedIn,
  heading = "Meet These Fine Folks.",
  subheading = "Our Team",
  description = "It is impossible to do great things alone. For doing something big, one needs a team where each individual is doing what he's best at. Here's our strong team, working to get you all what we promise.",
  cards = [
  {
      imageSrc: "https://images.unsplash.com/photo-1605808778078-b87c29cef305?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=512&h=512&q=80",
      position: "Faculty Advisor",
      name: "Dr. Vikas Wasson",
      links: [
        {
          url: "",
          icon: InstagramIcon,
        },
        {
          url: "",
          icon: LinkedinIcon,
        },
        {
          url: "",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1599997949628-019bbbe3752a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=512&h=512&q=80",
      position: "Mentor",
      name: "Ankit Raj",
      links: [
        {
          url: "https://www.instagram.com/honesthacker_",
          icon: InstagramIcon,
        },
        {
          url: "https://www.linkedin.com/in/ank1traj/",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com/ank1traj",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1603970277321-b29de3895149?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facepad=100.95&w=512&q=80",
      position: "Outreach & Media Lead",
      name: "Ishita Thapliyal",
      links: [
        {
          url: "",
          icon: InstagramIcon,
        },
        {
          url: "",
          icon: LinkedinIcon,
        },
        {
          url: "",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1627755005739-35b97866edbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      position: "Programming Lead",
      name: "Sahil Sharma",
      links: [
        {
          url: "https://www.instagram.com/_.sahilllll_._/",
          icon: InstagramIcon,
        },
        {
          url: "https://www.linkedin.com/in/sahil-sharma-07/",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com/sahil2311sharma",
          icon: GithubIcon,
        },
      ],
    }
  ]
}) => {
  const [t_cards, update_t_cards] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  console.log(t_cards)
  useEffect(() => {
    setIsLoading(true);
    fetch("https://cucoders.herokuapp.com/api/team")
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

  },[])
  return (
  	<AnimationRevealPage>
  	<Header isLoggedIn={isLoggedIn} />
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          {heading && <Heading>{heading}</Heading> }
          {description && <Description>{description}</Description> }
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
          {t_cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <CardContent>
                <span className="position">{card.position}</span>
                <span className="name">{card.name}</span>
                <CardLinks>
                  {t_card.links.map((link, linkIndex) => (
                    <a key={linkIndex} className="link" href={link.url}>
                      <link.icon className="icon" />
                    </a>
                  ))}
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
