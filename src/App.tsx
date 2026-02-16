import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import KindergartenLandingPage from './components/Kindergarten/KindergartenLandingPage';
import ProductsPage from './components/Kindergarten/ProductsPage';
import PartnersPage from './components/Kindergarten/PartnersPage';
import ContactPage from './components/Kindergarten/ContactPage';
import ServicesPage from './components/Kindergarten/ServicesPage';
import { PopupProvider } from './components/Popups/PopupContext';
import './App.css';

function App() {
  return (
    <PopupProvider>
      <Router>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<KindergartenLandingPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
        </div>
      </Router>
    </PopupProvider>
  );
}

export default App;
