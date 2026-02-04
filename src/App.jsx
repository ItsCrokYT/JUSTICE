import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Hero from './components/Hero';

const App = () => {
  return (
    <LanguageProvider>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <div className="relative z-0 bg-black">
          <Hero />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;