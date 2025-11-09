import React from "react";
import logo from "./../../assets/icon.png";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo */}
        <div>
          <a href="/" className="flex items-center gap-2">
            <img src={logo} alt="ThinkPlus Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold text-indigo-400">ThinkPlus</span>
          </a>
          <p className="text-sm text-gray-400 mt-4">
            Empowering learners with live classes, expert mentorship, and real-time progress tracking.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-indigo-300">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
            <li><a href="/courses" className="hover:text-white">Courses</a></li>
            <li><a href="/testimonials" className="hover:text-white">Testimonials</a></li>
            <li><a href="/login" className="hover:text-white">Login</a></li>
          </ul>
        </div>

        {/* Popular Locations */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-indigo-300">Popular Cities</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Bangalore</li>
            <li>Hyderabad</li>
            <li>Chandigarh</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-indigo-300">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <span className="font-medium">Address:</span> 10 Street, Udaipur, India
            </li>
            <li>
              <span className="font-medium">Email:</span> v.harit1@gmail.com
            </li>
            <li>
              <span className="font-medium">Phone:</span> +91 78945 61230
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-12 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} ThinkPlus Education. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;