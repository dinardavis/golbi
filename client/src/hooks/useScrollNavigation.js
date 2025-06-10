import { useLocation, useNavigate } from "react-router-dom";

export function useScrollNavigation() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    if (sectionId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigation = (sectionId, callback) => {
    // If scrolling to top, always do it on the current page
    if (sectionId === "top") {
      scrollToSection("top");
      if (callback) callback();
      return;
    }

    // For other sections, only navigate if we're not on the homepage
    if (location.pathname !== "/") {
      navigate(`/?scrollTo=${sectionId}`, { replace: true });
    } else {
      scrollToSection(sectionId);
      if (callback) callback();
    }
  };

  return { handleNavigation };
}
