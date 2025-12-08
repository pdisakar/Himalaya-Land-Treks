// Global type shims to satisfy TypeScript without altering runtime logic.
// These declarations only affect typing and avoid changes to component logic.

declare module "react-day-picker" {
  import * as React from "react";
  export interface DayPickerProps extends React.HTMLAttributes<HTMLDivElement> {
    mode?: string;
    className?: string;
    classNames?: Record<string, string>;
    showOutsideDays?: boolean;
    components?: Record<string, React.ComponentType<any>>;
  }
  export const DayPicker: React.FC<DayPickerProps>;
  export default DayPicker;
}

declare module "swiper" {
  export interface SwiperClass {
    slidePrev: () => void;
    slideNext: () => void;
  }
}

declare module "swiper/react" {
  import * as React from "react";
  export const Swiper: React.FC<any>;
  export const SwiperSlide: React.FC<any>;
}

declare module "../../ReelItem" {
  import * as React from "react";
  const ReelItem: React.FC<{ data: any }>;
  export default ReelItem;
}

declare module "../../ReviewItem" {
  import * as React from "react";
  const ReviewItem: React.FC<{ data: any; collapsible?: boolean }>;
  export default ReviewItem;
}

declare module "../../Tabs/Tabs" {
  import * as React from "react";
  export const Tab: React.FC<{ title: string; children?: React.ReactNode }>;
  const Tabs: React.FC<{ activeTab?: any; setActive?: (v: any) => void; children?: React.ReactNode }>;
  export default Tabs;
}

declare module "../../TeamItem/Member" {
  import * as React from "react";
  const Member: React.FC<{ data: any }>;
  export default Member;
}

declare module "react-bootstrap-icons" {
  import * as React from "react";
  export const Youtube: React.FC<any>;
  export const CheckCircle: React.FC<any>;
  export const ChevronDown: React.FC<any>;
  export const ChevronUp: React.FC<any>;
  export const XCircle: React.FC<any>;
  export const PlayFill: React.FC<any>;
  export const QuestionCircleFill: React.FC<any>;
  export const X: React.FC<any>;
}

declare const grecaptcha: {
  execute: (siteKey: string, options: { action: string }) => Promise<string>;
};

declare module "@/components/ui/button" {
  import * as React from "react";
  export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: string;
    size?: string;
    className?: string;
  }
  export const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
}

declare module "@/components/ui/dialog" {
  import * as React from "react";
  export const Dialog: React.FC<React.PropsWithChildren<{ className?: string }>>;
  export const DialogTrigger: React.FC<React.PropsWithChildren<{ className?: string }>>;
  export const DialogContent: React.ForwardRefExoticComponent<
    React.PropsWithChildren<{ className?: string }> & React.RefAttributes<any>
  >;
  export const DialogHeader: React.FC<React.PropsWithChildren<{ className?: string }>>;
  export const DialogTitle: React.ForwardRefExoticComponent<
    React.PropsWithChildren<{ className?: string }> & React.RefAttributes<any>
  >;
}

declare module "next-themes" {
  export function useTheme(): { theme?: string; setTheme?: (t: string) => void };
}

declare module "sonner" {
  import * as React from "react";
  export interface ToasterProps {
    theme?: "light" | "dark" | "system" | (string & {});
    className?: string;
    style?: React.CSSProperties;
  }
  export const Toaster: React.FC<ToasterProps>;
}

declare module "react-bootstrap-icons" {
  import * as React from "react";
  export const X: React.FC<React.SVGProps<SVGSVGElement>>;
  export const Lock: React.FC<React.SVGProps<SVGSVGElement>>;
  export const QuestionCircleFill: React.FC<React.SVGProps<SVGSVGElement>>;
  export const Cursor: React.FC<React.SVGProps<SVGSVGElement>>;
}

declare module "axios" {
  const axios: any;
  export default axios;
}

declare module "swiper/react" {
  export const Swiper: any;
  export const SwiperSlide: any;
}

declare module "react-range" {
  export const Range: any;
  export function getTrackBackground(opts: any): string;
}

declare module "moment" {
  const moment: any;
  export default moment;
}

declare module "../svgs" {
  import * as React from "react";
  export const Envelope: React.FC<React.SVGProps<SVGSVGElement>>;
}

declare module "../../services/network" {
  const client: any;
  export default client;
}

declare module "@/components/AuthorItem" {
  import * as React from "react";
  const AuthorItem: React.FC<any>;
  export default AuthorItem;
}

declare module "@/components/Collapse/Collapse" {
  import * as React from "react";
  const Collapse: React.FC<{ href: any; title: any; children?: any }>;
  export default Collapse;
}
