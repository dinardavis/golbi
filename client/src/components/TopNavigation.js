"use client";

import React, { useState, useEffect } from 'react';

export default function TopNavigation() {
  const [showModal, setShowModal] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleBillingRedirect = () => {
    window.location.href = 'https://billing.stripe.com/p/login/test_bJebJ3ezL8wd4nD22j2cg00';
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto'; // Restore on unmount
    };
  }, [showModal]);


  const handlePauseSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIsSubmitting(false);
      setSuccess(true);
      setEmail("");

      // Automatically close modal after 2 seconds
      setTimeout(() => {
        setShowModal(false);
        setShowEmailForm(false);
        setSuccess(false);
      }, 3000);
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setShowModal(false);
    setShowEmailForm(false);
    setEmail("");
    setError("");
    setIsSubmitting(false);
    setSuccess(false);
  };

  return (
    <div className='top-nav-container'>
        <a href="#pricing" className="top-nav-btns">
            See Pricing
          </a>
          <a href="https://calendly.com/golbi/30min" target="_blank" className="top-nav-btns">
            Book a call
          </a>
      <div className="login-btn">
        <button onClick={() => setShowModal(true)} className="login-button-pushable">
          <span className="login-button-shadow"></span>
          <span className="login-button-accent-edge"></span>
          <span className="login-button-accent-front text">Manage Account</span>
        </button>
      </div>

      {showModal && (
        <div className="modal-backdrop">
          <div className="modal">
            <div className='modal-content'>
            <button className="modal-close-button" onClick={handleClose}>&times;</button>

            {!success && (
              <h2>Manage Your Subscription</h2>
            )}

            {!success && (
              <>
                <button className='modal-btns' onClick={handleBillingRedirect}>Go to Billing Portal</button>

                <button className='modal-btns' onClick={() => setShowEmailForm((prev) => !prev)}>
                  {showEmailForm ? 'Cancel Pause Request' : 'Pause Subscription'}
                </button>
              </>
            )}

            {showEmailForm && !success && (
              <form onSubmit={handlePauseSubmit} className="pause-form">
                  <input
                    type="email"
                    placeholder='Enter Account Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                {error && <div className="submit-error">{error}</div>}
                <button className="submit-pause-btn" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit Pause Request'}
                </button>
              </form>
            )}

            {success && (
              <div className="success-message">
                Your pause request has been submitted!
              </div>
            )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
