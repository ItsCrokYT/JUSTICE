import React, { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
// import { translations } from "../constants/translations"; // Descomentar en tu proyecto

/* ================== DATA POR DEFECTO (Fallback en Español) ================== */
const defaultContactContent = {
  kicker: "Iniciar Protocolo",
  title: "Defendamos",
  subtitle: "Tu Legado.",
  btn: "Agendar Consulta",
  
  // Campos del formulario
  formTitle: "Solicitud de Consulta",
  formName: "Nombre Completo",
  formEmail: "Correo Corporativo",
  formMessage: "Breve descripción del caso",
  formBtn: "Enviar Solicitud",
  formSubmitting: "Procesando...",
  formSuccessTitle: "Solicitud Confirmada",
  formSuccess: "Solicitud recibida. El consejo revisará su caso.",
  formNewRequest: "Enviar nueva consulta",
  
  // Info de contacto
  hq: "Sede",
  address: "Torre Virreyes, Piso 24",
  city: "Ciudad de México",
  contactinfo: "Contacto",
  legal: "Aviso Legal"
};

/* ================== MODAL CON FORMULARIO ================== */
const ContactModal = ({ isOpen, onClose, content }) => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulación de envío
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormState({ name: "", email: "", message: "" });
    }, 2000);
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={onClose}
        >
          {/* Estilos para forzar el color en inputs y autocompletado */}
          <style>{`
            input:-webkit-autofill,
            input:-webkit-autofill:hover, 
            input:-webkit-autofill:focus, 
            textarea:-webkit-autofill,
            textarea:-webkit-autofill:hover,
            textarea:-webkit-autofill:focus {
              -webkit-box-shadow: 0 0 0px 1000px #0a0a0a inset;
              -webkit-text-fill-color: white !important;
              caret-color: white;
              transition: background-color 5000s ease-in-out 0s;
            }
            ::placeholder { color: rgba(255, 255, 255, 0.5) !important; opacity: 1; }
          `}</style>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="bg-[#0a0a0a] border border-white/20 w-full max-w-lg p-8 md:p-12 relative shadow-2xl text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <h3 className="text-3xl font-serif font-light text-white mb-10">
              {content.formTitle}
            </h3>

            <AnimatePresence mode="wait">
              {isSent ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-10 text-center"
                >
                  <div className="w-16 h-[1px] bg-white/50 mx-auto mb-6" />
                  <p className="text-xl font-serif text-white mb-2">{content.formSuccessTitle}</p>
                  <p className="text-sm text-gray-400 font-sans font-light mb-8">{content.formSuccess}</p>
                  <button 
                    onClick={() => setIsSent(false)}
                    className="text-xs uppercase tracking-widest text-blue-400 hover:text-white transition-colors border-b border-blue-400 hover:border-white pb-1"
                  >
                    {content.formNewRequest}
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  <div className="group">
                    <input 
                      type="text" 
                      name="name" 
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder={content.formName}
                      className="w-full bg-transparent border-b border-white/30 py-3 text-white focus:outline-none focus:border-white transition-colors duration-500 font-light placeholder:text-white/50 font-serif text-lg"
                    />
                  </div>
                  <div className="group">
                    <input 
                      type="email" 
                      name="email" 
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder={content.formEmail}
                      className="w-full bg-transparent border-b border-white/30 py-3 text-white focus:outline-none focus:border-white transition-colors duration-500 font-light placeholder:text-white/50 font-serif text-lg"
                    />
                  </div>
                  <div className="group">
                    <textarea 
                      name="message" 
                      required
                      rows="3"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder={content.formMessage}
                      className="w-full bg-transparent border-b border-white/30 py-3 text-white focus:outline-none focus:border-white transition-colors duration-500 font-light placeholder:text-white/50 font-serif text-lg resize-none"
                    />
                  </div>

                  <div className="pt-6 text-right">
                    <motion.button
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02, backgroundColor: "#ffffff", color: "#000000" }}
                      whileTap={{ scale: 0.98 }}
                      className="border border-white text-white px-10 py-4 text-xs font-sans font-bold tracking-[0.2em] uppercase transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? content.formSubmitting : content.formBtn} 
                    </motion.button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

/* ================== COMPONENTE PRINCIPAL ================== */
const Contact = ({ content }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fusionamos el contenido recibido con el default para evitar valores vacíos
  const safeContent = { ...defaultContactContent, ...content };

  return (
    <section className="bg-black py-32 md:py-48 relative z-10 overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* ===== BLOQUE IZQUIERDO (CTA) ===== */}
          <div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-white/40 tracking-[0.4em] text-xs font-sans uppercase mb-8"
            >
              {safeContent.kicker}
            </motion.p>
            
            <motion.h2 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl lg:text-9xl font-serif font-thin text-white leading-[0.9] tracking-tighter mb-12"
            >
              {safeContent.title} <br />
              <span className="italic opacity-50">{safeContent.subtitle}</span>
            </motion.h2>

            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.02, backgroundColor: "#ffffff", color: "#000000" }}
              whileTap={{ scale: 0.98 }}
              className="group border border-white text-white px-12 py-5 text-xs font-sans font-bold tracking-[0.2em] uppercase transition-all duration-300"
            >
              {safeContent.btn}
            </motion.button>
          </div>

          {/* ===== BLOQUE DERECHO (INFO) ===== */}
          <div className="flex flex-col justify-end lg:items-end mt-12 lg:mt-0">
            <div className="text-left lg:text-right space-y-12">
              
              {/* DIRECCIÓN */}
              <div>
                <h4 className="text-white/40 text-xs font-sans uppercase tracking-[0.2em] mb-4">
                  {safeContent.hq}
                </h4>
                <p className="text-2xl font-serif font-light text-white leading-relaxed">
                  {safeContent.address}<br />
                  {safeContent.city}
                </p>
              </div>

              {/* CONTACTO DIRECTO */}
              <div>
                <h4 className="text-white/40 text-xs font-sans uppercase tracking-[0.2em] mb-4">
                  {safeContent.contactinfo}
                </h4>
                <a href="mailto:privado@justice.partners" className="block text-xl font-serif font-light text-white hover:opacity-50 transition-opacity mb-2">
                  privado@justice.partners
                </a>
                <a href="tel:+525512345678" className="block text-xl font-serif font-light text-white hover:opacity-50 transition-opacity">
                  +52 (55) 1234 5678
                </a>
              </div>

              {/* LINKS LEGALES */}
              <div className="pt-12 w-full flex justify-start lg:justify-end gap-12">
                <a href="#" className="text-white/40 hover:text-white text-xs font-sans uppercase tracking-widest transition-colors">LinkedIn</a>
                <a href="#" className="text-white/40 hover:text-white text-xs font-sans uppercase tracking-widest transition-colors">Twitter</a>
                <a href="#" className="text-white/40 hover:text-white text-xs font-sans uppercase tracking-widest transition-colors">
                  {safeContent.legal}
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* RENDERIZADO DEL MODAL */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        content={safeContent} 
      />
    </section>
  );
};

export default Contact;