import { Routes, Route, useLocation } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Footergreen from './components/Footer/Footergreen'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage/AboutPage'
import GetInvolved from './pages/GetInvolved'
import Contact from './pages/Contact'
import Tour from './pages/Tour'
import Accommodation from './pages/Accommodation'
import Accommodations from './components/Accommodations/Accommodations'
import ExperiencePage from './components/Experience/ExperiencePage'
import AchievementPage from './components/Achievement/AchievementPage'
import ExplorePage from './components/Explore/ExplorePage'
import PackagesPage from './components/Packages/PackagesPage'
import TourPackages from './components/TourPackages/TourPackages'
import UnderDevelopment from './components/UnderDevelopment/UnderDevelopment'
import TicketsPage from './components/ticket/TicketsPage'
import Location from './pages/Location'
import Team from './pages/Team'
import Teacher from './pages/Teacher'
import TeacherInner from './pages/TeacherInner'
import Blog from './pages/Blog'
import BlogInner from './pages/BlogInner'
import BazaarPage from './pages/BazaarPage/BazaarPage'
import GalleryPage from './pages/GalleryPage/GalleryPage'

function App() {
  const location = useLocation()
  const isAchievement = location.pathname === '/achievement'

  return (
    <>
      <Header />
      <main style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', minHeight: '60vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/accommodations" element={<Accommodations />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/achievement" element={<AchievementPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/tour-packages" element={<TourPackages />} />
          <Route path="/team" element={<Team />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/teacher-inner" element={<TeacherInner />} />
          
          {/* Under construction / empty page routes */}
          <Route path="/home" element={<UnderDevelopment />} />
          <Route path="/about" element={<UnderDevelopment />} />
          <Route path="/tickets" element={<TicketsPage />} />
          <Route path="/location" element={<Location />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogInner />} />
          <Route path="/blog-inner" element={<BlogInner />} />
          <Route path="/bazaar" element={<BazaarPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="*" element={<UnderDevelopment />} />
        </Routes>
      </main>
      {isAchievement ? <Footergreen /> : <Footer />}
      <Analytics />
    </>
  )
}

export default App
