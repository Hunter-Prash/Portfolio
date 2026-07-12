import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LogStreamDetails from './pages/LogStreamDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/logstream" element={<LogStreamDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
