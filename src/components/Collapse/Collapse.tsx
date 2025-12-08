import { useState } from "react";
import AnimateHeight from "react-animate-height";
import Link from "next/link";
import React from "react";

interface CollapseProps {
  children?: React.ReactNode;
  href: string;
  title: React.ReactNode;
}

export default function Collapse({ children, href, title}: CollapseProps) {
  const [active, setActive] = useState<boolean>(false);
  const [height, setHeight] = useState<number | "auto">(0);

  const onCollapse = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setActive(!active);
    setHeight(height === 0 ? "auto" : 0);
  };

  return (
    <li className="nav-item">
      <div className={active ? "nav-link active" : "nav-link"}>
        <Link href={href}>
          {title}
        </Link>
        {children && (
          <button
            type="button"
            className="btn-toggle"
            onClick={onCollapse}
          >
            {/* {active ? <i className="plus-minus"><Dash /></i> : <i className="icon"><Plus /></i>} */}
            <i className="icon"></i>
          </button>
        )}
      </div>
      {/* <Link href={href}>
          {title}
        </Link>
        {children && (
          <button
            type="button"
            className="btn-toggle"
            onClick={onCollapse}
          >
            {active ? "-" : "+"}
          </button>
        )} */}
      {children &&  <AnimateHeight duration={300} height={height}>
        {children}
      </AnimateHeight>}
    </li>
  );
}
