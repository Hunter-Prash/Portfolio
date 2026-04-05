import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParticleField from './components/ParticleField';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-950 to-black text-zinc-50 font-sans selection:bg-blue-500/30 relative">
      <ParticleField />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
      </main>
      <Contact />
    </div>
  );
}

export default App;
