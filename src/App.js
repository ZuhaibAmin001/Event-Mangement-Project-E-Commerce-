import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import FooterSec1 from './Components/FooterSec1';
import About from './Components/About';
import Contact from './Components/Contact';
import Wedding from './Components/Wedding';
import Concerts from './Components/Concerts';
import ConcertConfirmation from './Components/ConcertConfirmation';
import WeddingConfirmation from './Components/WeddingConfirmaton';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HeroSection/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wedding" element={<Wedding />} />
          <Route path="/concert" element={<Concerts />} />
          <Route path="/concert-confirmation" element={<ConcertConfirmation />} />
          <Route path="/wedding-confirmation" element={<WeddingConfirmation />} />
        </Routes>
        
        <FooterSec1 />
      </div>
    </Router>
  );
}

export default App;
