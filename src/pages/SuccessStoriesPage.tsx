import React from 'react';
import { Star, Quote, Calendar, User } from 'lucide-react';
import { successStories } from '../data/successStories';
import { formatDate } from '../utils/helpers';

export function SuccessStoriesPage() {
  const stats = [
    { label: 'Happy Users', value: '25,000+' },
    { label: 'Products Claimed', value: '100,000+' },
    { label: 'Average Rating', value: '4.9/5' },
    { label: 'Success Rate', value: '98%' }
  ];

  return (
    <main className="pt-0">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 py-24">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="success-geometric" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="currentColor" opacity="0.3"/>
                <path d="M0,10 Q10,0 20,10 Q10,20 0,10" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#success-geometric)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Success <span className="text-[#65E856]">Stories</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Real stories from real users who have discovered amazing products through Freely. Join our community of satisfied members.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-[#65E856] mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover how Freely has helped thousands of users find amazing products and save money.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <div key={story.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <img
                    src={story.userAvatar}
                    alt={story.userName}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{story.userName}</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(story.date)}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < story.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">{story.productName}</h4>
                </div>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-6 h-6 text-[#65E856] opacity-20" />
                  <p className="text-gray-600 italic pl-4">{story.story}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Highlight */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#65E856] to-[#5BD749] rounded-2xl p-8 md:p-12 text-center text-white">
            <Quote className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <blockquote className="text-xl md:text-2xl font-medium mb-6">
              "Freely has completely changed how I discover new products. I've saved hundreds of dollars and found some of my favorite items through this platform. The quality is amazing and the process is so simple!"
            </blockquote>
            <div className="flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
                alt="Featured user"
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div className="text-left">
                <div className="font-semibold">Sarah Chen</div>
                <div className="text-green-100">Freely Member since 2024</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Community</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Become part of a growing community of smart shoppers who share reviews, tips, and product recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#65E856] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-[#65E856]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Share Your Story</h3>
              <p className="text-gray-600">
                Tell us about your experience with products you've claimed and help other users make informed decisions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#65E856] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-[#65E856]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Write Reviews</h3>
              <p className="text-gray-600">
                Your honest reviews help improve products and unlock access to premium items for yourself and others.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#65E856] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Quote className="w-8 h-8 text-[#65E856]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Featured</h3>
              <p className="text-gray-600">
                Outstanding reviews and stories may be featured on our platform, helping you become a trusted community voice.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
