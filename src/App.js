import './assets/css/App.css';
import Navbar from './components/navbar/Navbar';
import TopContent from './components/topContent/TopContent';
import MainContent from './components/mainContent/MainContent';
import BottomContent from './components/bottomContent/BottomContent';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <TopContent />
      <MainContent />
      <BottomContent />
      <Footer />
    </div>
  );
}

export default App;
