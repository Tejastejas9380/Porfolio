// src/components/TypingAnimation.jsx

import { useState, useEffect } from "react";

export default function TypingAnimation() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = ["Web Developer", "Python Developer", "UI/UX Designer"];

  useEffect(() => {
    const currentText = texts[currentIndex];

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText((prev) => prev.slice(0, -1));
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setDisplayText(currentText.slice(0, displayText.length + 1));
        if (displayText === currentText) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting]);

  return (
    <span className="text-pink-400 ml-2 font-medium">
      {displayText}
      <span className="typing-cursor text-pink-400 ml-1">|</span>
    </span>
  );
}
