import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Importing the Navbar
import Sidebar from './components/Sidebar'; // Importing the Sidebar
import Home from './pages/Home';
import Livros from './pages/Livros';
import Login from './pages/Login';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Router>
      <Navbar toggleDrawer={toggleDrawer} />
      <Sidebar open={drawerOpen} toggleDrawer={toggleDrawer} />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/livros" element={<Livros />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
