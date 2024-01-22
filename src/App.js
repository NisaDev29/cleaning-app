import './App.css';
import Footer from './Components/Footer/Footer';
import Banner from './LandingPage/Banner/Banner';
import Hero from './LandingPage/Hero/Hero';
import Services from './LandingPage/Services/Services';
import Features from './LandingPage/Features/Features';
import Intro from './LandingPage/Intro/Intro';
import Testimonials from './LandingPage/Testimonials/Testimonials';
import Contact from './LandingPage/Contact/Contact';
import How from './LandingPage/How/How';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
      <Hero/>
      <Intro/>
      <Services/>
      <Features/>
      <Testimonials/>
      <How/>
      <Banner/>
      <Contact/>
      <Footer/>
      </div>
    </BrowserRouter>

  );
}

export default App;
