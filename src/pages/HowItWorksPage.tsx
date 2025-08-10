import React from 'react';
import { Search, ShoppingCart, Gift, Star, Users, Shield } from 'lucide-react';

export function HowItWorksPage() {
  const steps = [
    {
      icon: Search,
      title: 'Browse Products',
      description: 'Explore thousands of free products across various categories including electronics, beauty, home goods, and more.',
      details: 'Use our advanced search and filtering system to find exactly what you\'re looking for.'
    },
    {
      icon: ShoppingCart,
      title: 'Add to Cart',
      description: 'Select the products you want and add them to your cart. No payment required - everything is completely free.',
      details: 'You can claim up to 3 products per month as a new user, with more available as you engage with our community.'
    },
    {
      icon: Gift,
      title: 'Claim Your Items',
      description: 'Complete the claiming process by providing your shipping information. We\'ll handle the rest.',
      details: 'Products typically arrive within 5-10 business days with full tracking information provided.'
    },
    {
      icon: Star,
      title: 'Share Your Experience',
      description: 'Write honest reviews to help other users and provide valuable feedback to brands.',
      details: 'Quality reviews help you unlock access to premium products and increase your monthly claiming limit.'
    }
  ];

  const benefits = [
    {
      icon: Gift,
      title: 'Completely Free',
      description: 'No hidden fees, no shipping costs, no catches. Everything is 100% free including delivery.'
    },
    {
      icon: Shield,
      title: 'Quality Guaranteed',
      description: 'All products come from verified brands and undergo quality checks before being offered.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Join a community of like-minded users sharing honest reviews and product recommendations.'
    }
  ];

  const faqs = [
    {
      question: 'How is this possible?',
      answer: 'Brands partner with us to get their products into the hands of real users in exchange for honest feedback and reviews. This helps them improve their products and reach new customers.'
    },
    {
      question: 'What\'s the catch?',
      answer: 'There\'s no catch! The only requirement is that you provide honest reviews within 30 days of receiving your products. This helps other users and provides valuable feedback to brands.'
    },
    {
      question: 'How many products can I claim?',
      answer: 'New users can claim up to 3 products per month. As you write quality reviews and engage with our community, you can unlock the ability to claim more products monthly.'
    }
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#65E856] to-[#5BD749] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            How Freely Works
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Getting free products is simple. Follow these easy steps to start claiming your favorite items today.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple Steps to Free Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our streamlined process makes it easy to discover and claim amazing products without any hassle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-[#65E856] bg-opacity-10 rounded-full flex items-center justify-center mx-auto group-hover:bg-[#65E856] group-hover:bg-opacity-20 transition-colors">
                      <Icon className="w-10 h-10 text-[#65E856]" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#65E856] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-3">{step.description}</p>
                  <p className="text-sm text-gray-500">{step.details}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Freely?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've built a platform that benefits everyone - users get free products, brands get valuable feedback.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-[#65E856] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-[#65E856]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Get answers to the most common questions about how Freely works.
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#65E856] to-[#5BD749]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Claiming Free Products?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already enjoying amazing products completely free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/signup"
              className="bg-white text-[#65E856] px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
            >
              Sign Up Now
            </a>
            <a
              href="/explore"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#65E856] transition-colors"
            >
              Browse Products
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
