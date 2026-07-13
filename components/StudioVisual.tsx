export type VisualVariant =
  | "hero"
  | "ecommerce"
  | "restaurant"
  | "advertising"
  | "mobile"
  | "software"
  | "brand"
  | "global";

type StudioVisualProps = {
  variant: VisualVariant;
  label: string;
  className?: string;
};

const visualCopy: Record<VisualVariant, { eyebrow: string; title: string }> = {
  hero: { eyebrow: "DESIGN · BUILD · LAUNCH", title: "Digital experiences that work" },
  ecommerce: { eyebrow: "ONLINE STORE", title: "Shop with confidence" },
  restaurant: { eyebrow: "MENU · BOOKING", title: "Made to be discovered" },
  advertising: { eyebrow: "LANDING PAGE", title: "Turn visits into leads" },
  mobile: { eyebrow: "IOS · ANDROID", title: "Designed for every tap" },
  software: { eyebrow: "CUSTOM PLATFORM", title: "Your workflow, simplified" },
  brand: { eyebrow: "BRAND SYSTEM", title: "A look people remember" },
  global: { eyebrow: "CANADA · WORLDWIDE", title: "Local care, global reach" },
};

export default function StudioVisual({
  variant,
  label,
  className = "",
}: StudioVisualProps) {
  const copy = visualCopy[variant];
  const isPhone = variant === "mobile";
  const isGlobal = variant === "global";

  return (
    <svg
      viewBox="0 0 800 600"
      role="img"
      aria-label={label}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`bg-${variant}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#17211d" />
          <stop offset="1" stopColor="#315b54" />
        </linearGradient>
        <linearGradient id={`accent-${variant}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#b6d8ce" />
          <stop offset="1" stopColor="#6aa196" />
        </linearGradient>
      </defs>

      <rect width="800" height="600" rx="42" fill={`url(#bg-${variant})`} />
      <circle cx="690" cy="90" r="180" fill="#83b5a9" opacity=".12" />
      <circle cx="95" cy="540" r="150" fill="#d5a485" opacity=".1" />

      {isGlobal ? (
        <>
          <circle cx="555" cy="300" r="155" fill="none" stroke="#9bc4b9" strokeWidth="3" opacity=".65" />
          <ellipse cx="555" cy="300" rx="68" ry="155" fill="none" stroke="#9bc4b9" strokeWidth="3" opacity=".65" />
          <path d="M400 300h310M420 230h270M420 370h270" fill="none" stroke="#9bc4b9" strokeWidth="3" opacity=".65" />
          <circle cx="500" cy="240" r="12" fill="#d5a485" />
          <circle cx="625" cy="350" r="12" fill="#d5a485" />
        </>
      ) : (
        <>
          <rect
            x={isPhone ? 525 : 350}
            y={isPhone ? 120 : 145}
            width={isPhone ? 180 : 360}
            height={isPhone ? 365 : 260}
            rx={isPhone ? 34 : 22}
            fill="#f4f1e8"
            opacity=".96"
          />
          <rect
            x={isPhone ? 550 : 378}
            y={isPhone ? 170 : 190}
            width={isPhone ? 130 : 210}
            height="28"
            rx="14"
            fill={`url(#accent-${variant})`}
          />
          <rect
            x={isPhone ? 550 : 378}
            y={isPhone ? 220 : 246}
            width={isPhone ? 105 : 280}
            height="13"
            rx="7"
            fill="#17211d"
            opacity=".22"
          />
          <rect
            x={isPhone ? 550 : 378}
            y={isPhone ? 250 : 278}
            width={isPhone ? 125 : 230}
            height="13"
            rx="7"
            fill="#17211d"
            opacity=".14"
          />
          <rect
            x={isPhone ? 550 : 378}
            y={isPhone ? 305 : 335}
            width={isPhone ? 92 : 120}
            height="38"
            rx="19"
            fill="#4f837b"
          />
        </>
      )}

      <text x="70" y="110" fill="#9bc4b9" fontSize="18" fontWeight="700" letterSpacing="3">
        {copy.eyebrow}
      </text>
      <text x="70" y="175" fill="#f4f1e8" fontSize="42" fontWeight="700">
        {copy.title.split(" ").slice(0, 3).join(" ")}
      </text>
      <text x="70" y="225" fill="#f4f1e8" fontSize="42" fontWeight="700">
        {copy.title.split(" ").slice(3).join(" ")}
      </text>
    </svg>
  );
}
