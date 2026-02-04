import React from "react";
import { motion } from "framer-motion";
// import { translations } from "../constants/translations"; // Descomentar en tu proyecto

/* ================== DATA POR DEFECTO (Fallback en Español) ================== */
const defaultFeedbacksContent = {
  kicker: "Veredictos",
  items: [
    {
      text: "En un momento crítico, su estrategia no solo contuvo el daño, sino que revirtió la situación a nuestro favor.",
      name: "Roberto S. Mendoza",
      role: "Director General",
      company: "Grupo Alpha",
    },
    {
      text: "Precisión quirúrgica en propiedad intelectual. Protegieron nuestro activo más valioso con una eficacia absoluta.",
      name: "Elena V. Kogan",
      role: "CEO",
      company: "BioTech Innovations",
    },
    {
      text: "Operaron con una discreción que superó cualquier expectativa. Mi confianza en ellos es total e inquebrantable.",
      name: "Confidencial",
      role: "Cliente Privado",
      company: "Sector Financiero",
    },
  ]
};

const FeedbackCard = ({ index, text, name, role, company }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1, delay: index * 0.2 }}
    className="flex flex-col justify-between h-full py-8 md:py-0 md:px-12 first:pl-0 border-b md:border-b-0 md:border-r border-white/10 last:border-r-0"
  >
    <div className="mb-10">
      <span className="text-6xl font-serif text-white/10 block mb-4">“</span>
      <p className="text-xl md:text-2xl font-serif font-light text-gray-300 leading-relaxed">
        {text}
      </p>
    </div>

    <div>
      <p className="text-white font-sans text-sm tracking-wide uppercase mb-1">
        {name}
      </p>
      <p className="text-white/40 font-sans text-xs uppercase tracking-widest">
        {role}, {company}
      </p>
    </div>
  </motion.div>
);

const Feedbacks = ({ content }) => {
  // 1. Fallback de seguridad
  const safeContent = content || defaultFeedbacksContent;

  // 2. Aseguramos que items sea un array
  const testimonials = Array.isArray(safeContent.items) ? safeContent.items : [];

  return (
    <section className="bg-black py-32 relative z-0">
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        
        <div className="mb-20 flex items-center gap-4">
          <div className="w-12 h-[1px] bg-white/20" />
          <h2 className="text-sm font-sans uppercase tracking-[0.3em] text-white/60">
            {safeContent.kicker}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
          {testimonials.map((testimonial, index) => (
            <FeedbackCard key={index} index={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedbacks;