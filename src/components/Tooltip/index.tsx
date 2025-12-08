import {useEffect } from "react";

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

export default function Tooltip({ content, children }: TooltipProps) {
  useEffect(() => {
    Array.from(document.querySelectorAll("[data-tooltip]")).forEach((el) => {
      const node = el as HTMLElement;
      let tip = document.createElement("div");
      tip.classList.add("tooltip");
      tip.innerText = node.getAttribute("data-tooltip") ?? "";
      tip.style.transform =
        "translate(" +
        (el.hasAttribute("tip-left") ? "calc(-100% - 5px)" : "15px") +
        ", " +
        (el.hasAttribute("tip-top") ? "-100%" : "0") +
        ")";
      node.appendChild(tip);
      (node as any).onmousemove = (e: MouseEvent) => {
        tip.style.left = e.clientX + "px";
        tip.style.top = e.clientY + "px";
      };
    });
  }, []);

  return <div data-tooltip={content}>{children}</div>;
}
