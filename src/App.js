import logo from './assets/images/logo.svg';
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
