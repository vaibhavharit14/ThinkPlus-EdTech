import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Component Imports
import Nav from "./Components/Nav";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Service from "./Components/Service/Service";
import Courses from "./Components/Rooms/Room"; // Renamed for clarity
import Highlights from "./Components/Amenities/Amenities"; // Renamed for clarity
import Testimonials from "./Components/Testimonials/Testimonials";
import Footer from "./Components/Footer/Footer";

// Global Styles
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      once: true,    // animate only once
      offset: 100,   // trigger point
    });
  }, []);

  return (
    <>
      <Nav />
      <Header />
      <About />
      <Service />
      <Courses />
      <Highlights />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;