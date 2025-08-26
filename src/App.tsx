import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BalkanGrill from './pages/BalkanGrill';
import ArtShare from './pages/ArtShare';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoadingComplete = () => setIsLoading(false);

  if (isLoading) return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;

  return (
    <BrowserRouter basename="/LjutviCreative">
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
              <Header />
              <Hero />
              <About />
              <Services />
              <Portfolio />
              <Contact />
              <Footer />
            </div>
          }
        />
        <Route path="/balkan-grill" element={<BalkanGrill />} />
        <Route path="/artshare" element={<ArtShare />} />
        {/* filets de sécurité */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
