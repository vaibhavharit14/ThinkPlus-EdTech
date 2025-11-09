import React, { useRef, useEffect } from "react";
import logo from "../assets/icon.png";

function Nav() {
  const mobileMenu = useRef();
  const navbar = useRef();

  const menuHandler = () => {
    if (mobileMenu.current) {
      mobileMenu.current.classList.toggle("hidden");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        navbar.current.classList.add("shadow-md", "bg-white/80", "backdrop-blur");
      } else {
        navbar.current.classList.remove("shadow-md", "bg-white/80", "backdrop-blur");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={navbar}
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
    >
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <a href="/">
            <img src={logo} alt="ThinkPlus Logo" className="h-10 w-auto" />
          </a>
          <span className="text-xl font-bold text-indigo-600">ThinkPlus</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li><a href="/" className="hover:text-indigo-600">Home</a></li>
          <li><a href="/about" className="hover:text-indigo-600">About Us</a></li>
          <li><a href="/courses" className="hover:text-indigo-600">Courses</a></li>
          <li><a href="/testimonials" className="hover:text-indigo-600">Testimonials</a></li>
          <li><a href="/contact" className="hover:text-indigo-600">Contact</a></li>
          <li><a href="/login" className="hover:text-indigo-600">Login</a></li>
        </ul>

        {/* CTA + Mobile Menu Icon */}
        <div className="flex items-center gap-4">
          <button className="hidden md:inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:scale-105 transition">
            Explore Courses
          </button>
          <button
            className="md:hidden text-2xl text-gray-700"
            onClick={menuHandler}
          >
            <i className="ri-menu-3-line"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        ref={mobileMenu}
        className="flex-col gap-4 px-6 py-4 bg-white text-gray-700 font-medium hidden md:hidden"
      >
        <li><a href="/" className="hover:text-indigo-600">Home</a></li>
        <li><a href="/about" className="hover:text-indigo-600">About Us</a></li>
        <li><a href="/courses" className="hover:text-indigo-600">Courses</a></li>
        <li><a href="/testimonials" className="hover:text-indigo-600">Testimonials</a></li>
        <li><a href="/contact" className="hover:text-indigo-600">Contact</a></li>
        <li><a href="/login" className="hover:text-indigo-600">Login</a></li>
      </ul>
    </div>
  );
}

export default Nav;