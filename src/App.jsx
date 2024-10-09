import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./App.css";
import Great from './Pages/great'
import About from "./Pages/About/About";
import Contact from './Pages/Contact/Contact';
import Homepage from "./Pages/Homepage/Homepage";
import TripCatalog from "./Pages/TripCatalog/TripCatalog";
import Nav from "./Components/Navbar/Nav";
import Footer from './Components/Footer/Footer'
import Accomodations from "./Pages/Accomodation/Accomodation"

const App = () => {
  return (
    <>
      {/* Use BrowserRouter instead of Router */}
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/countries" element={<Great />} />
          <Route path="/accom" element={<Accomodations/>} />
          <Route path="/tc" element={<TripCatalog />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
};

export default App;

