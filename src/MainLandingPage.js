import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/features.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/featuresWithStats.js";
import Testimonial from "components/testimonials/testimonials.js";
import Footer from "components/footers/footers.js";
import chefIconImageSrc from "images/chef-icon.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import shopIconImageSrc from "images/shop-icon.svg";
import FAQs from "components/faqs/faq.js";
import Partner from "components/cta/partner.js";
export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={<>CodeChef Campus Chapter<HighlightedText>CU-Coders.</HighlightedText></>}
        description="CodeChef College Chapters are the programming clubs run and maintained by the official chapter leaders and mentored by CodeChef. We aim to make learning competitive programming accessible for students across the globe."
        imageSrc="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="See More"
        primaryButtonUrl="/about"
        watchVideoButtonText="Meet The Team"
        watchVideoUrl="https://www.youtube.com/watch?v=QxN8bXAeapE&feature=youtu.be"
      />
      <MainFeature
        subheading={<Subheading>Established Since 2020</Subheading>}
        heading={
          <>
            We've been serving for
            <wbr /> <HighlightedText>over 1 year.</HighlightedText>
          </>
        }
        description={
          <Description>
            We love those whom we serve. It's through vulnerability that human beings create connections. The more vulnerable we can be with one another, the more that we'll trust one another and the more we'll be able to collaborate effectively.
            <br />
            <br />
            We don't want to push our ideas on to members, we simply want to make what they want.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="See Events"
        primaryButtonUrl="present"
        imageSrc={
          "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        }
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      <Features
        heading={
          <>
            Our <HighlightedText>Mission, Vision & Values.</HighlightedText>
          </>
        }
        cards={[
          {
            imageSrc: shopIconImageSrc,
            title: "Mission",
            description: "Our mission is to select the best coders/developers and give them further opportunity!!"
          },
          {
            imageSrc: chefIconImageSrc,
            title: "Vision",
            description: "Our vision is to give opportunity to new developers to the real life game changer world!!"
          },
          {
            imageSrc: celebrationIconImageSrc,
            title: "Values",
            description: "We have value to care you and provide you with the best coding experience that you ever had!!"
          }
        ]}

        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />
      <MainFeature2
        subheading={<Subheading>A Reputed Brand</Subheading>}
        heading={<>Why <HighlightedText>Choose Us ?</HighlightedText></>}
        statistics={[
          {
            key: "Events",
            value: "20+",
          },
          {
            key: "Members",
            value: "500+"
          },
          {
            key: "Workshops",
            value: "10+"
          }
        ]}
        primaryButtonText="Join Us"
        primaryButtonUrl="/careers"
        imageInsideDiv={false}
        imageSrc="https://images.unsplash.com/flagged/photo-1556655678-9d4812e3fbe9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
      />
      <Partner />
      <Testimonial
        subheading=""
        heading={<>Members <HighlightedText>Love Us.</HighlightedText></>}
      />
      <FAQs />
      <Footer />
    </AnimationRevealPage>
  );
}
