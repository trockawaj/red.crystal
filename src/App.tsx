import Hero from './components/Hero';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';

function App() {
  return (
    <main className="min-h-screen bg-arch-gray font-sans text-arch-black overflow-x-hidden selection:bg-arch-black selection:text-white">
      <Hero />
      <About />
      <Works />
      <Contact />
    </main>
  );
}

export default App;
