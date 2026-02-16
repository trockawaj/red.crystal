import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import LocationPage from './pages/LocationPage';
import MenuPage from './pages/MenuPage';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </Router>
  );
}

export default App;
