import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import TopSeries from './components/TopSeries';
import User from './components/User';
import SeriesDetails from './components/SeriesDetails';
import NotFound from './components/NotFound';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top-series" element={<TopSeries />} />
          <Route path="/top-series/:seriesName" element={<SeriesDetails />} />
          <Route path="/user" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;