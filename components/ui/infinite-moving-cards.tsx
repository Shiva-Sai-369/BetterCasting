"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    icon?: React.ReactNode;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "normal");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[280px] md:w-[320px] flex-shrink-0 rounded-2xl overflow-hidden group"
            key={`${item.name}-${idx}`}
          >
            {/* Background with gradient */}
            <div className="absolute inset-0 bg-[#0059AD] z-0" />
            
            {/* Animated border effect */}
            <div className="absolute inset-0 rounded-2xl border border-white/20 group-hover:border-[#00AADF] transition-colors duration-300 z-10" />
            
            {/* Accent background glow */}
            <div className="absolute -inset-1 bg-gradient-to-br from-[#00AADF]/20 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl z-0" />

            <div className="relative z-20 p-6 h-full flex flex-col justify-between min-h-[280px]">
              {/* Icon */}
              {item.icon && (
                <div className="mb-4 text-4xl text-[#00AADF] group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
              )}

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#00AADF] transition-colors">
                  {item.name}
                </h3>
                <p className="text-sm leading-relaxed text-white/90 group-hover:text-white transition-colors line-clamp-3">
                  {item.quote}
                </p>
              </div>

              {/* Footer */}
              <div className="mt-4 pt-4 border-t border-white/20">
                <p className="text-xs font-semibold text-white/70 uppercase tracking-wider">
                  {item.title}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
