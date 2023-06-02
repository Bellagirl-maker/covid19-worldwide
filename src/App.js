import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import { fetchCountries } from './redux/features/countries/countriesSlice';
import Homepage from './components/Homepage';
import Details from './components/Details';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/countries/:country" element={<Details />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
