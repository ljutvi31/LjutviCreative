import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
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
    <Router>
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
      </Routes>
    </Router>
  );
}

export default App;
