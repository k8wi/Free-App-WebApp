import React from 'react';
import { BookOpen, Video, MessageCircle, Search, ArrowRight, CheckCircle } from 'lucide-react';

export function HelpPage() {
  const helpCategories = [
    {
      icon: BookOpen,
      title: 'Getting Started',
      description: 'Learn the basics of using Freely',
      articles: [
        'How to create an account',
        'How to claim your first product',
        'Understanding the review process',
        'Setting up your profile'
      ]
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Watch step-by-step guides',
      articles: [
        'Complete platform walkthrough',
        'How to write great reviews',
        'Managing your claimed products',
        'Using the search and filters'
      ]
    },
    {
      icon: MessageCircle,
      title: 'Account & Settings',
      description: 'Manage your account preferences',
      articles: [
        'Updating your profile information',
        'Changing your password',
        'Managing notification settings',
        'Privacy and security settings'
      ]
    },
    {
      icon: Search,
      title: 'Product Discovery',
      description: 'Find the best products for you',
      articles: [
        'Using search and filters',
        'Understanding product categories',
        'Reading product descriptions',
        'Checking product availability'
      ]
    }
  ];

  const quickActions = [
    {
      title: 'Contact Support',
      description: 'Get help from our team',
      action: 'Send Message',
      href: '/contact'
    },
    {
      title: 'Browse FAQ',
      description: 'Find quick answers',
      action: 'View FAQ',
      href: '/faq'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users',
      action: 'Join Discussion',
      href: '#'
    }
  ];

  return (
    <main className="pt-0">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 py-24">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="help-geometric" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="currentColor" opacity="0.3"/>
                <path d="M0,10 Q10,0 20,10 Q10,20 0,10" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#help-geometric)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Help <span className="text-[#65E856]">Center</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about using Freely. Find guides, tutorials, and answers to common questions.
          </p>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How can we help you?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickActions.map((action, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:bg-gray-100 transition-colors">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{action.title}</h3>
                <p className="text-gray-600 mb-4">{action.description}</p>
                <a
                  href={action.href}
                  className="inline-flex items-center text-[#65E856] hover:text-[#5BD749] font-medium transition-colors"
                >
                  {action.action}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Help Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {helpCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#65E856] bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                      <Icon className="w-6 h-6 text-[#65E856]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                      <p className="text-gray-600 text-sm">{category.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {category.articles.map((article, articleIndex) => (
                      <li key={articleIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-[#65E856] mr-2 flex-shrink-0" />
                        {article}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Getting Started Guide */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Getting Started Guide</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              New to Freely? Follow this simple guide to start claiming free products.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[#65E856] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Create Your Account</h3>
                <p className="text-gray-600">
                  Sign up for a free account using your email address. It only takes a few minutes to get started.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[#65E856] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Browse Products</h3>
                <p className="text-gray-600">
                  Explore our collection of free products across various categories. Use filters to find exactly what you're looking for.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[#65E856] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Claim Your Products</h3>
                <p className="text-gray-600">
                  Select the products you want and add them to your cart. Complete the claiming process with your shipping information.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[#65E856] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Write Reviews</h3>
                <p className="text-gray-600">
                  After receiving your products, share your honest feedback. Great reviews help you unlock more products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#65E856] to-[#5BD749]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Our support team is here to help you get the most out of Freely.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-[#65E856] px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Contact Support
            </a>
            <a
              href="/faq"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-[#65E856] transition-colors"
            >
              View FAQ
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
