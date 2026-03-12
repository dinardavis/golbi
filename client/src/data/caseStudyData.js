// data/caseStudyData.js
import dacThumbnail from "../assets/imgs/dac_thumbnail.png";
import dacThumbnail2 from "../assets/imgs/dac_thumbnail3.png";
import dacThumbnail3 from "../assets/imgs/dac_thumbnail4.png";
import rochelleThumbnail from "../assets/imgs/rochelle_thumbnail_1.png";
import rochelleThumbnail2 from "../assets/imgs/rochelle_thumbnail_4.png";
import rochelleThumbnail3 from "../assets/imgs/rochelle_thumbnail_5.png";
import opsThumbnail from "../assets/imgs/jordan_thumbnail1.png";
import opsThumbnail2 from "../assets/imgs/jordan_thumbnail2.png";
import opsThumbnail3 from "../assets/imgs/jordan_thumbnail3.png";

const caseStudyData = [
  {
    type: "Solopreneur Coaching & Self-Development",
    flagText: "Single-page",
    thumbnail: rochelleThumbnail,
    images: [rochelleThumbnail, rochelleThumbnail2, rochelleThumbnail3],
    client: "Rochelle Ruen Coaching",
    industry: "Personal Development",
    objective:
      "Create a clear and welcoming digital home for Rochelle’s coaching practice that communicates her philosophy, builds trust with new visitors, and makes it easy for prospective clients to book a consultation.",
    deliverables: [
      "• Custom React-based design tailored to Rochelle’s brand and coaching voice",
      "• Messaging and copywriting support to clarify her services and value",
      "• Structured service sections designed to guide visitors toward booking",
      "• Integrated consultation request and contact forms",
      "• Fully responsive experience across mobile, tablet, and desktop",
    ],
    impact:
      "The new site gives Rochelle a professional platform that clearly communicates her approach and services. Visitors can quickly understand what she offers and move naturally from learning about her work to booking a consultation. The result is a stronger first impression, clearer positioning, and a website that supports the growth of her coaching practice.",
    demoSite: "https://golbi-llc.github.io/rochelle_ruen/",
    alignment: "left",
  },
  {
    type: "Nonprofit Legal Services",
    flagText: "Multi-page",
    thumbnail: dacThumbnail,
    images: [dacThumbnail, dacThumbnail2, dacThumbnail3],
    client: "Dependency Advocacy Center",
    industry: "Nonprofit Legal Services",
    objective:
      "Replace an outdated website with a clear, accessible platform that helps families quickly understand available legal services and connect with the right resources.",
    deliverables: [
      "• Custom React-based front-end optimized for performance and accessibility",
      "• Multi-step intake forms tailored to different legal service needs",
      "• Dedicated careers section with job listings and application submissions",
      "• Streamlined donation flow to support community contributions",
      "• Mobile-first design for visitors accessing resources on any device",
    ],
    impact:
      "The redesigned platform makes it easier for families to find help and for staff to manage incoming inquiries. Clear navigation, structured intake forms, and improved performance help connect people with the right resources faster. The result is a website that better supports DAC’s mission and day-to-day operations.",
    demoSite: "https://golbi-llc.github.io/dac",
    alignment: "right",
  }
  ,{
  type: "Fractional Operations Consulting",
  flagText: "Multi-page",
  thumbnail: opsThumbnail,
  images: [opsThumbnail, opsThumbnail2, opsThumbnail3],
  client: "Jordan Byrd Operations & Infrastructure",
  industry: "Operations Consulting",
  objective:
    "Design a professional website for a fractional operations consultancy that clearly explains complex operational services and positions the firm as a trusted partner for growing businesses.",
  deliverables: [
    "• Multi-page site architecture designed to clearly communicate advisory services and engagement models",
    "• Messaging structure to translate operational expertise into clear, accessible language for founders and leadership teams",
    "• Dedicated service sections outlining infrastructure, systems, and operational leadership support",
    "• Consultation request flow designed to capture qualified inbound inquiries",
  ],
  impact:
    "The finished platform presents Jordan Byrd Operations & Infrastructure as a focused operational partner for companies that have outgrown informal systems. Clear service explanations, structured navigation, and a confident visual tone help visitors quickly understand the value of fractional operations leadership and take the next step toward a consultation.",
  demoSite: "https://golbi-llc.github.io/jordanbyrd",
  alignment: "left",
},
];

export default caseStudyData;
