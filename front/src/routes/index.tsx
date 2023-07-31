import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import TopPage from '../components/pages/TopPage';
import Header from '../components/templates/Header';

const AppRoutes = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if(!hash) {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname])

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<TopPage />} />
      </Routes>
    </>
  )
}

export default AppRoutes;