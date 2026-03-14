import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Facilities from './pages/Facilities';
import Sports from './pages/Sports';
import Contact from './pages/Contact';
import Results from './pages/Results';
import Apply from './pages/Apply';
import News from './pages/News';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/:section" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/academics/:section" element={<Academics />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/results" element={<Results />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<News />} />
          {/* Fallback for other routes */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}
