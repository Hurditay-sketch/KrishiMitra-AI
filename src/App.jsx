import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Weather from './components/Weather';
import Store from './components/Store';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900/20 to-slate-900 text-white">
      <Navbar />
      <Hero />
      <Features />
      <Weather />
      <Store />
      <Footer />
    </div>
  );
}

export default App;