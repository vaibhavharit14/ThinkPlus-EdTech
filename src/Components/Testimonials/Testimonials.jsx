import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import img1 from "./../../assets/testi-03.jpg";
import img2 from "./../../assets/testi-02.jpg";
import img3 from "./../../assets/testi-04.jpg";

function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      role: "MBA Aspirant",
      image: img1,
      feedback:
        "ThinkPlus helped me crack my entrance exam with confidence. The live classes and mentorship were top-notch!",
    },
    {
      name: "Samantha",
      role: "CAT Student",
      image: img2,
      feedback:
        "The structured content and mock tests gave me the edge I needed. Highly recommend ThinkPlus!",
    },
    {
      name: "Amrita Singh",
      role: "UPSC Learner",
      image: img3,
      feedback:
        "The mentors are incredibly supportive and the dashboard makes tracking progress super easy.",
    },
    {
      name: "Ravi Kumar",
      role: "SSC Aspirant",
      image: img2,
      feedback:
        "Affordable, effective, and engaging. ThinkPlus is the best EdTech platform I’ve used so far.",
    },
  ];

  return (
    <div className="py-16 px-6 md:px-12 bg-white">
      <div className="text-center mb-12">
        <small className="text-indigo-600 text-sm font-semibold tracking-wide">
          Testimonials
        </small>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          What Our Learners <span className="text-purple-600">Say</span>
        </h2>
      </div>

      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 2500 }}
        breakpoints={{
          0: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
        }}
        modules={[Autoplay]}
        speed={1200}
        className="w-full"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition h-full flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-indigo-500"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <span className="text-sm text-gray-500">{item.role}</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                “{item.feedback}”
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testimonials;