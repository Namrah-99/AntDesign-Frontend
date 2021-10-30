import React from "react";

import AppHero from "../components/home/hero";
import AppAbout from "../components/home/about";
import AppFeature from "../components/home/feature";
import AppWorks from "../components/home/works";
import AppFaq from "../components/home/faq";
import AppPricing from "../components/home/pricing";
import AppContact from "../components/home/contact";
import AppTry from "../components/home/Try";

function AppHome() {
  return (
    <div className="main">
      <AppHero />
      <AppAbout />
      <AppFeature />
      <AppWorks />
      <AppFaq />
      <AppPricing />
      <AppContact />
      <AppTry />
    </div>
  );
}

export default AppHome;
