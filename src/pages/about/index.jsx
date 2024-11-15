import React from 'react';
import CountUp from 'react-countup';
import { Heart, Users, Sparkles, ArrowRight } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className=""></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h2 className="inline-flex items-center text-blue-600 font-semibold px-4 py-1 rounded-full bg-blue-50 mb-4">
              <Heart className="w-4 h-4 mr-2" />
              Welcome to Breeze
            </h2>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-8">
              Making Mental Health
              <span className="block text-blue-600">Support Accessible</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Column - Image Gallery */}
            <div className="relative grid grid-cols-2 gap-4 p-8">
              <div className="col-span-2 rounded-xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform">
                <img
                  src="https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?auto=format&fit=crop&q=80"
                  alt="Peaceful environment"
                  className="w-full h-64 object-cover"
                />
              </div>
              
              <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform">
                <img
                  src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80"
                  alt="Wellness"
                  className="w-full h-40 object-cover"
                />
              </div>

              {/* Stats Card */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl p-6 text-white transform hover:scale-[1.02] transition-transform">
                <div className="flex items-center space-x-2 mb-4">
                  <Users className="w-5 h-5" />
                  <span className="font-medium">Global Impact</span>
                </div>
                <div className="text-3xl font-bold mb-2">
                  <CountUp end={30000} duration={2.5} separator="," />+
                </div>
                <p className="text-blue-100">Connected therapists worldwide</p>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                  <h2 className="text-lg font-semibold text-blue-600">Our Mission</h2>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Empowering Your Mental Wellness Journey
                </h3>

                <div className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    Breeze is more than just an app – it's your companion in mental wellness. We've created a safe, 
                    intuitive space where managing your mental health becomes a natural part of your daily routine.
                  </p>

                  {/* Features Grid */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    {[
                      { title: 'Daily Check-ins', desc: 'Track your mood and mental state' },
                      { title: 'Guided Breathing', desc: 'Reduce stress and anxiety' },
                      { title: 'Mental Health Toolkit', desc: 'Resources at your fingertips' },
                      { title: 'Support Chat', desc: '24/7 compassionate assistance' }
                    ].map((feature, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors">
                        <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <button className="group inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition-colors">
                  Explore More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Stats */}
        <div className="grid sm:grid-cols-3 gap-6 mt-12 mb-20">
          {[
            { count: 98, label: 'Satisfaction Rate', suffix: '%' },
            { count: 50000, label: 'Daily Active Users', suffix: '+' },
            { count: 24, label: 'Hours Support', suffix: '/7' }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow">
              <div className="text-3xl font-bold text-gray-900 mb-2">
                <CountUp end={stat.count} duration={2.5} separator="," />
                {stat.suffix}
              </div>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;