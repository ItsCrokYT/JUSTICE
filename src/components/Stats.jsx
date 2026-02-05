import React from "react";
import { motion } from "framer-motion";
// import { translations } from "../constants/translations"; // Descomentar en tu proyecto

/* ================== DATA POR DEFECTO ================== */
const defaultStatsContent = {
  title: "Resultados",
  subtitle: "Tangibles.",
  audit: "Métricas de desempeño auditadas 2024-2025",
  items: [
    { label: "Tasa de Éxito", description: "En litigios corporativos.", value: 98, suffix: "%" },
    { label: "Capital Protegido", description: "Activos recuperados.", value: 500, suffix: "M+" },
    { label: "Años de Legado", description: "Definiendo precedentes.", value: 25, suffix: "+" },
    { label: "Premios Globales", description: "Excelencia reconocida.", value: 120, suffix: "" },
  ]
};

const StatItem = ({ value, suffix, label, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="flex flex-col border-l border-white/20 pl-6 sm:pl-8 py-2"
  >
    <span className="text-5xl sm:text-6xl md:text-7xl font-serif font-thin text-white mb-2 sm:mb-4 block">
      {value}{suffix}
    </span>
    <h4 className="text-sm font-sans font-bold uppercase tracking-widest text-white mb-1">
      {label}
    </h4>
    <p className="text-xs sm:text-sm font-sans font-light text-gray-400">
      {description}
    </p>
  </motion.div>
);

const Stats = ({ content }) => {
  const safeContent = content || defaultStatsContent;

  return (
    // CAMBIO CLAVE: Aumentamos padding superior en móvil (pt-32 -> pt-40) para separar del About
    <section 
      id="stats" 
      className="relative z-10 bg-black pt-40 pb-24 sm:py-32 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        
        {/* ENCABEZADO DE SECCIÓN */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl sm:text-7xl md:text-8xl font-serif font-thin text-white leading-[0.9] tracking-tight"
            >
              {safeContent.title} <br />
              {/* Ajustamos opacidad y estilo del subtítulo */}
              <span className="italic opacity-50 text-white">{safeContent.subtitle}</span>
            </motion.h2>
          </div>

          <div className="md:text-right max-w-xs">
            <div className="w-12 h-[1px] bg-white/30 mb-4 md:ml-auto" />
            <p className="text-xs font-sans uppercase tracking-[0.2em] text-white/50 leading-relaxed">
              {safeContent.audit}
            </p>
          </div>
        </div>

        {/* GRID DE MÉTRICAS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8">
          {safeContent.items?.map((item, index) => (
            <StatItem key={index} index={index} {...item} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Stats;