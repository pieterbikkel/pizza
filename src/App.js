import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';

// pages
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
