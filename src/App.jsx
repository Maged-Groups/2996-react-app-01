import TopNavbar from './layout/TopNavbar'
import Footer from './layout/Footer'

// Pages
import Pages from './pages';


// Toastify
import { ToastContainer } from 'react-toastify';

console.log('App.jsx')

export default function App() {
  return (
    <div className="min-h-screen">


      <div>

      </div>



      <TopNavbar />

      <Pages />

      <Footer />

      {/* Libraries */}
      <ToastContainer position='top-center' autoClose={5000} closeOnClick />
    </div>
  )
}