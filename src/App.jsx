import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import RecentEvents from './components/home/RecentEvents';
import GallerySection from './components/home/GallerySection';
import KnowMore from './components/home/KnowMore';
import StarBackground from './components/layout/StarBackground';
import EventHero from './components/home/EventHero';
import EventRecent from './components/home/EventRecent';
import EventAstro from './components/home/EventAstro';
import EventGalley from './components/home/EventGalley';
import PodHero from './components/home/PodHero';
import PodSectionOne from './components/home/PodSectionOne';
import PodSectionTwo from './components/home/PodSectionTwo';
import AboutHero from './components/home/AboutHero';
import AboutTeam from './components/home/AboutTeam';

const Events = () => <div className="pt-24 min-h-screen bg-space-black text-white text-center">
  <EventHero />
  <EventRecent />
  <EventAstro />
  <EventGalley />
</div>;
const Podcasts = () => <div className="min-h-screen bg-space-black text-white text-center">
  <PodHero />
  <PodSectionOne />
  <PodSectionTwo />
</div>;
const About = () => <div className="min-h-screen bg-space-black text-white text-center">
  <AboutHero />
  <AboutTeam />
</div>;

function App() {
  return (
    <Router>
      <div className="bg-space-black min-h-screen relative">
        <StarBackground />
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <RecentEvents />
              <GallerySection />
              <KnowMore />
            </main>
          } />
          <Route path="/events" element={<Events />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;