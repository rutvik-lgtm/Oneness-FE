import React from 'react';
import HomeHero from '../components/HomeHero/HomeHero';
import AboutUs from '../components/AboutUs/AboutUs';
import OnenessSpeakers from '../components/OnenessSpeakers/OnenessSpeakers';
import YogaSection from '../components/YogaSection/YogaSection';
import LecturesSection from '../components/LecturesSection/LecturesSection';
import MusicSection from '../components/MusicSection/MusicSection';
import BazaarSection from '../components/BazaarSection/BazaarSection';
import BlogSection from '../components/BlogSection/BlogSection';
import TicketsSection from '../components/ticket/TicketsSection';
import VenueSection from '../components/VenueSection/VenueSection';
import StaySection from '../components/StaySection/StaySection';
import DiscoverJaipur from '../components/DiscoverJaipur/DiscoverJaipur';
import GallerySection from '../components/GallerySection/GallerySection';

const Home = () => {
  return (
    <>
      <HomeHero />
      <AboutUs />
      <OnenessSpeakers />
      <YogaSection />
      <LecturesSection />
      <MusicSection />
      <BazaarSection />
      <BlogSection />
      <TicketsSection />
      <VenueSection />
      {/* <StaySection /> */}
      <DiscoverJaipur />
      <GallerySection />
    </>
  );
};

export default Home;
