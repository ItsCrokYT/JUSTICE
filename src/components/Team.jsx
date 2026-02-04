import React, { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Linkedin, Twitter, Mail, Award } from "lucide-react";
import { translations } from "../constants/translations";

// El componente Modal ahora recibe 'labels' para traducir títulos internos (Biografía, Hitos)
const MemberModal = ({ member, onClose, labels }) => {
  if (!member) return null;

  // Fallback por si los labels no llegan
  const bioLabel = labels?.bio || "Biografía";
  const achievementsLabel = labels?.achievements || "Hitos & Logros";

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="bg-[#0a0a0a] border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-none md:rounded-lg shadow-2xl relative flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors z-10 bg-black/50 rounded-full p-1"
        >
          <X size={24} />
        </button>

        <div className="w-full md:w-2/5 h-64 md:h-auto relative">
          <img 
            src={member.image || "https://via.placeholder.com/400"} // Fallback image
            alt={member.name}
            className="w-full h-full object-cover grayscale md:grayscale-0"
          />
        </div>

        <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col">
          <div>
            <h3 className="text-3xl md:text-4xl font-serif font-thin text-white mb-2">
              {member.name}
            </h3>
            <p className="text-blue-400 text-sm tracking-[0.2em] uppercase font-bold mb-6">
              {member.role} — {member.specialty}
            </p>

            <div className="w-12 h-[1px] bg-white/20 mb-8" />

            <h4 className="text-white/40 text-xs font-sans uppercase tracking-widest mb-3">{bioLabel}</h4>
            <p className="text-gray-300 font-light leading-relaxed mb-8 text-sm md:text-base">
              {member.bio}
            </p>

            <h4 className="text-white/40 text-xs font-sans uppercase tracking-widest mb-3">{achievementsLabel}</h4>
            <ul className="space-y-3 mb-10">
              {member.achievements && member.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-400 font-light text-sm">
                  <Award size={16} className="text-blue-500 mt-1 shrink-0" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto pt-6 border-t border-white/10 flex gap-6">
            {member.socials?.linkedin && (
              <a href={member.socials.linkedin} className="text-white/40 hover:text-white transition-colors">
                <Linkedin size={20} strokeWidth={1.5} />
              </a>
            )}
            {member.socials?.twitter && (
              <a href={member.socials.twitter} className="text-white/40 hover:text-white transition-colors">
                <Twitter size={20} strokeWidth={1.5} />
              </a>
            )}
            {member.socials?.email && (
              <a href={`mailto:${member.socials.email}`} className="text-white/40 hover:text-white transition-colors">
                <Mail size={20} strokeWidth={1.5} />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
};

const MemberRow = ({ name, role, specialty, image, index, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    viewport={{ once: true }}
    onClick={onClick}
    className="group flex flex-col md:flex-row items-center justify-between py-8 border-b border-white/10 cursor-pointer hover:bg-white/5 transition-colors px-4 -mx-4"
  >
    <div className="flex items-center gap-8 w-full md:w-1/2">
      <div className="relative overflow-hidden w-20 h-20 rounded-full border border-white/20 group-hover:border-white/50 transition-colors duration-500">
        <img 
          src={image || "https://via.placeholder.com/150"} 
          alt={name} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out transform group-hover:scale-110"
        />
      </div>
      <h3 className="text-2xl md:text-4xl font-serif font-thin text-gray-400 group-hover:text-white transition-colors duration-500">
        {name}
      </h3>
    </div>

    <div className="flex flex-col md:flex-row md:gap-12 w-full md:w-1/2 mt-6 md:mt-0 justify-between pl-[7rem] md:pl-0 items-center">
      <span className="text-xs uppercase tracking-[0.2em] text-white/40 group-hover:text-white/80 transition-colors">
        {role}
      </span>
      <div className="flex items-center gap-4 mt-2 md:mt-0">
        <span className="text-sm font-light text-gray-500 font-sans italic">
          {specialty}
        </span>
        <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity text-xs tracking-widest uppercase hidden md:block">
          + Ver Bio
        </span>
      </div>
    </div>
  </motion.div>
);

const Team = ({ content }) => {
  const [selectedMember, setSelectedMember] = useState(null);

  // Fallback TOTAL (nunca se queda vacío si falla la prop)
  const safeContent = content || translations.es.team;
  
  // Aseguramos que members sea un array
  const members = Array.isArray(safeContent.members) ? safeContent.members : [];

  // Reasignamos las imágenes porque las traducciones (JSON) no suelen llevar imports de imágenes.
  // IMPORTANTE: Aquí asumimos que el orden en translations.js es el mismo que tenías en el array original.
  // Si las URLs vienen en el JSON de translations (como vi en tu archivo), esto funcionará directo.
  // Si no, tendrías que mapear las imágenes manualmente aquí.
  // Dado tu archivo Translations.js, no vi el campo 'image', así que usaré un array auxiliar para las fotos 
  // OJO: Tu translations.js NO TIENE IMAGENES. Debemos inyectarlas aquí mapeando por índice.
  
  const memberImages = [
    "https://images.pexels.com/photos/7519017/pexels-photo-7519017.jpeg",
    "https://images.pexels.com/photos/5717546/pexels-photo-5717546.jpeg",
    "https://images.pexels.com/photos/4427625/pexels-photo-4427625.jpeg",
    "https://images.pexels.com/photos/8528853/pexels-photo-8528853.jpeg"
  ];
  
  const memberSocials = [
      { linkedin: "#", twitter: "#", email: "vance@justice.partners" },
      { linkedin: "#", twitter: "#", email: "sterling@justice.partners" },
      { linkedin: "#", twitter: "#", email: "thorne@justice.partners" },
      { linkedin: "#", twitter: "#", email: "connor@justice.partners" }
  ];

  // Combinamos la data traducida con las imágenes y redes sociales (que son estáticas/universales)
  const displayMembers = members.map((m, i) => ({
      ...m,
      image: memberImages[i] || "https://via.placeholder.com/256",
      socials: memberSocials[i] || {}
  }));

  return (
    <section className="bg-black py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        
        <div className="mb-20">
          <span className="text-xs font-sans text-white/30 uppercase tracking-[0.4em] block mb-6">
            {safeContent.kicker}
          </span>
          <h2 className="text-5xl md:text-7xl font-serif font-thin text-white">
            {safeContent.title}
          </h2>
        </div>

        <div className="flex flex-col border-t border-white/10">
          {displayMembers.map((member, index) => (
            <MemberRow 
              key={index} 
              index={index} 
              {...member} 
              onClick={() => setSelectedMember(member)}
            />
          ))}
        </div>

        <div className="mt-16 text-right">
          <a href="#contact" className="text-sm font-sans text-white border-b border-white pb-1 hover:opacity-50 transition-opacity uppercase tracking-widest">
            {safeContent.btn}
          </a>
        </div>

      </div>

      <AnimatePresence>
        {selectedMember && (
          <MemberModal 
            member={selectedMember} 
            onClose={() => setSelectedMember(null)} 
            labels={safeContent.modal}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Team;