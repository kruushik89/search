import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from "../components/main/Main";
import CompanyDetails from "../components/companyDetails/CompanyDetails";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/company/:id" element={<CompanyDetails />}/>
    </Routes>
  );
};

export default MainRoutes;