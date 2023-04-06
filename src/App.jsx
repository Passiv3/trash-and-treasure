import { useState } from 'react';
import './App.css';
import NavBar from './components/navigation/navBar';
import { Outlet } from 'react-router-dom';
import FrontPage from './pages/frontPage';

function App() {

  return (
    <div className="App">
      <NavBar />
        <Outlet />
    </div>
  );
}

export default App
