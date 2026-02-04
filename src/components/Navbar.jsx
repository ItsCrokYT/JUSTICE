import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // 1. Consumimos el contexto aquí
  const { language, toggleLanguage, t } = useLanguage();

  // 2. Usamos 't' para los textos del menú
  const navLinks = [
    { id: "about", title: t.nav.about, number: "01" },
    { id: "stats", title: t.nav.stats, number: "02" },
    { id: "process", title: t.nav.process, number: "03" },
    { id: "team", title: t.nav.team, number: "04" },
    { id: "feedbacks", title: t.nav.feedbacks, number: "05" },
    { id: "contact", title: t.nav.contact, number: "06" },
  ];

  // Detectar scroll en el contenedor correcto (Puente de Escucha)
  useEffect(() => {
    // Función para encontrar el contenedor de scroll de Drei/R3F
    const findScrollContainer = () => {
      // Buscamos cualquier elemento interno conocido para encontrar su padre con scroll
      const internalElement = document.getElementById('about') || document.getElementById('team');
      if (!internalElement) return window;

      let parent = internalElement.parentElement;
      while (parent) {
        const style = window.getComputedStyle(parent);
        // El contenedor de Drei suele tener overflow 'auto' o 'scroll'
        if (style.overflowY === 'auto' || style.overflowY === 'scroll') {
          return parent;
        }
        parent = parent.parentElement;
      }
      return window;
    };

    const scrollContainer = findScrollContainer();
    
    const handleScroll = () => {
      // Si encontramos el contenedor, usamos su scrollTop, si no, fallback a window
      const scrollTop = scrollContainer === window ? window.scrollY : scrollContainer.scrollTop;
      setScrolled(scrollTop > 50);
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    
    // Fallback: escuchar window también por si acaso
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Se ejecuta una vez al montar

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    
    if (element) {
      // --- EL PUENTE (BRIDGE) ---
      // Como el scroll está aislado dentro del Canvas (Drei ScrollControls), 
      // window.scrollTo no funciona. Debemos encontrar el contenedor padre que tiene el scroll.
      let parent = element.parentElement;
      let scrollContainer = null;

      // Recorremos hacia arriba hasta encontrar el div que tiene scroll
      while (parent) {
        const style = window.getComputedStyle(parent);
        if (style.overflowY === 'auto' || style.overflowY === 'scroll') {
          scrollContainer = parent;
          break;
        }
        parent = parent.parentElement;
      }

      if (scrollContainer) {
        // Si encontramos el contenedor de Drei, hacemos scroll en él
        const top = element.offsetTop;
        scrollContainer.scrollTo({ top: top, behavior: "smooth" });
      } else {
        // Fallback tradicional
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    // Lógica similar para el logo (ir arriba)
    const aboutSection = document.getElementById('about');
    let scrollContainer = null;
    
    if (aboutSection) {
       let parent = aboutSection.parentElement;
       while (parent) {
         const style = window.getComputedStyle(parent);
         if (style.overflowY === 'auto' || style.overflowY === 'scroll') {
           scrollContainer = parent;
           break;
         }
         parent = parent.parentElement;
       }
    }

    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${
          scrolled ? "bg-black/90 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-16 flex justify-between items-center">
          <a 
            href="#" 
            className="text-white text-xl font-light tracking-widest z-[1000] relative mix-blend-difference"
            onClick={handleLogoClick}
          >
            <span className="font-serif italic text-2xl">J</span>USTICE
          </a>

          <div className="flex items-center gap-6 z-[1000]">
            {/* BOTÓN DE IDIOMA QUE ACTIVA EL CAMBIO */}
            <button
              onClick={toggleLanguage}
              className="text-white text-xs font-sans font-bold tracking-widest hover:text-gray-300 transition-colors uppercase flex items-center gap-2 mix-blend-difference cursor-pointer"
            >
              <Globe size={16} />
              <span>{language.toUpperCase()}</span>
            </button>

            <button onClick={() => setIsOpen(!isOpen)} className="text-white mix-blend-difference">
              {isOpen ? <X size={32} strokeWidth={1} /> : <Menu size={32} strokeWidth={1} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[998] bg-black flex flex-col items-center justify-center"
          >
            <ul className="flex flex-col gap-8 text-center">
              {navLinks.map((link, index) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className="block text-4xl font-serif font-thin text-white hover:text-gray-300"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;