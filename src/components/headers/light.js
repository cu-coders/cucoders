import axios from "axios";
import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import tw from "twin.macro";

import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler.js";
import logo from "../../images/logo.png";

const Header = tw.header`
  flex justify-between items-center
  max-w-screen-xl mx-auto
`;

export const NavLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
`;

/* hocus: stands for "on hover or focus"
 * hocus:bg-primary-700 will apply the bg-primary-700 class on hover or focus
 */
export const NavLink = tw.a`
  text-lg my-2 lg:text-sm lg:mx-4 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`;

export const PrimaryLink = tw(NavLink)`
  lg:mx-0
  px-8 py-3 rounded bg-primary-500 text-gray-100
  hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`;

export const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};

  img {
    ${tw`w-10 mr-3`}
  }
`;

export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between`;
export const NavToggle = tw.button`
  mn:hidden z-20 focus:outline-none hocus:text-primary-500 transition duration-300
`;
export const MobileNavLinks = motion.custom(styled.div`
  ${tw`mn:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white`}
  ${NavLinks} {
    ${tw`flex flex-col items-center`}
  }
`);

export const DesktopNavLinks = tw.nav`
  hidden mn:flex flex-1 justify-between items-center
`;

export default ({
  roundedHeaderButton = false,
  logoLink,
  links,
  className,
  collapseBreakpointClass = "mn",
  isLoggedIn,
}) => {
  /*
   * This header component accepts an optionals "links" prop that specifies the
   * links to render in the navbar. This links props should be an array of
   * "NavLinks" components which is exported from this file. Each "NavLinks"
   * component can contain any amount of "NavLink" component, also exported from
   * this file. This allows this Header to be multi column. So If you pass only
   * a single item in the array with only one NavLinks component as root, you
   * will get 2 column header. Left part will be LogoLink, and the right part
   * will be the the NavLinks component you supplied. Similarly if you pass 2
   * items in the links array, then you will get 3 columns, the left will be
   * "LogoLink", the center will be the first "NavLinks" component in the array
   * and the right will be the second "NavLinks" component in the links array.
   * You can also choose to directly modify the links here by not passing any
   * links from the parent component and changing the defaultLinks variable
   * below below. If you manipulate links here, all the styling on the links is
   * already done for you. If you pass links yourself though, you are
   * responsible for styling the links or use the helper styled components that
   * are defined here (NavLink)
   */
  // present
  const defaultLinks = [
    <NavLinks key={1}>
      <NavLink href="/Home">Home</NavLink>
      <NavLink href="/About">About</NavLink>
      <NavLink href="/team">Team</NavLink>
      <NavLink href="/events">Events</NavLink>
      <NavLink href="/projects">Projects</NavLink>
      <NavLink href="/resources">Resources</NavLink>
      <NavLink href="/careers">Careers</NavLink>
      <NavLink href="/member">Membership</NavLink>
      <NavLink href="/contact">Contact Us</NavLink>
      {!isLoggedIn && <NavLink href="/login">Login</NavLink>}
      {isLoggedIn && (
        <NavLink
          style={{ cursor: "pointer" }}
          onClick={() => {
            axios
              .request(
                "https://cuchapter-o2imc.ondigitalocean.app/auth/logout",
                {
                  withCredentials: true,
                }
              )
              .then((res) => {
                if (res.data.logout === true) {
                } else {
                }
                window.location.href = "/";
              })
              .catch((err) => {});
          }}
        >
          Logout
        </NavLink>
      )}
    </NavLinks>,
  ];

  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const collapseBreakpointCss =
    collapseBreakPointCssMap[collapseBreakpointClass];

  const defaultLogoLink = (
    <LogoLink href="https://cuchapter.tech">
      <img src={logo} alt="CU-Coders" />
      CU-Coders
    </LogoLink>
  );

  logoLink = logoLink || defaultLogoLink;
  links = links || defaultLinks;

  return (
    <Header className={className || "header-light"}>
      <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
        {logoLink}
        {links}
      </DesktopNavLinks>

      <MobileNavLinksContainer
        css={collapseBreakpointCss.mobileNavLinksContainer}
      >
        {logoLink}
        <MobileNavLinks
          initial={{ x: "150%", display: "none" }}
          animate={animation}
          css={collapseBreakpointCss.mobileNavLinks}
        >
          {links}
        </MobileNavLinks>
        <NavToggle
          onClick={toggleNavbar}
          className={showNavLinks ? "open" : "closed"}
        >
          {showNavLinks ? (
            <CloseIcon tw="w-6 h-6" />
          ) : (
            <MenuIcon tw="w-6 h-6" />
          )}
        </NavToggle>
      </MobileNavLinksContainer>
    </Header>
  );
};

/* The below code is for generating dynamic break points for navbar.
 * Using this you can specify if you want to switch
 * to the toggleable mobile navbar at "sm", "md" or "lg" or "xl" above using the collapseBreakpointClass prop
 * Its written like this because we are using macros and we can not insert dynamic variables in macros
 */

const collapseBreakPointCssMap = {
  sm: {
    mobileNavLinks: tw`sm:hidden`,
    desktopNavLinks: tw`sm:flex`,
    mobileNavLinksContainer: tw`sm:hidden`,
  },
  md: {
    mobileNavLinks: tw`md:hidden`,
    desktopNavLinks: tw`md:flex`,
    mobileNavLinksContainer: tw`md:hidden`,
  },
  lg: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`,
  },
  mn: {
    mobileNavLinks: tw`mn:hidden`,
    desktopNavLinks: tw`mn:flex`,
    mobileNavLinksContainer: tw`mn:hidden`,
  },
  xl: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`,
  },
};
