import { MotionConfig, motion as Motion } from 'framer-motion';
import Navbar from './pages/Navbar';
import Hero from './pages/hero';
import Mission, { Services } from './pages/Mission';
import Projects from './pages/projects';
import Experience from './pages/Experience';
import Certification from './pages/Certification';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import SmoothScroll from './components/SmoothScroll';
import ScrollProgress from './components/ScrollProgress';

const App = () => {
  return (
    <MotionConfig reducedMotion="user">
      <SmoothScroll />
      <ScrollProgress />

      <div className="app">
        <Motion.div
          id="top"
          className="site-shell"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.35, ease: [0.32, 0.02, 0.15, 1] }}
        >
          <Navbar />

          <main>
            <Hero />
            <Mission />
            <Services />
            <Projects />
            <Experience />
            <Certification />
            <Contact />
          </main>

          <Footer />
        </Motion.div>
      </div>
    </MotionConfig>
  );
};

export default App;
