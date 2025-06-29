// src/App.js
import React from 'react';
import './index.css';

// Import all components
import TopBar from './components/TopBar/TopBar';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import AcademicsSection from './components/AcademicsSection/AcademicsSection';
import WelcomeLMS from './components/WelcomeLMS/WelcomeLMS';
import CampusLife from './components/CampusLife/CampusLife';
import PopularCourses from './components/PopularCourses/PopularCourses';
import CountersSection from './components/CountersSection/CountersSection';
import UpcomingEvents from './components/UpcomingEvents/UpcomingEvents';
import Testimonial from './components/Testimonial/Testimonial';
import NewsAndBlogs from './components/NewsAndBlogs/NewsAndBlogs';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <HeroSection />
      <AcademicsSection />
      <WelcomeLMS />
      <CampusLife />
      <PopularCourses />
      <CountersSection />
      <UpcomingEvents />
      <Testimonial />
      <NewsAndBlogs />
      <Footer />
    </div>
  );
}

export default App;