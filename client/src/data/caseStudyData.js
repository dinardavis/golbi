// data/caseStudyData.js
import dacThumbnail from "../assets/imgs/dac_thumbnail.png";
import rochelleThumbnail from "../assets/imgs/rochelle_thumbnail.png";

const caseStudyData = [
  {
    type: "Personal Development & Coaching Platform",
    thumbnail: rochelleThumbnail,
    client: "Rochelle Ruen Coaching",
    industry: "Life Coaching & Personal Development",
    objective:
      "Create a warm, inspiring, and conversion-focused website that authentically reflects Rochelle’s coaching style and services, helping potential clients feel seen, supported, and motivated to take action.",
    deliverables: [
      "- Custom React-based front-end",
      "- Engaging, value-driven copywriting aligned with Rochelle’s voice",
      "- Clear service breakdown with easy online booking",
      "- Integrated contact and consultation request forms",
      "- Responsive design optimized for mobile and desktop",
    ],
    impact:
      "The new site captures Rochelle’s energy and authenticity, making it easy for visitors to connect with her message, explore her services, and book sessions. The clear structure, compelling visuals, and heartfelt messaging inspire trust and encourage clients to start their self-discovery journey.",
    alignment: "left",
  },
  {
    type: "Info-Packed Legal Nonprofit Platform",
    thumbnail: dacThumbnail,
    client: "Dependency Advocacy Center",
    industry: "Nonprofit Legal Services",
    objective:
      "Replace an outdated WordPress site with a modern, mobile-optimized platform that better reflected DAC’s mission and made it easier for clients to get help.",
    deliverables: [
      "- Custom React-based front-end",
      "- Integrated multi-step contact forms for different legal needs",
      "- Dedicated careers page with live job listings and applicant submissions",
      "- Optimized donations flow",
      "- Clean, responsive design aligned with DAC’s identity",
    ],
    impact:
      "The new site is faster, cleaner, and easier to navigate for vulnerable families who need immediate legal support. It’s now an effective tool for DAC staff, donors, and prospective hires.",
    alignment: "right",
  },
];

export default caseStudyData;
