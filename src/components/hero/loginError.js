import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import { useAuth0 } from "@auth0/auth0-react";

import Header, {
  NavLink,
  NavLinks,
  PrimaryLink as PrimaryLinkBase,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from "../headers/light.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const PrimaryLink = tw(
  PrimaryLinkBase
)`rounded-full px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
  background-image: url("https://images.unsplash.com/photo-1505863246712-ca0bb90f5bde?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-75`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

export default () => {
  const { loginWithRedirect } = useAuth0();
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="home">Home</NavLink>
      <NavLink href="about">About</NavLink>
      <NavLink href="team">Our Team</NavLink>
      <NavLink href="member">Membership</NavLink>
    </NavLinks>,
  ];

  return (
    <AnimationRevealPage>
      <Container>
        <OpacityOverlay />
        <HeroContainer>
          <StyledHeader links={navLinks} />
          <Content>
            <Heading>
              Oops, You're not authorized to access this page.
              <br />
              <span>Please login to continue.</span>
            </Heading>
            <PrimaryLink onClick={() => loginWithRedirect()}>LogIn</PrimaryLink>
          </Content>
        </HeroContainer>
      </Container>
    </AnimationRevealPage>
  );
};
