import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import img1 from "./../../assets/liveclass.jpeg";
import img2 from "./../../assets/act.jpeg";
import img3 from "./../../assets/grp.png";

function Highlights() {
  const highlights = [
    {
      title: "Live Classes",
      image: img1,
      description:
        "Interactive sessions with expert mentors, designed to boost your understanding and retention.",
    },
    {
      title: "Mentorship & Guidance",
      image: img2,
      description:
        "1-on-1 mentorship, career counseling, and personalized study plans to help you succeed.",
    },
    {
      title: "Community & Support",
      image: img3,
      description:
        "Join a vibrant learner community, access discussion forums, and grow with peer support.",
    },
  ];

  return (
    <div className="py-16 px-6 md:px-12 bg-white">
      <div className="text-center mb-12">
        <small className="text-indigo-600 text-sm font-semibold tracking-wide">
          Highlights
        </small>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          What Makes <span className="text-purple-600">ThinkPlus</span> Special
        </h2>
      </div>

      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 2000 }}
        modules={[Autoplay]}
        speed={1500}
        breakpoints={{
          0: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
        }}
        className="w-full"
      >
        {highlights.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-indigo-600">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
                <a
                  href="/courses"
                  className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition"
                >
                  Explore
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Highlights;