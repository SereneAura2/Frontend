import { FC, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";
import { injectSpeedInsights } from "@vercel/speed-insights";
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './page/Home';
import About from './page/About';
import Services from './page/Services';
import Contact from './page/Contact';
import Booking from '@/page/Booking';
import Supplies from '@/page/Supplies';
import Review from '@/page/Review';
import Blog from '@/page/Blog';
import Refer from '@/page/Refer';
import Locations from '@/page/Locations';
import Tips from '@/page/Tips';
import FAQ from '@/page/FAQ';
import Terms from '@/page/Terms';
import Privacy from '@/page/Privacy';

// Create router with future flags
const router = {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
};

const App: FC = () => {
  useEffect(() => {
    injectSpeedInsights();
  }, []);

  return (
    <Router future={router.future}>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/supplies" element={<Supplies />} />
            <Route path="/review" element={<Review />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/refer" element={<Refer />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/tips" element={<Tips />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
        <Analytics />
      </div>
    </Router>
  );
};

export default App; 