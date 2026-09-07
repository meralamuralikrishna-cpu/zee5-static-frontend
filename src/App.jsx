import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Basic from './Basic';
import MainPage from './components/MainPage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/sports" element={<Basic />} />
      <Route path="/tv-shows" element={<p>Tvshows</p>} />
      <Route path="/movies" element={<p>Movies</p>} />
      <Route path="/free5" element={<p>Free</p>} />
      <Route path="/browse" element={<p>GridIcon</p>} />
    </Routes>
  );
}

export default App;
