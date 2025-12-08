import * as React from "react";

declare module "@/components/ui/button" {
  export const Button: any;
  export const buttonVariants: any;
}

declare module "@/components/ui/dialog" {
  export const Dialog: any;
  export const DialogPortal: any;
  export const DialogOverlay: any;
  export const DialogTrigger: any;
  export const DialogClose: any;
  export const DialogContent: any;
  export const DialogHeader: any;
  export const DialogFooter: any;
  export const DialogTitle: any;
  export const DialogDescription: any;
}

declare module "next-themes" {
  export function useTheme(): { theme?: string; setTheme?: (v: string) => void };
}

declare module "sonner" {
  export interface ToasterProps {
    [key: string]: any;
  }
  export const Toaster: any;
}

declare const grecaptcha: any;
