import Image from "next/image";

interface LogoProps {
  size?: number;
  withText?: boolean;
  className?: string;
}

export default function Logo({ size = 36, withText = true, className = "" }: LogoProps) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <span
        className="relative inline-block shrink-0 rounded-xl overflow-hidden shadow-sm ring-1 ring-white/20"
        style={{ width: size, height: size }}
      >
        <Image src="/logo.svg" alt="ICT Book logo" width={size} height={size} className="rounded-xl" priority />
      </span>
      {withText && (
        <span className="flex flex-col leading-none">
          <span className="font-extrabold text-lg tracking-tight text-ict-900 dark:text-white">
            ICT <span className="brand-text">Book</span>
          </span>
          <span className="text-[10px] font-medium text-ict-500 dark:text-ict-300 tracking-wide uppercase">
            Classes 6–8 • SCERT Delhi
          </span>
        </span>
      )}
    </span>
  );
}
