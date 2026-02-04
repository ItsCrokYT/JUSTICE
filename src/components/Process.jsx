import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Search, Zap, Scale } from "lucide-react";
// import { translations } from "../constants/translations"; // Descomentar en tu proyecto real

/* ================== DATA ESTÁTICA (No cambia por idioma) ================== */
const staticStepsData = [
  { 
    icon: Search, 
    image: "https://images.pexels.com/photos/6069510/pexels-photo-6069510.jpeg" 
  },
  { 
    icon: Shield, 
    image: "https://images.pexels.com/photos/8369512/pexels-photo-8369512.jpeg" 
  },
  { 
    icon: Zap, 
    image: "https://images.pexels.com/photos/7841462/pexels-photo-7841462.jpeg" 
  },
  { 
    icon: Scale, 
    image: "https://images.pexels.com/photos/8112201/pexels-photo-8112201.jpeg" 
  },
];

// Fallback por seguridad (Contenido en Español por defecto)
const defaultProcessContent = {
  kicker: "Metodología",
  title: "Arquitectura Legal.",
  caseLabel: "Caso de Estudio",
  steps: [
    {
      id: "01",
      title: "Diagnóstico Forense",
      description: "Análisis profundo de la situación legal y de reputación.",
      caseStudy: { client: "Multinacional Farmacéutica", result: "Identificación temprana de brechas de cumplimiento." },
    },
    {
      id: "02",
      title: "Arquitectura Estratégica",
      description: "Diseño de una ruta de defensa personalizada y blindaje de activos.",
      caseStudy: { client: "Grupo Financiero Alpha", result: "Estructuración de defensa preventiva ante fusión hostil." },
    },
    {
      id: "03",
      title: "Ejecución Quirúrgica",
      description: "Despliegue de acciones legales y mediáticas de alto impacto.",
      caseStudy: { client: "Tech Giant Silicon Valley", result: "Litigio ganado en tiempo récord (3 meses)." },
    },
    {
      id: "04",
      title: "Resolución & Legado",
      description: "Cierre del conflicto y restauración de la normalidad operativa.",
      caseStudy: { client: "Familia Empresaria Forbes", result: "Acuerdo confidencial y protección patrimonial total." },
    },
  ]
};

const Process = ({ content }) => {
  const [activeStep, setActiveStep] = useState(0);

  // 1. Si 'content' es undefined, usa el default (Español)
  const safeContent = content || defaultProcessContent;

  // 2. Fusionar texto traducido con íconos/imágenes estáticos
  const displaySteps = safeContent.steps?.map((step, index) => ({
    ...step,
    ...(staticStepsData[index] || staticStepsData[0]) // Fallback de seguridad
  })) || [];

  const caseLabel = safeContent.caseLabel || "Caso de Estudio";

  return (
    <section
      id="process"
      className="relative z-10 bg-black py-24 sm:py-40 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-16">

        {/* ===== HEADER ===== */}
        <div className="mb-16 sm:mb-24">
          <span className="text-xs font-sans text-white/30 uppercase tracking-[0.4em] block mb-6">
            {safeContent.kicker}
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif font-thin text-white">
            {safeContent.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24">

          {/* ===== LEFT LIST ===== */}
          <div className="flex flex-col justify-center">
            {displaySteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.id || index}
                  onMouseEnter={() => setActiveStep(index)}
                  onClick={() => setActiveStep(index)}
                  className={`group cursor-pointer border-l-2 pl-6 sm:pl-8 py-7 sm:py-8 transition-all duration-500 ${
                    activeStep === index
                      ? "border-blue-500 bg-white/5 opacity-100"
                      : "border-white/10 opacity-40 hover:opacity-70"
                  }`}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-xs font-sans font-bold tracking-widest text-blue-500">
                      {step.id}
                    </span>
                    {Icon && (
                      <Icon 
                        size={24} 
                        className={`transition-colors ${activeStep === index ? 'text-blue-400' : 'text-white'}`} 
                      />
                    )}
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-light text-white">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-sm md:text-base font-sans font-light text-gray-400 max-w-md">
                    {step.description}
                  </p>

                  {/* ===== MOBILE EXPAND ===== */}
                  <motion.div
                    initial={false}
                    animate={{
                      opacity: activeStep === index ? 1 : 0,
                      maxHeight: activeStep === index ? 380 : 0,
                      marginTop: activeStep === index ? 24 : 0,
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="lg:hidden overflow-hidden"
                  >
                    <div className="relative h-56 w-full rounded-xl overflow-hidden border border-white/10 shadow-lg mb-6">
                      <img
                        src={step.image}
                        alt="Case Study"
                        className="w-full h-full object-cover grayscale opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>

                    <div className="pl-3 border-l border-blue-500/30">
                      <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-blue-400 block mb-2">
                        {caseLabel}
                      </span>
                      <h4 className="text-lg font-serif font-light text-white mb-2">
                        {step.caseStudy.client}
                      </h4>
                      <p className="text-xs font-sans text-gray-300 font-light flex items-start gap-2">
                        <ArrowRight size={14} className="text-blue-500 mt-0.5" />
                        {step.caseStudy.result}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* ===== RIGHT STICKY (DESKTOP) ===== */}
          <div className="hidden lg:block relative h-[600px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl sticky top-32">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <div className="absolute inset-0 bg-black/50 z-10" />
              <img
                src={displaySteps[activeStep].image}
                alt="Case Study"
                className="w-full h-full object-cover grayscale opacity-60"
              />

              <div className="absolute bottom-0 left-0 w-full p-10 z-20">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-[1px] bg-blue-500" />
                  <span className="text-xs font-sans uppercase tracking-[0.2em] text-blue-400">
                    {caseLabel}
                  </span>
                </div>

                <h4 className="text-3xl font-serif font-light text-white mb-2">
                  {displaySteps[activeStep].caseStudy.client}
                </h4>
                <p className="text-sm font-sans text-gray-300 font-light flex items-center gap-2">
                  <ArrowRight size={16} className="text-blue-500" />
                  {displaySteps[activeStep].caseStudy.result}
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;