import "./App.css";

import {BrowserRouter, Route, Routes} from 'react-router-dom';

import CasesCheck from './Covid-19/CasesCheck'
import CovidCenter from './Covid-19/CovidCenter'
import PageNotFound from './Covid-19/PageNotFound'
import React from 'react'
import ShowingData from './Covid-19/ShowingData'

const App = () => {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<CovidCenter/>} />
        <Route path="/cases" element={<CasesCheck />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/showingdata" element={<ShowingData />} />
      </Routes> 
   </BrowserRouter> 
  )
}

export default App