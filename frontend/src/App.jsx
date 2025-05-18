import Hero from './pages/Hero';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import MyWork from './pages/MyWork';
import './App.css';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar id="navbar" />
      <main className="flex-grow">
        <Hero />
        <AboutMe id="aboutme"/>
        <MyWork id="mywork" />
      </main>
      <Footer id="footer" />
    </div>
  );
}

export default App;