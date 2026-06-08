import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import ServicePage from './pages/ServicePage'
import Work from './pages/Work'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import Footer from './components/Footer'

const Contact = lazy(() => import('./pages/Contact'))

function App() {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden font-sans relative">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route
            path="/contact"
            element={
              <Suspense
                fallback={
                  <div className="flex min-h-[60vh] items-center justify-center bg-black text-sm text-white/60">
                    Loading contact form...
                  </div>
                }
              >
                <Contact />
              </Suspense>
            }
          />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/services/:slug" element={<ServicePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
