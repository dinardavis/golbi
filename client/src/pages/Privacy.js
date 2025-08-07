import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import mainLogo from "../../src/assets/imgs/golbi_logo.png";


export default function Privacy() {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  return (
  <div className='legal-page-container'> 
    <Link to="/" className="legal-logo-link">
      <div className="legal-logo-container">
        <img className="legal-logo" src={mainLogo} alt="Golbi Logo" />
        <div className="legal-logo-arch-right"></div>
        <div className="legal-logo-arch-left"></div>
      </div>
    </Link> 
    <div className="privacy-container">
      <button onClick={() => navigate(-1)} className="back-button">
      <IoIosArrowBack className='back-button-icon'/>Back
      </button>

        <h1 className='legal-header'>Privacy Policy</h1>
        <p className='legal-last-updated'>
          <strong>Last Updated:</strong> January 1, {currentYear}
        </p>

      <section>
        <h2>1. Information We Collect</h2>
        <p>
          Golbi may collect personal information such as your name, email address, and payment details when you interact with our site or services.
        </p>
      </section>

      <section>
        <h2>2. How We Use Information</h2>
        <p>
          We use collected information to provide services, process payments, communicate with you, and improve our platform. We do not sell or rent your personal data.
        </p>
      </section>

      <section>
        <h2>3. Data Sharing</h2>
        <p>
          Your data may be shared with third-party tools used for analytics, payment processing, or email communications. These providers are obligated to protect your information.
        </p>
      </section>

      <section>
        <h2>4. Cookies and Tracking</h2>
        <p>
          Our website uses cookies and similar tracking technologies to enhance user experience and gather analytics. You may disable cookies in your browser settings.
        </p>
      </section>

      <section>
        <h2>5. International Users</h2>
        <p>
          If you are accessing our site from outside the United States, be aware that your data may be transferred and stored on servers in the U.S.
        </p>
      </section>

      <section>
        <h2>6. Data Security</h2>
        <p>
          Golbi takes reasonable steps to secure your personal information but cannot guarantee absolute security. Use of the internet is at your own risk.
        </p>
      </section>

      <section>
        <h2>7. Children’s Privacy</h2>
        <p>
          Golbi does not knowingly collect data from individuals under 13. If we learn that we have received data from a child, we will delete it immediately.
        </p>
      </section>

      <section>
        <h2>8. Your Rights</h2>
        <p>
          You may request access to, correction of, or deletion of your personal information by contacting us at <a  
            href="mailto:support@golbi.co?subject=Greetings%20Golbi%20support!%20I%20have%20a%20question."
            target="_blank"
            rel="noopener noreferrer"
            className="legal-link">
            support@golbi.co
          </a>.
        </p>
      </section>

      <section>
        <h2>9. Updates to This Policy</h2>
        <p>
          We may update this Privacy Policy periodically. The latest version will always be posted on our website.
        </p>
      </section>

      <section>
        <h2>10. Contact</h2>
        <p>
          For any questions about our privacy practices, please reach out to <a  
            href="mailto:support@golbi.co?subject=Greetings%20Golbi%20support!%20I%20have%20a%20question."
            target="_blank"
            rel="noopener noreferrer"
            className="legal-link">
            support@golbi.co
          </a>
        .</p>
      </section>
      <button onClick={() => navigate(-1)} className="back-button">
      <IoIosArrowBack className='back-button-icon'/>Back
      </button>
    </div>

    <div className="footer-copyright">
      Copyright &copy; {new Date().getFullYear()} Golbi LLC. All rights reserved.
        </div>
  </div>
  )
};
