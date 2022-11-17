import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Mission from './components/Missions';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import Rockets from './components/Rockets';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
