import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cashflow from "./Components/Cashflow.tsx";
import BalanceSheet from "./Components/BalanceSheet.tsx";
import PageNotFound from './Components/PageNotFound.tsx';
import Navigation from './Navigation';
import Dashboard from './Components/Dashboard.tsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cashflow" element={<Cashflow />} />
          <Route path="/balancesheet" element={<BalanceSheet />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
