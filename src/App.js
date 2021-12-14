import './assets/css/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import MainContentRegion from './components/mainContent/MainContentRegion';
import BottomContent from './components/bottomContent/BottomContent';
import Error404 from './components/error404/Error404';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/covid-data-webapp" exact element={<Home />} />
        <Route path="/covid-data-webapp/:region/region" element={<MainContentRegion />} />
        <Route path="/covid-data-webapp/daily-summary-all-regions" element={<BottomContent />} />
        <Route path="*" element={<Error404 />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
