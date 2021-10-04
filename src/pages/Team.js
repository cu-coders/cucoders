import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/footers.js";

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
  9
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
  heading = "Meet These Fine Folks.",
  subheading = "Our Team",
  description = "None of us, including me, ever do great things. But we can all do small things, with great love, and together we can do something wonderful.",
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
    /*{
      imageSrc: "https://images.unsplash.com/photo-1627760676118-c7e1e9ef23ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80",
      position: "President",
      name: "Jahanvi Sharma",
      links: [
        {
          url: "http://jahanvisharma.ml/",
          icon: InstagramIcon,
        },
        {
          url: "https://www.linkedin.com/in/jahanvi-sharma/",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com/jahanvisharma-dotcom",
          icon: GithubIcon,
        },
      ],
    },
    /*{
      imageSrc: "https://images.unsplash.com/photo-1599999384704-1d7b947bee0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=100.95&w=512&h=512&q=80",
      position: "Overall Coordinator",
      name: "Anustup Mukherjee",
      links: [
        {
          url: "#",
          icon: InstagramIcon,
        },
        {
          url: "#",
          icon: LinkedinIcon,
        },
        {
          url: "#",
          icon: GithubIcon,
        },
      ],
    },
    /*{
      imageSrc: "https://images.unsplash.com/photo-1600097873961-12154219b396?ixlib=rb-1.2.1&auto=format&fit=crop&fit=facearea&facepad=100.95&w=512&h=512&q=80",
      position: "Program Head",
      name: "Itashi Pathria",
      links: [
        {
          url: "#",
          icon: InstagramIcon,
        },
        {
          url: "https://www.linkedin.com/in/itashi-pathria-9060761b2/",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com/Itashi1903",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1629888689232-21d9886b8442?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=825&q=80",
      position: "Event Lead",
      name: "Shubham Kumar Singh",
      links: [
        {
          url: "https://shubhamsingh.ml/",
          icon: InstagramIcon,
        },
        {
          url: "https://www.linkedin.com/in/-shubham-kumar-singh/",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com/NightWalker110",
          icon: GithubIcon,
        },
      ],
    },*/  
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
    
    /*{
      imageSrc: "https://images.unsplash.com/photo-1600000560828-90d1d926e05a?ixlib=rb-1.2.1&auto=format&fit=crop&fit=facearea&facepad=3.45&w=512&h=512&q=80",
      position: "Management Head",
      name: "Aditya Kumar",
      links: [
        {
          url: "#",
          icon: InstagramIcon,
        },
        {
          url: "https://www.linkedin.com/in/aditya-kumar-87886119b",
          icon: LinkedinIcon,
        },
        {
          url: "https://www.github.com/Adi3011",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1599999750007-7fb8cc658e91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=3.45&w=512&h=512&q=80",
      position: "Graphic Designer & Content Writer",
      name: "Gunjan Paneri",
      links: [
        {
          url: "https://www.instagram.com/_.click_it_all._/",
          icon: InstagramIcon,
        },
        {
          url: "https://www.linkedin.com/in/gunjan-paneri-4281201a1/",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com/iamgunjan",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1599999962958-9380d76f9408?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=3.45&w=512&h=512&q=80",
      position: "Front-End Developer",
      name: "Sachin Soni",
      links: [
        {
          url: "https://www.instagram.com/sin.uuuu/",
          icon: InstagramIcon,
        },
        {
          url: "https://www.linkedin.com/in/sachin-soni-49447b193",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com/sinu93065",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1599999251979-7f2d12a9dbb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=3.45&w=512&h=512&q=80",
      position: "Front-End Lead",
      name: "Kartik Malik",
      links: [
        {
          url: "#",
          icon: InstagramIcon,
        },
        {
          url: "https://www.linkedin.com/in/kartik-malik-76263117a",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com/Kartikmalik271",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1608997061316-4f2ec5db2451?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&fit=facearea&facepad=3.45&w=512&h=512&q=80",
      position: "Problem Setter",
      name: "Saksham Sharma",
      links: [
        {
          url: "#",
          icon: InstagramIcon,
        },
        {
          url: "https://www.linkedin.com/in/ssaksham",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com/ssaksham",
          icon: GithubIcon,
        },
      ],
    }  */  
  ]
}) => {
  return (
  	<AnimationRevealPage>
  	<Header />
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          {heading && <Heading>{heading}</Heading> }
          {description && <Description>{description}</Description> }
        </HeadingContainer>
        <Cards>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <CardContent>
                <span className="position">{card.position}</span>
                <span className="name">{card.name}</span>
                <CardLinks>
                  {card.links.map((link, linkIndex) => (
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
