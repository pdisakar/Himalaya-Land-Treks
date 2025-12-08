import * as React from "react";

export const Envelope: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M2 4h20v16H2z" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M2 4l10 9 10-9" fill="none" stroke="currentColor" strokeWidth="2" />
  </svg>
);
