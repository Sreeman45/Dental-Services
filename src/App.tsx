
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import Footer from './components/footer';

function App() {

  return (
       <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 text-gray-900">
        <Header />
        <main className="flex-grow animate-fade-in">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
