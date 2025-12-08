"use client";

import React, { useEffect } from "react";

import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

interface FancyBoxProps {
  delegate?: string;
  options?: Record<string, any>;
  children?: React.ReactNode;
}

export default function FancyBox(props: FancyBoxProps) {
  const delegate = props.delegate || "[data-fancybox]";

  useEffect(() => {
    const opts = props.options || {};

    NativeFancybox.bind(delegate, opts);

    return () => {
      NativeFancybox.destroy();
    };
  }, [delegate]);

  return <>{props.children}</>;
}
