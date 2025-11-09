import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Parallax } from 'swiper/modules';
import 'swiper/css';

function Header() {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <Swiper
        modules={[Autoplay, Parallax]}
        autoplay={{ delay: 3000 }}
        loop={true}
        parallax={true}
        speed={1500}
        className="w-full h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="flex items-center justify-center h-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
            <div className="text-center space-y-4" data-swiper-parallax="-300">
              <small className="text-sm tracking-wide" data-swiper-parallax="-200">
                Learn Anytime, Anywhere
              </small>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Empower Your <span className="text-yellow-300">Career</span> with <br />
                <span className="text-pink-300">ThinkPlus</span> Courses
              </h2>
              <p className="text-lg" data-swiper-parallax="-400">
                Join 10,000+ learners | Call <span className="font-semibold">9874563210</span>
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="flex items-center justify-center h-full bg-gradient-to-r from-blue-500 to-teal-500 text-white">
            <div className="text-center space-y-4" data-swiper-parallax="-300">
              <small className="text-sm tracking-wide" data-swiper-parallax="-200">
                Real Mentorship & Live Classes
              </small>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Learn from <span className="text-yellow-300">Experts</span> & <br />
                Crack Your <span className="text-pink-300">Dream Exam</span>
              </h2>
              <p className="text-lg" data-swiper-parallax="-400">
                Explore MBA, UPSC, SSC & more
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="flex items-center justify-center h-full bg-gradient-to-r from-purple-700 to-pink-500 text-white">
            <div className="text-center space-y-4" data-swiper-parallax="-300">
              <small className="text-sm tracking-wide" data-swiper-parallax="-200">
                Trusted by Thousands
              </small>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Build Your <span className="text-yellow-300">Future</span> with <br />
                <span className="text-pink-300">ThinkPlus Education</span>
              </h2>
              <p className="text-lg" data-swiper-parallax="-400">
                Start Learning Today 🚀
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Header;