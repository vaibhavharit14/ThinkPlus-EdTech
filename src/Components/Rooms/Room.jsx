import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

function Courses() {
  const courseList = [
    {
      title: "MBA Foundation",
      price: "₹4,999",
      features: ["Live Classes", "PDF Notes", "Mock Tests", "Mentor Support"],
      color: "from-indigo-500 to-purple-600",
      badge: "Popular",
      rating: 5,
      enrolled: "1,200+",
      progress: "75%",
    },
    {
      title: "UPSC Prep",
      price: "₹6,499",
      features: ["Daily Current Affairs", "GS Modules", "Essay Practice", "Interview Prep"],
      color: "from-blue-500 to-teal-500",
      badge: "New",
      rating: 4,
      enrolled: "950+",
      progress: "60%",
    },
    {
      title: "SSC CGL Mastery",
      price: "₹3,999",
      features: ["Math & Reasoning", "Test Series", "Doubt Solving", "Strategy Sessions"],
      color: "from-pink-500 to-red-500",
      badge: "Top Rated",
      rating: 5,
      enrolled: "1,500+",
      progress: "85%",
    },
    {
      title: "CAT Crash Course",
      price: "₹5,499",
      features: ["Quant + VARC", "Mocks", "Live Analysis", "Mentor Calls"],
      color: "from-yellow-500 to-orange-500",
      badge: "Fast Track",
      rating: 4,
      enrolled: "800+",
      progress: "70%",
    },
    {
      title: "Banking Exams",
      price: "₹2,999",
      features: ["Speed Practice", "GK Capsules", "Live Doubts", "PDF Notes"],
      color: "from-green-500 to-lime-500",
      badge: "Budget",
      rating: 3,
      enrolled: "1,000+",
      progress: "50%",
    },
    {
      title: "CUET Complete",
      price: "₹3,499",
      features: ["Domain Subjects", "Mock Tests", "Recorded Classes", "Mentor Support"],
      color: "from-purple-600 to-pink-600",
      badge: "Student Favorite",
      rating: 5,
      enrolled: "1,300+",
      progress: "90%",
    },
  ];

  return (
    <div className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
      <div className="text-center mb-12">
        <small className="text-indigo-600 dark:text-indigo-400 text-sm font-semibold tracking-wide">Courses</small>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white">
          Our Best <span className="text-purple-600 dark:text-purple-400">Programs</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courseList.map((course, index) => (
          <div
            key={index}
            className="relative bg-white/80 dark:bg-gray-800 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105"
          >
            {/* Badge */}
            <span className="absolute top-4 left-4 bg-white text-indigo-600 dark:text-indigo-400 text-xs font-semibold px-2 py-1 rounded-full shadow">
              {course.badge}
            </span>

            {/* Gradient Header */}
            <div className={`bg-gradient-to-r ${course.color} text-white text-center py-6 rounded-t-xl`}>
              <h3 className="text-xl font-bold">{course.title}</h3>
            </div>

            {/* Card Body */}
            <div className="p-6 space-y-4">
              {/* Price */}
              <div className="text-right text-indigo-600 dark:text-indigo-400 font-semibold text-lg">
                {course.price}
              </div>

              {/* Features */}
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                {course.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>

              {/* Rating */}
              <div className="flex gap-1 text-yellow-400">
                {[...Array(course.rating)].map((_, i) => (
                  <i key={i} className="ri-star-fill"></i>
                ))}
              </div>

              {/* Enrollment Stats */}
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {course.enrolled} students enrolled
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-indigo-600 h-2 rounded-full" style={{ width: course.progress }}></div>
              </div>

              {/* CTA */}
              <div className="flex justify-between items-center pt-4">
                <a
                  href="/login"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full transition"
                >
                  Enroll Now
                </a>
                <i className="ri-arrow-right-line text-xl text-indigo-600 dark:text-indigo-400"></i>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="/login"
          className="bg-purple-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-purple-700 transition"
        >
          🚀 Enroll Now
        </a>
      </div>
    </div>
  );
}

export default Courses;