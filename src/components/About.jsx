import React from "react";
import { motion } from "framer-motion";
import { translations } from "../constants/translations";

/* ================== ANIMACIONES ================== */

const containerVariant = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

/* ================== SERVICE CARD ================== */

const ServiceCard = ({ id, title, description }) => {
  if (!title || !description) return null;

  return (
    <motion.div
      variants={itemVariant}
      className="group relative w-full min-h-[350px] p-8 border-l border-white/20 hover:border-white transition-colors duration-500 flex flex-col justify-between cursor-default"
    >
      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-700 ease-out -z-10" />

      <div className="space-y-6">
        <h4 className="text-6xl font-serif font-thin text-white/20 group-hover:text-white transition-colors duration-500">
          {id}
        </h4>

        <h3 className="text-2xl font-serif font-light text-white leading-tight">
          {title}
        </h3>
      </div>

      <div>
        <div className="w-8 h-[1px] bg-white/20 mb-6 group-hover:w-full transition-all duration-700 ease-out" />
        <p className="text-sm text-gray-400 font-sans font-light leading-relaxed tracking-wide group-hover:text-white transition-colors duration-500">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

/* ================== ABOUT ================== */

const About = ({ content }) => {
  // Fallback TOTAL (nunca se queda vacío)
  const safeContent = content || translations.es.about;

  const services = Array.isArray(safeContent.services)
    ? safeContent.services
    : [];

  // Manejo seguro del título
  const titleWords = safeContent.title?.split(" ") || ["Quiénes", "Somos"];
  const titleFirst = titleWords[0];
  const titleRest = titleWords.slice(1).join(" ");

  return (
    <section className="relative z-0 bg-black py-24 sm:py-40">
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        
        {/* ===== TEXTO SUPERIOR ===== */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariant}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 items-end"
        >
          <motion.div variants={itemVariant} className="lg:col-span-7">
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-serif font-thin text-white leading-[0.9] tracking-tight">
              {titleFirst} <br />
              <span className="italic opacity-50">{titleRest}</span>
            </h2>
          </motion.div>

          <motion.div variants={itemVariant} className="lg:col-span-5">
            <p className="text-lg text-gray-400 font-sans font-light leading-relaxed text-justify">
              <span className="text-white uppercase tracking-widest text-xs block mb-4 border-b border-white/20 pb-4">
                {safeContent.intro}
              </span>
              {safeContent.description}
            </p>
          </motion.div>
        </motion.div>

        {/* ===== SERVICIOS ===== */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-r border-b border-white/10"
        >
          {services.map((service) => (
            <ServiceCard
              key={service.id}   // 🔥 KEY FIJA (NO traducida)
              {...service}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
