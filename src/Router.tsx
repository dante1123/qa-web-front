import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/MainPage/Mainpage';
import Sites from './components/pages/Sites/Sites';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/site/:sitecode" element={<Sites />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;