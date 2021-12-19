import React from 'react';
import { useParams } from 'react-router-dom';
import AnimationRevealPage from "helpers/AnimationRevealPage.js"

import AboutUsPage from "pages/AboutUs.js";

import TermsOfServicePage from "pages/TermsOfService.js";
import PrivacyPolicyPage from "pages/PrivacyPolicy.js";
import IllustrationAndVideoHero from "components/hero/TwoColumnWithVideo.js";

import TwoColWithButtonFeatures from "components/features/TwoColWithButton.js";
import Features from "components/features/features.js";
import WithStatsAndImage2Features from "components/features/featuresWithStats.js";
import AboutJob from "components/features/aboutJob.js";

import Company from "components/job/company.js";
import JobSwitcher from "components/job/jobSwitcher.js";
import JobSwitcher2 from "components/job/jobSwitcher-2.js";
import JobSwitcher3 from "components/job/jobSwitcher-3.js";
import ComingJob from "components/job/comingsoon.js";

import testimonials from "components/testimonials/testimonials.js";
import Partner from "components/cta/partner.js";
import FAQs from "components/faqs/faq.js";

import TwoColContactUsFullForm from "components/forms/contact.js";

import ComingSoon from "components/cta/comingsoon.js";

import Footer from "components/footers/footers.js";

import Event from "components/events/event.js";
import Past from "components/events/past.js";
import Present from "components/events/present.js";
import Upcoming from "components/events/upcoming.js";
import Applyback from "components/job/openings/backend/apply.js";
import Applyeditorial from "components/job/openings/editorialist/apply.js";
import Applyfront from "components/job/openings/frontend/apply.js";
import Applyfull from "components/job/apply.js";
import Applygraphic from "components/job/openings/graphic/apply.js";
import Applymotion from "components/job/openings/motion/apply.js";
import Applysetter from "components/job/openings/setter/apply.js";
import Applytester from "components/job/openings/tester/apply.js";
import ApplyUi from "components/job/openings/uiux/apply.js";

import Projects from "components/projects/project.js";
import Resources from "components/resources/resources.js";
import Comingsoon from "components/resources/comingsoon.js";
import Quiz from "components/events/quiz/quiz.js";

import AIIndex from "components/resources/ai/index.js";
import AlgoIndex from "components/resources/algorithms/index.js";
import CPIndex from "components/resources/cp/index.js";
import HackingIndex from "components/resources/hacking/index.js";
import MobileIndex from "components/resources/mobile/index.js";
import OpenIndex from "components/resources/open/index.js";
import WebIndex from "components/resources/web/index.js";
import LanguageIndex from "components/resources/language/index.js";
import DatabaseIndex from "components/resources/database/index.js";
import VersionControl from "components/resources/version_control/index.js";

import ApplyProject from "components/projects/applyproject.js";

