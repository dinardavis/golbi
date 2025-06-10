import React, { useState } from "react";
import { MdCheck, MdArrowForward } from "react-icons/md";
import Navbar from "../components/Navbar";
import AccountManagementModal from "../components/AccountManagementModal";
import TopNavigation from "../components/TopNavigation";

export default function StarterSite() {
  const [showModal, setShowModal] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

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
      <div className="starter-site-container">
        <section className="intro-section">
          <div className="intro-content">
            <h1 className="intro-headline">
              <span>Golbi</span> Can Launch Your New Website in{" "}
              <span>7 Days</span>!
            </h1>
            <p className="intro-subhead">
              A done-for-you, conversion-optimized site tailored to your
              business—designed, built, and ready to grow.
            </p>
            <p className="intro-subhead-secondary">
              For service-based businesses, coaches, and creators who need a
              polished, modern website that just works—fast.
            </p>
          </div>
        </section>

        <section className="features-section">
          <h2 className="section-header">What's Included</h2>
          <div className="features-grid">
            <div className="feature-item">
              <MdCheck className="feature-icon" />
              <p>
                Fully custom 3–5 page website (Home, About, Services, Contact,
                +1 optional)
              </p>
            </div>
            <div className="feature-item">
              <MdCheck className="feature-icon" />
              <p>Mobile-responsive design</p>
            </div>
            <div className="feature-item">
              <MdCheck className="feature-icon" />
              <p>Basic SEO optimization</p>
            </div>
            <div className="feature-item">
              <MdCheck className="feature-icon" />
              <p>Simple lead capture/contact form</p>
            </div>
            <div className="feature-item">
              <MdCheck className="feature-icon" />
              <p>One revision round included</p>
            </div>
            <div className="feature-item">
              <MdCheck className="feature-icon" />
              <p>7-day delivery from content submission</p>
            </div>
          </div>
        </section>

        <section className="pricing-section">
          <div className="pricing-content">
            <div className="pricing-option starter-pricing">
              <div className="pricing-duration">Starter</div>
              <div className="pricing-price">
                $950 <span>USD</span>
              </div>
              <p className="pricing-subterm">or 50% deposit upfront</p>
              <p className="pricing-desc">
                Need a payment plan or ongoing support? Ask about our monthly
                maintenance bundles.
              </p>
              <button className="button-pushable">
                <span className="button-shadow"></span>
                <span className="button-accent-edge"></span>
                <span className="button-accent-front">Book a Call</span>
              </button>
            </div>
          </div>
        </section>

        <section className="benefits-section">
          <h2 className="section-header">
            Why Choose <span className="golbi-name">Golbi</span>?
          </h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="icon-container">
                <MdArrowForward className="benefit-icon" />
              </div>
              <h3>Fast turnaround, without cutting corners</h3>
            </div>
            <div className="benefit-item">
              <div className="icon-container">
                <MdArrowForward className="benefit-icon" />
              </div>
              <h3>Strategy-first design (not just "pretty")</h3>
            </div>
            <div className="benefit-item">
              <div className="icon-container">
                <MdArrowForward className="benefit-icon" />
              </div>
              <h3>
                Built with scalable tools: WordPress + Elementor or Webflow
              </h3>
            </div>
            <div className="benefit-item">
              <div className="icon-container">
                <MdArrowForward className="benefit-icon" />
              </div>
              <h3>Done by a senior developer, not a Fiverr random</h3>
            </div>
          </div>
        </section>

        <section className="process-section">
          <h2 className="section-header">How It Works</h2>
          <div className="process-grid">
            <div className="process-item">
              <div className="process-number">1</div>
              <h3>Discovery Call</h3>
              <p>(15 mins)</p>
            </div>
            <div className="process-item">
              <div className="process-number">2</div>
              <h3>You Provide Content</h3>
              <p>(we'll guide you)</p>
            </div>
            <div className="process-item">
              <div className="process-number">3</div>
              <h3>Design & Build</h3>
              <p>(within 5 business days)</p>
            </div>
            <div className="process-item">
              <div className="process-number">4</div>
              <h3>Review & Launch</h3>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2 className="section-header">Ready to Start?</h2>
          <div className="cta-buttons">
            <button className="button-pushable">
              <span className="button-shadow"></span>
              <span className="button-accent-edge"></span>
              <span className="button-accent-front">Book a Call</span>
            </button>
            <button className="button-pushable">
              <span className="button-shadow"></span>
              <span className="button-dark-edge"></span>
              <span className="button-dark-front">Secure Your Spot</span>
            </button>
          </div>
          <p className="urgency-text">
            Only taking 3 new projects this month to ensure fast turnaround.
          </p>
          <div className="radar"></div>
        </section>
      </div>
    </>
  );
}
