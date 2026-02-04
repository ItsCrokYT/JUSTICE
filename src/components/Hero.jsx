import { Suspense, useState, useEffect, useContext } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll, Html, useProgress, useScroll } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { Scale } from 'lucide-react';
import Experience from './Experience';
import Navbar from './Navbar';
import About from './About'; 
import Stats from './Stats';
import Process from './Process'; 
import Team from './Team';       
import Feedbacks from './Feedbacks'; 
import Contact from './Contact'; 
import Footer from './Footer'; 
import { heroContent } from '../constants';
import { useLanguage, LanguageContext } from '../context/LanguageContext';

const HERO_PAGES = 3;

/* ---------- LOADER (Pantalla de Carga) ---------- */
const IntroScreen = ({ onComplete }) => {
  const { progress } = useProgress();
  const { t } = useLanguage();
  const loadingText = t?.hero?.loading || "CARGANDO";
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMinTimeElapsed(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (minTimeElapsed && progress === 100) onComplete();
  }, [minTimeElapsed, progress, onComplete]);

  return (
    <motion.div className="fixed inset-0 z-[99999] bg-black flex flex-col items-center justify-center" exit={{ opacity: 0 }}>
      <div className="relative flex flex-col items-center">
        <Scale size={64} className="mb-8 text-white" strokeWidth={1} />
        <h1 className="text-2xl font-serif font-thin text-white tracking-[0.2em] mb-8">JUSTICE & PARTNERS</h1>
        <div className="w-64 h-[1px] bg-white/20 relative overflow-hidden">
          <motion.div className="absolute top-0 left-0 h-full bg-white" initial={{ width: 0 }} animate={{ width: `${progress}%` }} />
        </div>
        <p className="text-xs font-sans text-white/40 mt-4 tracking-widest uppercase">{loadingText}... {progress.toFixed(0)}%</p>
      </div>
    </motion.div>
  );
};

const CanvasLoader = () => null;

/* ---------- BOTÓN DE NAVEGACIÓN ---------- */
const NextSectionButton = ({ nextPage, totalPages }) => {
  const scroll = useScroll();
  const { t } = useLanguage();
  const discoverText = t?.hero?.discover || "Descubrir";
  const scrollText = t?.hero?.scroll || "Siguiente";

  const handleClick = () => {
    const pageHeight = scroll.el.scrollHeight / totalPages;
    const targetTop = pageHeight * nextPage;
    scroll.el.scrollTo({ top: targetTop, behavior: 'smooth' });
  };

  return (
    <motion.div className="absolute bottom-10 left-0 w-full flex flex-col items-center justify-center cursor-pointer z-10 mix-blend-difference" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} onClick={handleClick}>
      <div className="flex flex-col items-center group gap-4">
        <span className="text-[10px] tracking-[0.4em] text-white uppercase font-light group-hover:font-normal transition-all duration-500">
          {nextPage === HERO_PAGES ? discoverText : scrollText}
        </span>
        <div className="w-[1px] h-16 bg-white relative overflow-hidden">
          <motion.div className="absolute top-0 left-0 w-full h-full bg-white" initial={{ y: '-100%' }} animate={{ y: '100%' }} transition={{ duration: 2, repeat: Infinity }} />
        </div>
      </div>
    </motion.div>
  );
};

/* ---------- COMPONENTE PRINCIPAL HERO ---------- */
const Hero = () => {
  const [totalPages, setTotalPages] = useState(9);
  const [showIntro, setShowIntro] = useState(true);
  
  const languageContextValue = useContext(LanguageContext);
  const t = languageContextValue?.t;
  const slides = t?.hero?.slides || heroContent;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setTotalPages(15.5); 
      else if (window.innerWidth < 1024) setTotalPages(15.5);
      else setTotalPages(11.1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      <AnimatePresence>
        {showIntro && <IntroScreen onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      <Navbar />

      <Canvas camera={{ position: [0, 0, 5], fov: 30 }} shadows gl={{ preserveDrawingBuffer: true, antialias: true }}>
        <LanguageContext.Provider value={languageContextValue}>
          <ScrollControls pages={totalPages} damping={0.2}>
            <Suspense fallback={<CanvasLoader />}>
              <Experience totalPages={totalPages} heroPages={HERO_PAGES} />
            </Suspense>

            <Scroll html style={{ width: '100%', height: '100%' }}>
              {/* SLIDES DEL HERO 3D */}
              {slides.map((item, index) => (
                <div key={item.id} className="w-full h-screen flex flex-col justify-center px-8 md:px-24 relative">
                  <div className="max-w-4xl">
                    <div className="w-12 h-[1px] bg-white mb-6" />
                    <h3 className="text-xs md:text-sm tracking-[0.5em] text-white uppercase mb-4">{item.phrase}</h3>
                    {item.mainTitle && <h1 className="text-5xl md:text-8xl font-thin text-white mb-8 leading-[0.9]">{item.mainTitle}</h1>}
                    <p className="text-base md:text-lg text-white font-light max-w-lg">{item.subtext}</p>
                  </div>
                  {index < HERO_PAGES && <NextSectionButton nextPage={index + 1} totalPages={totalPages} />}
                </div>
              ))}

              {/* SECCIONES DE CONTENIDO TRADUCIDAS */}
              <div id="about">
                <About content={t?.about} />
              </div>
              
              <div id="stats">
                <Stats content={t?.stats} />
              </div> 

              <div id="process">
                <Process  content={t?.process} />
              </div>

              {/* AQUÍ PASAMOS LA PROP CONTENT A TEAM */}
              <div id="team">
                <Team content={t?.team} />
              </div>

              <div id="feedbacks">
                <Feedbacks content={t?.feedbacks} />
              </div>

              <div id="contact">
                <Contact content={t?.contact} />
              </div>
<Footer content={t?.footer} />

              <Footer />
            </Scroll>
          </ScrollControls>
        </LanguageContext.Provider>
      </Canvas>
    </section>
  );
};

export default Hero;