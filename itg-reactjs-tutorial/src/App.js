import SiteHeader from './components/SiteHeader';
import SiteContent from './components/SiteContent';
import SiteFooter from './components/SiteFooter';
import ProductBox from './props/ProductBox';
import ObjectArraySample from "./ObjectArraySample";
import {Link, Route, Routes} from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SupplierDetail from './SupplierDetail';
import StateIntro from './components/StateIntro';

function App() {
  
  return (
    <>

    <h1>Site Header</h1>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      <li><Link to='/suppliers'>Suppliers</Link></li>
      <li><Link to='/stateintro'>State Intro</Link></li>
    </ul>


    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/suppliers" element={<ObjectArraySample/>}   />
      <Route path="/suppliers/:id" element={<SupplierDetail/>}   />
      <Route path="/stateintro" element={<StateIntro/>}   />
      <Route path="*" element={<NotFound />} />
      


    </Routes>
  </>
  );
}

export default App;
