import React from 'react';

function Service() {
  return (
    <div className="py-16 px-6 md:px-12 bg-gray-50" data-aos="fade-up">
      <div className="text-center mb-12" data-aos="fade-up" data-aos-delay="500">
        <small className="text-indigo-600 text-sm font-semibold tracking-wide">Features</small>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Why Choose <span className="text-purple-600">ThinkPlus</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition" data-aos="fade-up" data-aos-delay="500">
          <i className="ri-graduation-cap-line text-3xl text-indigo-600 mb-4"></i>
          <h3 className="text-lg font-semibold mb-2">Live Classes</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Interactive Sessions</li>
            <li>• Real-time Doubt Solving</li>
            <li>• Expert Mentors</li>
            <li>• Recorded Access</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition" data-aos="fade-up" data-aos-delay="600">
          <i className="ri-book-open-line text-3xl text-indigo-600 mb-4"></i>
          <h3 className="text-lg font-semibold mb-2">Course Content</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Structured Curriculum</li>
            <li>• Practice Quizzes</li>
            <li>• PDF Notes</li>
            <li>• Topic-wise Tests</li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition" data-aos="fade-up" data-aos-delay="700">
          <i className="ri-user-star-line text-3xl text-indigo-600 mb-4"></i>
          <h3 className="text-lg font-semibold mb-2">Mentorship</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• 1-on-1 Guidance</li>
            <li>• Career Counseling</li>
            <li>• Interview Prep</li>
            <li>• Progress Tracking</li>
          </ul>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition" data-aos="fade-up" data-aos-delay="800">
          <i className="ri-global-line text-3xl text-indigo-600 mb-4"></i>
          <h3 className="text-lg font-semibold mb-2">Community</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Peer Learning</li>
            <li>• Discussion Forums</li>
            <li>• WhatsApp Groups</li>
            <li>• Alumni Network</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Service;