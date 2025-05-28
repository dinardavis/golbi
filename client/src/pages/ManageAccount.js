// client/src/pages/Subscribe.js
import React, { useState } from "react";

export default function ManageAccount() {
  const [showModal, setShowModal] = useState(false);
  const [supportEmail, setSupportEmail] = useState("");

  const handlePortalRedirect = () => {
    window.location.href = "https://billing.stripe.com/p/login/test_bJebJ3ezL8wd4nD22j2cg00";
  };

  const handleSupportSubmit = (e) => {
    e.preventDefault();

    // Simulate sending support request (replace with real integration if needed)
    console.log("Support request submitted for:", supportEmail);

    alert("Your request to pause your subscription has been submitted.");
    setShowModal(false);
    setSupportEmail("");
  };

  return (
    <div className="subscribe-container">
      <h1>Manage Your Subscription</h1>

      <button onClick={handlePortalRedirect}>
        Go to Billing Portal
      </button>

      <button onClick={() => setShowModal(true)}>
        Request to Pause Subscription
      </button>

      {showModal && (
        <div className="modal-backdrop">
          <div className="modal">
            <h2>Request Pause</h2>
            <form onSubmit={handleSupportSubmit}>
              <label>
                Your Email:
                <input
                  type="email"
                  value={supportEmail}
                  onChange={(e) => setSupportEmail(e.target.value)}
                  required
                />
              </label>
              <button type="submit">Send Request</button>
              <button type="button" onClick={() => setShowModal(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
