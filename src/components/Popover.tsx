"use client"
import React, { useState, useRef, useEffect } from "react";

interface PopoverProps {
  content: string;
  children: React.ReactNode;
}

const Popover = ({ content, children }: PopoverProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const ref = useRef<HTMLSpanElement | null>(null);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div style={{ position: "relative", display: "inline-block" }} className="popover">
      <span onClick={toggleVisibility} ref={ref}>
        {children}
      </span>
      {isVisible && (
        <div
        dangerouslySetInnerHTML={{__html: content}}
          style={{
            position: "absolute",
            bottom: "100%",
            left: 0,
            backgroundColor: "#fff",
            boxShadow: "0 1px 4px rgba(0, 0, 0, 0.3)",
            padding: "0.75rem", 
            borderRadius: "0.25rem",
            zIndex: 1,
            fontSize: ".8375rem",
            fontWeight: "normal",
            lineHeight:1.6,
            color: "#3c4043",
            minWidth: '250px',
          }}
          
        >
        </div>
      )}
    </div>
  );
};

export default Popover;
