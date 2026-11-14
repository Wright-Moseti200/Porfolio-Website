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
import NotFound from './pages/NotFound';

// The site is a single page with in-page anchors, so any path other than "/"
// does not exist. Netlify serves public/404.html for these in production; this
// check covers local dev/preview and any other static host.
function isKnownPath() {
  const path = window.location.pathname
    .replace(/\/index\.html?$/i, '')
    .replace(/\/+$/, '');
  return path === '';
}

const App = () => {
  if (!isKnownPath()) {
    return (
      <MotionConfig reducedMotion="user">
        <NotFound />
      </MotionConfig>
    );
  }

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
