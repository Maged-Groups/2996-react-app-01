import TopNavbar from './layout/TopNavbar'
import Footer from './layout/Footer'

import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/Contact';
import { useState } from 'react';
import Services from './pages/Services';

export default function App() {




  return (
    <div className="min-h-screen">
      <TopNavbar />
      <Services />
      <Footer />
    </div>
  )
}