"use client";

import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 90%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white font-sans"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-12 px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl mb-4 text-slate-900 font-bold">
          Our Manufacturing Process
        </h2>
        <p className="text-base md:text-lg text-slate-600 max-w-2xl">
          To maintain superior quality standards, we follow a structured manufacturing approach:
        </p>
      </div>

      <div ref={ref} className="relative max-w-5xl mx-auto pb-24 px-4 md:px-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-20 md:gap-12"
          >
            <div className="flex flex-col md:flex-row z-40 items-start self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-12 absolute left-0 md:left-0 w-12 rounded-full bg-white flex items-center justify-center border-3 border-[#00AADF] z-50 flex-shrink-0">
                <div className="h-5 w-5 rounded-full bg-[#00AADF]" />
              </div>
              <h3 className="hidden md:block text-2xl md:pl-24 md:text-3xl font-bold text-slate-800">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-6 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-slate-800">
                {item.title}
              </h3>
              <div className="text-slate-600 text-base md:text-lg leading-relaxed">
                {item.content}
              </div>
            </div>
          </div>
        ))}

        {/* Timeline vertical line */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-6 left-6 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-[#00AADF] via-[#00AADF]/50 to-slate-300"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#00AADF] via-[#00AADF] to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
