import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";
import viktorImage from "@/assets/viktor-oddy.jpg";

export interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  children: React.ReactNode;
}

const GlowButton = forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className, href, children, ...props }, ref) => {
    const buttonContent = (
      <button
        className={cn(
          "relative glow-button rounded-full p-1 transition-all duration-300 hover:scale-105",
          "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
          className
        )}
        ref={ref}
        {...props}
      >
        <div className="relative flex items-center gap-3 rounded-full bg-gradient-to-b from-slate-800 to-slate-700 px-6 py-3">
          <div className="relative flex h-12 w-12 items-center justify-center rounded-full">
            <img
              src={viktorImage}
              alt="Viktor Oddy"
              className="h-12 w-12 rounded-full object-cover"
            />
          </div>
          <div className="text-left">
            <p className="text-white font-medium">Viktor Oddy</p>
          </div>
        </div>
      </button>
    );

    if (href) {
      return (
        <a href={href} className="inline-block">
          {buttonContent}
        </a>
      );
    }

    return buttonContent;
  }
);

GlowButton.displayName = "GlowButton";

export { GlowButton };