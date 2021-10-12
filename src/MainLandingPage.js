import Partner from "components/cta/partner.js";
import FAQs from "components/faqs/faq.js";
import Features from "components/features/features.js";
import MainFeature2 from "components/features/featuresWithStats.js";
import MainFeature from "components/features/TwoColWithButton.js";
import Footer from "components/footers/footers.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Testimonial from "components/testimonials/testimonials.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import chefIconImageSrc from "images/chef-icon.svg";
import shopIconImageSrc from "images/shop-icon.svg";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line
import tw from "twin.macro";

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={
          <>
            CodeChef <HighlightedText>CU Chapter</HighlightedText>
          </>
        }
        description="Welcome to the official site of CodeChef CU Chapter. Get ready to become a better coder and learn from the best. There's definitely something for you here..."
        imageSrc="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Learn More"
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
            Here at CodeChef CU Chapter, we believe in collaboration. We believe
            that it is from being together that we get the best versions of
            ourselves. We believe each individual is of equal and atmost
            importance. And most importantly, we believe in you to make great
            progress with support from your very own College Chapter.
            <br />
            <br />
            Here at CodeChef CU Chapter, you are a stakeholder of all happening
            around you. You are not just any member. You are important to us.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="See What's Happening"
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
            description:
              "To encompass the best developer and instill the problem solving abilities in a large scale community",
          },
          {
            imageSrc: chefIconImageSrc,
            title: "Vision",
            description:
              "To give opportunities to new and budding developers through real world exposure and a chance to learn from the best.",
          },
          {
            imageSrc: celebrationIconImageSrc,
            title: "Values",
            description:
              "To keep our members at the centre of our work and get the best out of you, hence, creating an impeccable coding environment.",
          },
        ]}
        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />
      <MainFeature2
        subheading={<Subheading>Years of Trust and Integrity</Subheading>}
        heading={
          <>
            Why <HighlightedText>Choose Us ?</HighlightedText>
          </>
        }
        statistics={[
          {
            key: "Events",
            value: "20+",
          },
          {
            key: "Members",
            value: "500+",
          },
          {
            key: "Workshops",
            value: "10+",
          },
        ]}
        primaryButtonText="Join the Team!"
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
        heading={
          <>
            Members <HighlightedText>Love Us.</HighlightedText>
          </>
        }
      />
      <FAQs />
      <Footer />
    </AnimationRevealPage>
  );
};
