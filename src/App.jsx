import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header from './components/Header';
import BottomNav from './components/BottomNav';
import { ThemeProvider } from './context/ThemeContext';
import { PageTransition } from './components/PageTransition';

import Home from './pages/Home';
import Projects from './pages/Projects'

const AboutMe = lazy(() => import('./pages/AboutMe'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));

const App = () => {
  const location = useLocation();

  return (
    <ThemeProvider>
      <main>
        <Header />

        <AnimatePresence mode="wait">
          <Suspense
            fallback={
              <div className="loading-spinner">
                Loading...
              </div>
            }
          >
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <PageTransition>
                    <Home />
                  </PageTransition>
                }
              />

              <Route
                path="/about"
                element={
                  <PageTransition>
                    <AboutMe />
                  </PageTransition>
                }
              />

              <Route
                path="/services"
                element={
                  <PageTransition>
                    <Services />
                  </PageTransition>
                }
              />

              <Route
                path="/projects"
                element={
                  <PageTransition>
                    <Projects />
                  </PageTransition>
                }
              />

              <Route
                path="/contact"
                element={
                  <PageTransition>
                    <Contact />
                  </PageTransition>
                }
              />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </main>

      <BottomNav />
    </ThemeProvider>
  );
};

export default App;