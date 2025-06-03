import React, { useState } from "react";
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
import AccountManagementModal from "./AccountManagementModal";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

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

  React.useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  return (
    <>
      <Navbar
        showModal={showModal}
        setShowModal={setShowModal}
        showEmailForm={showEmailForm}
        setShowEmailForm={setShowEmailForm}
        email={email}
        setEmail={setEmail}
        error={error}
        setError={setError}
        isSubmitting={isSubmitting}
        setIsSubmitting={setIsSubmitting}
        success={success}
        setSuccess={setSuccess}
      />
      <AccountManagementModal
        showModal={showModal}
        setShowModal={setShowModal}
        showEmailForm={showEmailForm}
        setShowEmailForm={setShowEmailForm}
        email={email}
        setEmail={setEmail}
        error={error}
        setError={setError}
        isSubmitting={isSubmitting}
        setIsSubmitting={setIsSubmitting}
        success={success}
        setSuccess={setSuccess}
      />
      <TopNavigation
        showModal={showModal}
        setShowModal={setShowModal}
        showEmailForm={showEmailForm}
        setShowEmailForm={setShowEmailForm}
        email={email}
        setEmail={setEmail}
        error={error}
        setError={setError}
        isSubmitting={isSubmitting}
        setIsSubmitting={setIsSubmitting}
        success={success}
        setSuccess={setSuccess}
      />
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
