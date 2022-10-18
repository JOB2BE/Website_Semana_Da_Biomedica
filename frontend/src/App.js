import * as React from 'react';
import { Router, Route, Routes } from './router';
import AboutUsPage from './pages/AboutUsPage';
import LandingPage from './pages/LandingPage';
import { View } from 'react-native';



export default function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage/>}/>
          <Route path="AboutUs" element={<AboutUsPage/>} />
        </Routes>
    </Router>
  )
}