export const components = {

  innerPages: {
    AboutUsPage: {
      component: AboutUsPage,
      url: `/components/innerPages/AboutUsPage`,
    },
    PrivacyPolicyPage: {
      component: PrivacyPolicyPage,
      url: `/components/innerPages/PrivacyPolicyPage`,
    },
    TermsOfServicePage: {
      component: TermsOfServicePage,
      url: `/components/innerPages/TermsOfServicePage`,
    },
  },

  blocks: {
    Hero: {
      type: "Hero Section",
      elements: {
        IllustrationAndVideo: {
          name: "With Image Illustration and Video",
          component: IllustrationAndVideoHero,
          url: "/components/blocks/Hero/IllustrationAndVideo",
        },
      },
    },
    Features: {
      type: "Features Section",
      elements: {
         TwoColWithButton: {
          name: "Two Column With Image and Action Button",
          component: TwoColWithButtonFeatures,
          url: "/components/blocks/Features/TwoColWithButton",
        },
        Features: {
          name: "Three Column Simple",
          component: Features,
          url: "/components/blocks/Features/features",
        },
        WithStatsAndImage2: {
          name: "Stats With Image 2",
          component: WithStatsAndImage2Features,
          url: "/components/blocks/Features/WithStatsAndImage2",
        },
        Upcoming: {
          name: "Upcoming",
          component: Upcoming,
          url: "/components/blocks/Events/upcoming.js",
        },
        Event: {
          name: "Event",
          component: Event,
          url: "/components/events/event.js",
        },
        Quiz: {
          name: "Quiz",
          component: Quiz,
          url: "/components/quiz/quiz.js",
        },
        Projects: {
          name: "Projects",
          component: Projects,
          url: "/components/projects/project.js",
        },
        Comingsoon: {
          name: "Comingsoon",
          component: Comingsoon,
          url: "/components/resources/Comingsoon.js",
        },
        Resources: {
          name: "Resources",
          component: Resources,
          url: "/components/resources/resources.js",
        },
        ApplyProject: {
          name: "ApplyProject",
          component: ApplyProject,
          url: "/components/projects/applyproject.js",
        },
        AboutJob:{
          name: "Job",
          component: AboutJob,
          url: "components/blocks/Features/AboutJob",
        },
        AIIndex:{
          name: "AIIndex",
          component: AIIndex,
          url: "components/blocks/resources/ai/index.js",
        },
        AlgoIndex:{
          name: "AlgoIndex",
          component: AlgoIndex,
          url: "components/blocks/resources/algorithms/index.js",
        },
        CPIndex:{
          name: "CPIndex",
          component: CPIndex,
          url: "components/blocks/resources/cp/index.js",
        },
        MobileIndex:{
          name: "MobileIndex",
          component: MobileIndex,
          url: "components/blocks/resources/mobile/index.js",
        },
        HackingIndex:{
          name: "HackingIndex",
          component: HackingIndex,
          url: "components/blocks/resources/hacking/index.js",
        },
        LanguageIndex:{
          name: "LanguageIndex",
          component: LanguageIndex,
          url: "components/blocks/resources/language/index.js",
        },
        WebIndex:{
          name: "WebIndex",
          component: WebIndex,
          url: "components/blocks/resources/web/index.js",
        },
        DatabaseIndex:{
          name: "DatabaseIndex",
          component: DatabaseIndex,
          url: "components/blocks/resources/database/index.js",
        },
        VersionControl:{
          name: "VersionControl",
          component: VersionControl,
          url: "components/blocks/resources/control_version/index.js",
        },
        OpenIndex:{
          name: "OpenIndex",
          component: OpenIndex,
          url: "components/blocks/resources/open/index.js",
        },
      }
    },
    job: {
      type: "Job",
      elements: {
        Team: {
          name: "company",
          component: Company,
          url: "/components/blocks/Job/company.js",
        },
        JobSwitcher: {
          name: "Job Switching",
          component: JobSwitcher,
          url: "components/blocks/Job/JobSwitcher.js",
        },
        JobSwitcher2: {
          name: "Job Switching",
          component: JobSwitcher2,
          url: "components/blocks/Job/JobSwitcher2.js",
        },
        JobSwitcher3: {
          name: "Job Switching",
          component: JobSwitcher3,
          url: "components/blocks/Job/JobSwitcher3.js",
        },
        ComingJob: {
          name: "Coming-Job",
          component: ComingJob,
          url: "components/blocks/Job/comingsoon.js",
        },
        Applyback: {
          name: "Applyback",
          component: Applyback,
          url: "components/blocks/Job/openings/backend/apply.js",
        },
        Applyeditorial: {
          name: "Applyeditorial",
          component: Applyeditorial,
          url: "components/blocks/Job/openings/editorialist/apply.js",
        },
        Applyfront: {
          name: "Applyfront",
          component: Applyfront,
          url: "components/blocks/Job/openings/frontend/apply.js",
        },
        Applyfull: {
          name: "Applyfull",
          component: Applyfull,
          url: "components/blocks/Job/openings/fullstack/apply.js",
        },
        Applygraphic: {
          name: "Applygraphic",
          component: Applygraphic,
          url: "components/blocks/Job/openings/graphic/apply.js",
        },
        Applymotion: {
          name: "Applymotion",
          component: Applymotion,
          url: "components/blocks/Job/openings/motion/apply.js",
        },
        Applysetter: {
          name: "Applysetter",
          component: Applysetter,
          url: "components/blocks/Job/openings/setter/apply.js",
        },
        Applytester: {
          name: "Applytester",
          component: Applytester,
          url: "components/blocks/Job/openings/tester/apply.js",
        },
        ApplyUi: {
          name: "ApplyUi",
          component: ApplyUi,
          url: "components/blocks/Job/apply/applyUi.js",
        }
      }
    },
    Event: {
      type: "Event",
      elements: {
        Past: {
          name: "past",
          component: Past,
          url: "components/blocks/Event/past.js",
        }
      },
      Present: {
          name: "Simple Three Column With Image",
          component: Present,
          url: "/components/blocks/Blog/presentEvent.js",
        },
      },
    },

    Blog: {
    Testimonial: {
      type: "Testimonial Section",
      elements: {
        testimonials: {
          name: "Two Column With Image And Profile Picture Review",
          component: testimonials,
          url: "/components/blocks/Testimonial/testimonialsw",
        },
      }
    },

    FAQS: {
      type: "FAQs Section",
      elements: {
        SingleCol: {
          name: "Single Column",
          component: FAQs,
          url: "/components/blocks/FAQs/faq",
        },
      }
    },

    Form: {
      type: "Forms Section",
      elements: {
        TwoColContactUsFull: {
          name: "Two Column Contact Us - Full Form",
          component: TwoColContactUsFullForm,
          url: "/components/blocks/Form/TwoColContactUsFull",
        },
      }
    },

    CTA: {
      type: "CTA Section",
      elements: {
        ComingSoon: {
          name: "Coming Soon",
          component: ComingSoon,
          url: "/components/blocks/CTA/comingsoon",
        },
        Partner: {
          name: "Partner",
          component: Partner,
          url: "/components/blocks/CTA/partner",
        },
      }
    },

    Footer: {
      type: "Footers Section",
      elements: {
        Footer: {
          name: "Footer",
          component: Footer,
          url: "/components/blocks/Footers/footers",
        },
      }
    }
  }
}

export default () => {
  const { type, subtype, name } = useParams()

  try {
    let Component = null;
    if(type === "blocks" && subtype) {
      Component= components[type][subtype]["elements"][name].component
      return <AnimationRevealPage disabled>
          <Component/>
        </AnimationRevealPage>
    }
    else
      Component= components[type][name].component

    if(Component)
      return <Component/>

    throw new Error("Component Not Found")
  }
  catch (e) {
    console.log(e)
    return <div>Error: Component Not Found</div>
  }
}
