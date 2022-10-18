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
          <Route path="AboutUs" element={<AboutUsPage />} />
          <Route path="Schedule" element={<SchedulePage />} />
          <Route path="Activity" element={<ActivityPage />} />
          <Route path="Activities" element={<ActivitiesPage/>}/>
          <Route path="Speakers" element={<SpeakersPage />} />
          <Route path="Speaker" element={<SpeakerPage />} />
          <Route path="Feedback" element={<FeedbackPage />} />
        </Routes>
    </Router>
  )
}