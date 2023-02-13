import Auth from "./Pages/Auth/Auth";
import Home from "./Pages/Home/Home";
import {Routes, Route, Navigate } from 'react-router-dom'


import React from 'react'
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state)=>state.AuthReducer.authData)
  return (
    <div>
        <Routes>
          <Route path="/" element={user? <Navigate to = "Home"/>: <Navigate to = "Auth" />}/>
          <Route path="/Home" element={user? <Home/>: <Navigate to = "../Auth" />}/>
          <Route path="/Auth" element={user? <Navigate to = "../Home" />:<Auth/> }/>
        </Routes>
    </div>
  )
}






export default App


