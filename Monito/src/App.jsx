import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/landing/Header';
import Footer from './components/landing/Footer';
import PetPage from './components/product/PetPage';
import LandingPage from './components/landing/Landingpage';
import Categorypage from './components/category/Categorypage';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/category' element={<Categorypage />} />
          <Route path='/product' element={<PetPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
