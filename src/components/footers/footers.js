import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {Container as ContainerBase } from "components/misc/Layouts.js"
import logo from "../../images/logo.png";
import { ReactComponent as InstagramIcon } from "../../images/instagram.svg";
import { ReactComponent as GithubIcon } from "../../images/github-icon.svg";
import { ReactComponent as LinkedinIcon } from "../../images/linkedin-icon.svg";


const Container = tw(ContainerBase)`bg-gray-200 -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-32`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`
const Link = tw.a`border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block p-2 rounded-full bg-orange-300 text-gray-100 hover:bg-primary-500 transition duration-300 mr-4`}
  svg {
    ${tw`w-4 h-4`}
  }
`;
const showCurrentYear = new Date().getFullYear();
const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`
export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={logo} />
            <LogoText>CU-Coders</LogoText>
          </LogoContainer>
          <LinksContainer>
            <Link href="/">Home</Link>
            <Link href="About">About</Link>
            <Link href="/Contact">Contact Us</Link>
            <Link href="/Team">Team</Link>
            <Link href="/Careers">Careers</Link>
            <Link href="/Privacy">Privacy Policy</Link>
            <Link href="/Terms">Terms & Conditions</Link>
          </LinksContainer>
          <SocialLinksContainer>
            <SocialLink href="https://www.instagram.com/cu.coders">
              <InstagramIcon />
            </SocialLink>
            <SocialLink href="https://github.com/CSoC-2020">
              <GithubIcon />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/company/code-chef-cu-coders">
              <LinkedinIcon />
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText>
            &copy; Copyright 2019 - {showCurrentYear}, CU-Coders. All Rights Reserved.
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
