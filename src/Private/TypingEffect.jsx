import React, { useState, useEffect } from 'react';
import './TypingEffect.css';

const TypingEffect = ({ text, speed = 200 }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setDisplayText((prevText) => prevText + text[currentIndex]);
      currentIndex++;

      if (currentIndex === text.length) {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return <div className="typing-effect">{displayText}</div>;
};

export default TypingEffect;