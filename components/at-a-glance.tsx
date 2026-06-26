"use client";

import { motion } from "framer-motion";
import NumberFlow from "@number-flow/react";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { animate, useMotionValue } from "framer-motion";

interface StatCardProps {
  value: number;
  suffix: string;
  prefix?: string;
  title: string;
  description: string;
  delay?: number;
}

function StatCard({ value, suffix, prefix = "", title, description, delay = 0 }: StatCardProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const count = useMotionValue(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      animate(count, value, {
        duration: 2,
        delay: delay,
        ease: "easeOut",
        onUpdate: (latest) => setDisplayValue(Math.round(latest)),
      });
    }
  }, [inView, count, value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: delay }}
      className="text-center"
    >
      <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-3">
        {prefix}
        <NumberFlow value={displayValue} />
        {suffix}
      </div>
      <h4 className="text-base md:text-lg font-semibold text-slate-900 mb-2">{title}</h4>
      <p className="text-sm text-slate-600 max-w-xs mx-auto leading-relaxed">{description}</p>
    </motion.div>
  );
}

export default function AtAGlance() {
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
  ];

  const additionalStats = [
    {
      value: 100,
      suffix: "%",
      title: "Quality Inspection",
      description: "Every product undergoes rigorous quality checks before dispatch.",
    },
    {
      title: "Fast Delivery Support",
      description: "Efficient production and logistics ensure quick order fulfillment worldwide.",
    },
  ];

  return (
    <section className="relative w-full py-20 md:py-32 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Better Castings at a Glance
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            With decades of manufacturing expertise and a strong global presence, Better Castings continues to deliver high-quality sealing solutions, industrial gaskets, stud bolts, and precision-engineered components to customers worldwide.
          </p>
        </motion.div>

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
            Our Manufacturing Strength
          </h3>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              title={stat.title}
              description={stat.description}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto pt-12 border-t border-slate-200">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <div className="text-5xl md:text-6xl font-bold text-slate-900 mb-3">
              100%
            </div>
            <h4 className="text-base md:text-lg font-semibold text-slate-900 mb-2">
              Quality Inspection
            </h4>
            <p className="text-sm text-slate-600 max-w-xs mx-auto leading-relaxed">
              Every product undergoes rigorous quality checks before dispatch.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <div className="text-5xl md:text-6xl font-bold text-slate-900 mb-3">
              24/7
            </div>
            <h4 className="text-base md:text-lg font-semibold text-slate-900 mb-2">
              Fast Delivery Support
            </h4>
            <p className="text-sm text-slate-600 max-w-xs mx-auto leading-relaxed">
              Efficient production and logistics ensure quick order fulfillment worldwide.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
