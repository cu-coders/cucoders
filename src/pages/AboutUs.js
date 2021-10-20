import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/footers.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
import Features from "components/features/features.js";
// import Features from "components/features/ThreeColWithSideImage.js";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default ({isLoggedIn}) => {
  return (
    <AnimationRevealPage>
      <Header isLoggedIn={isLoggedIn} />
      <MainFeature1
        subheading={<Subheading>About Us</Subheading>}
        heading="We are a CodeChef Campus Chapter."
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        primaryButtonUrl="https://www.codechef.com/campus_chapter/what_our_chapters_do"
      />
      <MainFeature1
        subheading={<Subheading>Our Vision</Subheading>}
        heading="To uplift all our member to becoming better Coders."
        buttonRounded={false}
        description = "Our vision is to give opportunity to new developers to the real life game changer world making them better problem solvers and hence, better coders."
        primaryButtonText="Contact Us"
        imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
        textOnLeft={false}
        primaryButtonUrl="/contact"
      />
      <Features
        subheading={<Subheading>Our Values</Subheading>}
        heading="Give++"
        description="We have a commitment to keep on giving back to the community continuously incrementally."
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "24/7 Support!",
            description: "To give without any reward, or any notice, is a special quality of its own. We always have someone eager to solve your issues anytime, anywhere."
          },
          {
            imageSrc: ShieldIconImage,
            title: "Strong Teams",
            description: "Contributions and Collaborations are our core values. We work together in a team providing you a support to lean on."
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Member Satisfaction",
            description: "A member talking about their experience with you is worth ten times that what you write or say about yourself, and our members are never unsatisfied!"
          },
        ]}
        linkText=""
      />
      <Footer />
    </AnimationRevealPage>
  );
};
