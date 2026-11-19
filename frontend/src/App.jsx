import Hero from './pages/Hero';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import MyWork from './pages/MyWork';
import MobileWarningModal from './components/MobileWarningModal';
import { Analytics } from '@vercel/analytics/react';
import './App.css';

function App() {
  return (
    <div className="flex flex-col min-h-screen page-enter">
      <MobileWarningModal />
      <Navbar id="navbar" />
      <main className="flex-grow">
        <Hero id="hero"/>
        <AboutMe id="aboutme"/>
        <MyWork id="mywork" />
      </main>
      <Footer id="footer" />
      <Analytics />
    </div>
  );
}

export default App;