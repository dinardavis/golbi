import React from "react";

export default function CaseStudyFlag({ text }) {
  if (!text) return null;
  return (
    <div className="case-study-flag-wrap" aria-hidden="true">
      <div className="case-study-flag">{text}</div>
    </div>
  );
}

