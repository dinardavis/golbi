import React from "react";
import Navbar from "./Navbar";
import Intro from "./Intro";
import Benefits from "./Benefits";
import Work from "./Work";
import Pricing from "./Pricing";
import Faqs from "./Faqs";
import Footer from "./Footer";
import ServicesTicker from "./ServicesTicker";
import TopNavigation from "./TopNavigation";
import Steps from "./Steps";

export default function Home() {
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const scrollTo = params.get("scrollTo");
    if (scrollTo) {
      const el = document.getElementById(scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <>
      <Navbar />
      <TopNavigation />
      <Intro />
      <ServicesTicker />
      <Steps />
      <Benefits />
      <Work />
      <Pricing />
      <Faqs />
      <Footer />
    </>
  );
}
