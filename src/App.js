import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Rocket from './pages/Rocket';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Rocket />} />
        {/* <Route path="/mission" element={<Mission />} />
        <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
