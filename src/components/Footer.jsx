import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Instagram, Facebook } from "lucide-react";
// import { translations } from "../constants/translations"; // Descomentar en tu proyecto

/* ================== ICONOS PERSONALIZADOS ================== */
const TikTokIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const XIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

/* ================== DATA ESTÁTICA (Redes Sociales) ================== */
const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, url: "#" },
  { name: "X", icon: XIcon, url: "#" },
  { name: "Instagram", icon: Instagram, url: "#" },
  { name: "Facebook", icon: Facebook, url: "#" },
  { name: "TikTok", icon: TikTokIcon, url: "#" },
];

/* ================== DATA POR DEFECTO (Fallback en Español) ================== */
const defaultFooterContent = {
  slogan: "Redefiniendo el estándar legal con precisión estratégica y compromiso absoluto.",
  exploreTitle: "Explorar",
  // Nota: Estas etiquetas coinciden con tu navegación.
  // En tu JSON de traducciones idealmente esto debería ser un array de strings o keys.
  exploreLinks: ['Firma', 'Legado', 'Metodología', 'El Consejo', 'Veredictos'],
  legalTitle: "Legal",
  legalLinks: ['Aviso de Privacidad', 'Términos de Servicio', 'Confidencialidad'],
  connectTitle: "Conectar",
  rights: "Todos los derechos reservados.",
  designed: "Diseñado para la excelencia."
};

const Footer = ({ content }) => {
  const currentYear = new Date().getFullYear();

  // 1. Fallback de seguridad
  const safeContent = content || defaultFooterContent;

  // 2. Aseguramos que las listas sean arrays
  const exploreLinks = Array.isArray(safeContent.exploreLinks) ? safeContent.exploreLinks : defaultFooterContent.exploreLinks;
  const legalLinks = Array.isArray(safeContent.legalLinks) ? safeContent.legalLinks : defaultFooterContent.legalLinks;

  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-16 relative z-10">
        
        {/* Fila Superior */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          {/* Marca & Slogan */}
          <div className="md:col-span-1">
            <h4 className="text-xs font-sans uppercase tracking-[0.2em] text-white/40 mb-6">
              Justice & Partners
            </h4>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              {safeContent.slogan}
            </p>
          </div>

          {/* Links Explorar */}
          <div>
            <h4 className="text-xs font-sans uppercase tracking-[0.2em] text-white/40 mb-6">
              {safeContent.exploreTitle}
            </h4>
            <ul className="space-y-4">
              {exploreLinks.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-lg font-serif font-light text-white hover:text-blue-400 transition-colors cursor-pointer block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Legal */}
          <div>
            <h4 className="text-xs font-sans uppercase tracking-[0.2em] text-white/40 mb-6">
              {safeContent.legalTitle}
            </h4>
            <ul className="space-y-4">
              {legalLinks.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-sm font-sans font-light text-gray-400 hover:text-white transition-colors cursor-pointer block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h4 className="text-xs font-sans uppercase tracking-[0.2em] text-white/40 mb-6">
              {safeContent.connectTitle}
            </h4>
            <div className="flex gap-4 flex-wrap">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={social.name} 
                    href={social.url}
                    aria-label={social.name}
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-110"
                  >
                    <Icon size={social.name === "X" ? 14 : 18} strokeWidth={1.5} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Marca Gigante */}
        <div className="border-t border-white/10 pt-10 mb-10">
          <h1 className="text-[12vw] leading-none font-serif font-thin text-center tracking-tighter text-white/5 select-none pointer-events-none">
            
          </h1>
        </div>

        {/* Fila Inferior */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs font-sans text-white/30 uppercase tracking-widest gap-4">
          <p>&copy; {currentYear} Justice & Partners. {safeContent.rights}</p>
          <p className="hidden md:block">{safeContent.designed}</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;