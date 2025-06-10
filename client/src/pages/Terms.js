import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import mainLogo from "../../src/assets/imgs/golbi_logo.png";



export default function Terms() {
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
      <div className="terms-container">
        <button onClick={() => navigate(-1)} className="back-button">
        <IoIosArrowBack className='back-button-icon'/>Back
        </button>
        <h1 className='legal-header'>Terms & Conditions</h1>
        <p className='legal-last-updated'>
          <strong>Last Updated:</strong> January 1, {currentYear}
        </p>

        <section>
          <h2>1. introduction</h2>
          <p>
            Welcome to Golbi. These Terms & Conditions ("Terms") govern your access to and use of our website and services. By accessing Golbi’s site or engaging our services, you agree to be bound by these Terms. If you do not agree, you must cease use immediately.
          </p>
        </section>

        <section>
          <h2>2. Intellectual Property</h2>
          <p>
            All assets on Golbi's website, including code, design elements, graphics, and brand marks, are protected under intellectual property laws and are owned or licensed by Golbi. Use of any content without explicit written permission is strictly prohibited.
          </p>
        </section>

        <section>
          <h2>3. Ownership of Deliverables</h2>
          <p>
            All original design work created for clients is owned by the client once payment is completed in full. Golbi retains no claim to these designs. However, Golbi reserves the right to display completed work in portfolios or marketing channels unless a non-disclosure agreement (NDA) is in place.
          </p>
        </section>

        <section>
          <h2>4. Third-Party Materials</h2>
          <p>
            If your project includes third-party assets such as fonts, stock images, or plugins that require commercial licenses, you are responsible for acquiring those licenses. Golbi will notify you of such requirements when applicable.
          </p>
        </section>

        <section>
          <h2>5. Acceptable Use</h2>
          <p>
            You agree not to misuse the Golbi website or services. This includes actions such as data scraping, unauthorized framing, hacking, uploading malicious code, or using the service to compete with Golbi.
          </p>
        </section>

        <section>
          <h2>6. Client Content</h2>
          <p>
            Any materials you provide to Golbi for use in a project must be owned by you or licensed appropriately. You assume full responsibility for ensuring your content does not violate third-party rights.
          </p>
        </section>

        <section>
          <h2>7. Refund Policy</h2>
          <p>
            Refunds are not guaranteed and are handled case by case. If a refund is issued, Golbi reserves the right to retain a service fee and revoke your rights to use any work produced up to that point.
          </p>
        </section>

        <section>
          <h2>8. Service Availability</h2>
          <p>
            Golbi makes no guarantees regarding uninterrupted access to the website or services. Technical issues, maintenance, or external factors may affect availability.
          </p>
        </section>

        <section>
          <h2>9. Governing Law</h2>
          <p>
            These Terms are governed by and interpreted according to the laws of the State of California. All disputes must be resolved in a court located in that state.
          </p>
        </section>

        <section>
          <h2>10. Limitation of Liability</h2>
          <p>
            Golbi is not liable for indirect or consequential damages, including loss of profit or data. By using the site, you agree to indemnify Golbi against legal claims related to your use of the service.
          </p>
        </section>

        <section>
          <h2>11. Changes to Terms</h2>
          <p>
            Golbi may update these Terms at any time. Changes are effective immediately upon posting. Continued use of the site or services implies acceptance of the revised Terms.
          </p>
        </section>

        <section>
          <h2>12. Contact</h2>
          <p>
            For any questions regarding these Terms, please contact us at <a  
            href="mailto:support@golbi.co?subject=Greetings%20Golbi%20support!%20I%20have%20a%20question."
            target="_blank"
            rel="noopener noreferrer"
            className="legal-link">
            support@golbi.co
          </a>.
          </p>
        </section>
          <button onClick={() => navigate(-1)} className="back-button">
          <IoIosArrowBack className='back-button-icon'/>Back
          </button>
      </div>
    </div>
  )
};

