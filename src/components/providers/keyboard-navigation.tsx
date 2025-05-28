"use client";

import { useEffect } from "react";
import { scrollToElement } from "@/lib/utils";

const sections = [
  "hero",
  "about", 
  "tech-stack",
  "projects",
  "oss-contributions",
  "achievements",
  "contact"
];

export function KeyboardNavigation() {
  useEffect(() => {
    let currentSectionIndex = 0;

    const handleKeyPress = (event: KeyboardEvent) => {
      // Only handle if no input is focused
      if (document.activeElement?.tagName === "INPUT" || 
          document.activeElement?.tagName === "TEXTAREA") {
        return;
      }

      switch (event.key) {
        case "ArrowDown":
        case "j":
          event.preventDefault();
          currentSectionIndex = Math.min(currentSectionIndex + 1, sections.length - 1);
          scrollToElement(sections[currentSectionIndex]);
          break;
        
        case "ArrowUp":
        case "k":
          event.preventDefault();
          currentSectionIndex = Math.max(currentSectionIndex - 1, 0);
          scrollToElement(sections[currentSectionIndex]);
          break;
        
        case "Home":
        case "g":
          event.preventDefault();
          currentSectionIndex = 0;
          scrollToElement(sections[0]);
          break;
        
        case "End":
        case "G":
          event.preventDefault();
          currentSectionIndex = sections.length - 1;
          scrollToElement(sections[currentSectionIndex]);
          break;
      }
    };

    const handleScroll = () => {
      // Update current section based on scroll position
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (let i = 0; i < sections.length; i++) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;
          
          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            currentSectionIndex = i;
            break;
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial scroll position check
    handleScroll();

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
}
