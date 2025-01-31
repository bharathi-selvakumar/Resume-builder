import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './Pages/navbar';
import Dashboard from './Pages/dashboard';
import Templet from './Pages/Templets/resumeTemplet';
import { ResumeDataFilling } from './Pages/DetailsFilling/ResumeDataFilling';


const Router = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
          <Route  path="/" element={<Dashboard/>}/> 
          <Route path="/Choose-resume-templet" element={<Templet/>} />  
          <Route path="/Create-CV" element={<div>Create CV Page</div>} />
          <Route path="/Cover-letter" element={<div>Cover Letter Page</div>} />
          <Route path="/Resume-Data-Filling" element={<ResumeDataFilling/>} />

          <Route path="/Create-resume" element={<Templet/>} />
          <Route path="/Create-CV" element={<div>Create CV Page</div>} />
          <Route path="/Cover-letter" element={<div>Cover Letter Page</div>} />
          <Route path="/templets" element={<Templet/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Router
