import type { SVGProps } from "react";

/**
 * Hand-picked line icons drawn on a 24px grid with a 1.6 stroke for a soft,
 * premium feel. Kept inline to avoid a runtime icon dependency and to keep
 * full control over stroke weight and joins.
 */
type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const ArrowRight = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const Sparkle = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3l1.6 4.9L18.5 9.5l-4.9 1.6L12 16l-1.6-4.9L5.5 9.5l4.9-1.6L12 3z" />
    <path d="M19 15l.6 1.9L21.5 17.5l-1.9.6L19 20l-.6-1.9L16.5 17.5l1.9-.6L19 15z" />
  </svg>
);

export const Check = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export const Target = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <circle cx="12" cy="12" r="4.5" />
    <circle cx="12" cy="12" r="0.6" fill="currentColor" />
  </svg>
);

export const Compass = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M15.5 8.5l-2 5-5 2 2-5 5-2z" />
  </svg>
);

export const Box = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M21 8l-9-5-9 5 9 5 9-5z" />
    <path d="M3 8v8l9 5 9-5V8" />
    <path d="M12 13v8" />
  </svg>
);

export const Store = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 9l1-4h14l1 4" />
    <path d="M4 9v10a1 1 0 001 1h14a1 1 0 001-1V9" />
    <path d="M4 9a2.5 2.5 0 004 0 2.5 2.5 0 004 0 2.5 2.5 0 004 0 2.5 2.5 0 004 0" />
    <path d="M9 20v-5h6v5" />
  </svg>
);

export const Pen = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4 12.5-12.5z" />
  </svg>
);

export const Bolt = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
  </svg>
);

export const Layers = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3l9 5-9 5-9-5 9-5z" />
    <path d="M3 13l9 5 9-5" />
  </svg>
);

export const Calendar = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
    <path d="M3.5 9.5h17M8 3v3M16 3v3" />
  </svg>
);

export const MessageSquare = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M20 15a2 2 0 01-2 2H8l-4 4V5a2 2 0 012-2h12a2 2 0 012 2v10z" />
  </svg>
);

export const Map = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M9 4L3 6.5v13L9 17l6 2.5 6-2.5v-13L15 6.5 9 4z" />
    <path d="M9 4v13M15 6.5v13" />
  </svg>
);

export const Star = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 18l-5.8 3.4 1.1-6.5L2.6 9.8l6.5-.9L12 3z" />
  </svg>
);

export const TrendingUp = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 17l6-6 4 4 8-8" />
    <path d="M17 7h4v4" />
  </svg>
);

export const ShieldCheck = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const Linkedin = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
    <path d="M8 10v6M8 7.2v.01M12 16v-3.2a1.8 1.8 0 013.6 0V16M12 16v-6" />
  </svg>
);

export const AlertTriangle = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3.5L21 19H3l9-15.5z" />
    <path d="M12 10v4M12 17v.01" />
  </svg>
);

export const Rocket = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 15c-1.5 1-2 4-2 4s3-.5 4-2c.7-.9.7-2 0-2.7a2 2 0 00-2 .7z" />
    <path d="M9 13c3-6 6-8 11-8 0 5-2 8-8 11l-3-3z" />
    <path d="M9 13l-3-1 1-3M11 15l1 3 3-1" />
  </svg>
);

export const Gift = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="8.5" width="17" height="4" rx="1.5" />
    <path d="M5 12.5V20a1 1 0 001 1h12a1 1 0 001-1v-7.5M12 8.5V21" />
    <path d="M12 8.5H8.2a2.2 2.2 0 010-4.4C11 4.1 12 8.5 12 8.5zM12 8.5h3.8a2.2 2.2 0 000-4.4C13 4.1 12 8.5 12 8.5z" />
  </svg>
);

export const Grid = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="3.5" width="7" height="7" rx="1.8" />
    <rect x="13.5" y="3.5" width="7" height="7" rx="1.8" />
    <rect x="3.5" y="13.5" width="7" height="7" rx="1.8" />
    <rect x="13.5" y="13.5" width="7" height="7" rx="1.8" />
  </svg>
);

export const Calculator = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="5" y="3" width="14" height="18" rx="2.5" />
    <path d="M8 7h8" />
    <path d="M8 11h.01M12 11h.01M16 11h.01M8 14.5h.01M12 14.5h.01M16 14.5v3M8 17.5h4" />
  </svg>
);

export const Search = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="M20 20l-3.5-3.5" />
  </svg>
);

export const Copy = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="9" y="9" width="11" height="11" rx="2.5" />
    <path d="M6 15H5a2 2 0 01-2-2V5a2 2 0 012-2h8a2 2 0 012 2v1" />
  </svg>
);

export const Printer = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M6 9V3h12v6" />
    <path d="M6 18H4a2 2 0 01-2-2v-4a2 2 0 012-2h16a2 2 0 012 2v4a2 2 0 01-2 2h-2" />
    <rect x="6" y="14" width="12" height="7" rx="1.5" />
  </svg>
);

export const Folder = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 7a2 2 0 012-2h4l2 2.5h8a2 2 0 012 2V17a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
  </svg>
);

export const RotateCcw = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 5v5h5" />
    <path d="M4.5 10a8 8 0 113 8" />
  </svg>
);

export const Clock = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);

export const Download = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3v12M7 10l5 5 5-5" />
    <path d="M5 21h14" />
  </svg>
);

export const List = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01" />
  </svg>
);

export const Lock = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="4.5" y="10.5" width="15" height="10" rx="2.5" />
    <path d="M8 10.5V7.5a4 4 0 018 0v3" />
    <path d="M12 15v2" />
  </svg>
);

export const Play = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M10 8.5l6 3.5-6 3.5v-7z" fill="currentColor" stroke="none" />
  </svg>
);

export const ArrowUpRight = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M7 17L17 7M8 7h9v9" />
  </svg>
);

export const FileText = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5z" />
    <path d="M14 3v5h5M9 13h6M9 17h6" />
  </svg>
);
