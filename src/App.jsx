import TopNavbar from './layout/TopNavbar'
import Footer from './layout/Footer'

// Pages
import Pages from './pages';

import { useState } from 'react';

console.log('App.jsx')

export default function App() {

  return (
    <div className="min-h-screen">
      <TopNavbar />

      <Pages />

      <Footer />
    </div>
  )
}