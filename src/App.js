import React from "react";

import { BrowserRouter,  Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'

//pages
import AboutPage from './pages/AboutPage'
import AdminPage from './pages/AdminPage'
import BookingsPage from './pages/BookingsPage'
import ContactPage from './pages/ContactPage'
//import ServicePage from './pages/ServicePage'
import ProfilePage from "./pages/ProfilePage";


//Admin
import NewEvents from './components/NewEvents'

//homepage
import HomePage from './pages/HomePage'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import Footer from './components/Footer'

//services
import Event from './components/Event'
import ReviewsPage from './pages/ReviewsPage'

function App() {
  return(
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path="/" element= {<HomePage/>} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/admin" element={<AdminPage/>} />
      <Route path="/contact" element={<ContactPage/>} />
      <Route path="/booking" element={<BookingsPage />} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/services/reviews" element={<ReviewsPage/>} />
{/*<Route path="/services" element={<ServicePage/>} />*/}
      <Route path="/profile" element={<ProfilePage/>} />
      <Route path="/signup" element={<SignupPage/>} />
      <Route path="/footer" element={<Footer/>} />
      <Route path="/admin/newevents" element={<NewEvents/>} />
      <Route path="/services" element={<Event/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;

