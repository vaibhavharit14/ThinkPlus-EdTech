import React from 'react';
import aboutImg from '../../assets/about.jpg';

function About() {
  return (
    <div
      className="py-16 px-6 md:px-12 bg-white flex flex-col lg:flex-row items-center gap-12 overflow-hidden"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {/* Image Section */}
      <div
        className="w-full lg:w-1/2"
        data-aos="zoom-in"
        data-aos-delay="100"
        data-aos-duration="1200"
      >
        <img
          src={aboutImg}
          alt="ThinkPlus Team"
          className="rounded-xl shadow-lg w-full h-auto object-cover"
        />
      </div>

      {/* Content Section */}
      <div
        className="w-full lg:w-1/2 space-y-6"
        data-aos="fade-left"
        data-aos-delay="200"
        data-aos-duration="1200"
      >
        <small className="text-indigo-600 text-sm font-semibold tracking-wide">
          About ThinkPlus
        </small>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Where Learning Meets <span className="text-purple-600">Excellence</span>
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          ThinkPlus is an EdTech platform built to empower learners across India with live classes,
          expert mentorship, and structured content. Whether you're preparing for MBA, UPSC, SSC, or CUET,
          our goal is to help you succeed with confidence.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 text-center">
          <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
            <p className="text-2xl font-bold text-indigo-600">250+</p>
            <span className="text-sm text-gray-500">Expert Mentors</span>
          </div>
          <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            <p className="text-2xl font-bold text-indigo-600">250K+</p>
            <span className="text-sm text-gray-500">Learners Enrolled</span>
          </div>
          <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
            <p className="text-2xl font-bold text-indigo-600">150K+</p>
            <span className="text-sm text-gray-500">Live Sessions Delivered</span>
          </div>
          <div data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
            <p className="text-2xl font-bold text-indigo-600">100%</p>
            <span className="text-sm text-gray-500">Placement Support</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;