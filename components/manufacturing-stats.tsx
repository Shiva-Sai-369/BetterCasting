"use client";

import NumberFlow from "@number-flow/react";
import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface StatCardProps {
  value: number;
  suffix: string;
  prefix?: string;
  title: string;
  description: string;
}

function AnimatedStatCard({ value, suffix, prefix = "", title, description }: StatCardProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const count = useMotionValue(0);
  const { ref, inView } = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      animate(count, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => setDisplayValue(Math.round(latest)),
      });
    } else {
      setDisplayValue(0);
    }
  }, [inView, count, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all"
    >
      <div className="text-5xl md:text-6xl font-bold text-[#00AADF] mb-2">
        <NumberFlow value={displayValue} prefix={prefix} suffix={suffix} />
      </div>
      <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm md:text-base text-slate-600 max-w-xs">{description}</p>
    </motion.div>
  );
}

export function ManufacturingStats() {
  const stats = [
    {
      value: 25,
      suffix: "+",
      title: "Years Experience",
      description: "Delivering trusted gasket and stud manufacturing solutions across industries.",
    },
    {
      value: 200,
      suffix: "+",
      title: "Metric Tons Per Month",
      description: "Large-scale production capacity to support bulk industrial requirements.",
    },
    {
      value: 10,
      suffix: "+",
      title: "Industries Served",
      description: "Supporting diverse sectors with reliable sealing and fastening solutions.",
    },
    {
      value: 30,
      suffix: "+",
      title: "Countries Supplied",
      description: "Serving customers globally with consistent quality and timely deliveries.",
    },
    {
      value: 100,
      suffix: "%",
      title: "Quality Inspection",
      description: "Every product undergoes rigorous quality checks before dispatch.",
    },
    {
      value: 24,
      suffix: "/7",
      title: "Fast Delivery Support",
      description: "Efficient production and logistics ensure quick order fulfillment worldwide.",
    },
  ];

  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Manufacturing Strength
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Industry-leading capabilities backed by decades of experience
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <AnimatedStatCard
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              title={stat.title}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
