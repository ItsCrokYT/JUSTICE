import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

/* ================== ANIMACIONES ================== */

const containerVariant = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

/* ================== CONTADOR ================== */

const AnimatedCounter = ({ from = 0, to = 0, duration = 2 }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);

  useEffect(() => {
    let startTime;
    let frame;

    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / (duration * 1000), 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(from + (to - from) * ease));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [from, to, duration]);

  return <span ref={ref}>{count}</span>;
};

/* ================== STATS ================== */

const Stats = ({ content }) => {
  if (!content) return null;

  const { title, subtitle, audit, items = [] } = content;

  return (
    <section
      id="stats"
      className="relative z-10 bg-black h-screen py-24 sm:py-32 border-t border-white/10 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-16">

        {/* HEADER */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate="show"
          className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <motion.div variants={itemVariant}>
            <h2 className="text-5xl sm:text-7xl font-serif font-thin text-white leading-[0.9]">
              {title} <br />
              <span className="italic opacity-50">{subtitle}</span>
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariant}
            className="text-[10px] text-gray-500 uppercase tracking-[0.4em] max-w-xs text-left md:text-right"
          >
            {audit}
          </motion.p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0"
        >
          {items.map((stat, index) => (
            <motion.div
              key={`${stat.label}-${index}`}
              variants={itemVariant}
              className={`relative lg:pl-12 py-8 min-h-[220px] ${
                index !== 0 ? "lg:border-l border-white/10" : ""
              }`}
            >
              <div className="flex flex-col h-full justify-between gap-6">
                <div className="text-7xl md:text-8xl font-serif font-thin text-white flex items-start">
                  <AnimatedCounter from={0} to={stat.value} />
                  <span className="text-3xl opacity-30 ml-2 mt-2">
                    {stat.suffix}
                  </span>
                </div>

                <div>
                  <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-3">
                    {stat.label}
                  </h4>
                  <p className="text-gray-400 font-serif italic text-lg">
                    {stat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Stats;
