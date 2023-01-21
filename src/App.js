import React from "react";

import { BrowserRouter,  Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'

// pages
import AboutPage from './pages/AboutPage'
import AdminPage from './pages/AdminPage'
import BookingsPage from './pages/BookingsPage'
import ContactPage from './pages/ContactPage'
import ProfilePage from "./pages/ProfilePage";
// import ServicePage from "./pages/ServicePage";

//landing page
import Hero from "./pages/Hero";
import Slider from "./pages/Slider";


//homepage
import HomePage from './pages/HomePage'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import Footer from './components/Footer'
import ErrorPage from "./pages/ErrorPage";

//services
import Event from './components/Event'
import ReviewsPage from './pages/ReviewsPage'

function App() {
  let token = localStorage.getItem("token");
  let user = localStorage.getItem("user");
  if (token && user) {
    this.props.fetchCurrentUser();
  }
  return(
  <BrowserRouter>
  
  {/* <HomePage /> */}
    <Routes>
    <Route path='/' element= {
        <>  
        {/* <Navbar />
            <Hero /> */}

            <Hero />
            <Navbar />
            <Slider
                imageSrc={"https://cdn0.weddingwire.com/vendor/207389/original/960/jpeg/img-3866_51_983702.webp"}
                title={"One Step Event Planner."}
                subtitle={
                  "At AllEvents, we promise to make every special event in your life unforgetable...…"
                }
              />
              <Slider
                imageSrc={"https://media.istockphoto.com/id/496971209/photo/the-begining-of-forever.jpg?s=612x612&w=0&k=20&c=J7uidujGk1TMNiSIMMvxyIWsVE5Pzhyvb3upPLeank0="}
                title={"Celebrate Affordably."}
                subtitle={"You dont have to break the bank to get your dream wedding...."}
                flipped={true}
              />
              <AboutPage />
              <Footer/>
              </>
            }
          />
      <Route path="/" element= {<HomePage/>} />
      {/* <Route path="/about" element={<AboutPage/>} /> */}
      <Route path="/admin" element={<AdminPage/>} />
      <Route path="/contact" element={<ContactPage/>} />
      <Route path="/booking" element={<BookingsPage />} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/reviews" element={<ReviewsPage/>} />
      <Route path="/profile" element={<ProfilePage/>} />
      <Route path="/signup" element={<SignupPage/>} />
      <Route path="/footer" element={<Footer/>} />
      <Route path="/services" element={<Event/>} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;

