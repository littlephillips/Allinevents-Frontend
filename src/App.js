import React from "react";

import { BrowserRouter,  Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'

//pages
import AboutPage from './pages/AboutPage'
import AdminPage from './pages/AdminPage'
import BookingsPage from './pages/BookingsPage'
import ContactPage from './pages/ContactPage'
import ServicePage from './pages/ServicePage'
import ProfilePage from "./pages/ProfilePage";


//Admin
import NewEvents from './components/NewEvents'

//landing page
import Hero from "./pages/Hero";
import Slider from "./pages/Slider";


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
    <Route path='/' element= {
        <>
            <Hero />
            <Slider
                imageSrc={"https://images.squarespace-cdn.com/content/v1/57cf5e97414fb5a80f7a837b/1519410893820-Z6QV8X1Q4NFKBP6E9176/shutterstock_512157103.jpg?format=2500w"}
                title={"One Step Event Planner."}
                subtitle={
                  "At AllEvents, we promise to make every special event in your life unforgetable...…"
                }
              />
              <Slider
                imageSrc={"https://media.istockphoto.com/id/1368180747/photo/cake-cutting-during-wedding-ceremony-with-fireworks-in-the-background.jpg?s=612x612&w=0&k=20&c=LT6lIUPLTTP9FVGdI266Cq9cl1a3tCC7oPB0efKCiBw="}
                title={"Celebrate Affordably."}
                subtitle={"You dont have to break the bank to get your dream wedding...."}
                flipped={true}
               />
              </>
            }
          />
      <Route path="/" element= {<HomePage/>} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/admin" element={<AdminPage/>} />
      <Route path="/contact" element={<ContactPage/>} />
      <Route path="/booking" element={<BookingsPage />} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/services/reviews" element={<ReviewsPage/>} />
      <Route path="/services" element={<ServicePage/>} />
      <Route path="/profile" element={<ProfilePage/>} />
      <Route path="/signup" element={<SignupPage/>} />
      <Route path="/footer" element={<Footer/>} />
      <Route path="/admin/newevents" element={<NewEvents/>} />
      <Route path="/services/event" element={<Event/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;

