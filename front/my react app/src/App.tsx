import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'
import Contact from './components/Contact';
import History from './components/History'; 
import Achievements from './components/Achievements';
import Ranking from './components/Ranking';
import LastgameDetails from './pages/LastgamesDetails';
import NewsDetails from './pages/NewsDetails';
import PicsDetails from './pages/PicsDetails';
import NextgameDetails from './pages/NextgamesDetails';
import PlayersDetails from './pages/PlayersDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <NewsDetails />
        <LastgameDetails />
        <PicsDetails />
        <NextgameDetails />
        <PlayersDetails />
        <Routes>
          <Route path="/Contact" element={<Contact />} />
          <Route path="/history" element={<History />} />
          <Route path='/achievements' element={<Achievements />} />
          <Route path='/ranking' element={<Ranking />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
