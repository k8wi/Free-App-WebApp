import React from 'react';
import { Shield, Eye, Lock, Users } from 'lucide-react';

export function PrivacyPage() {
  const privacySections = [
    {
      icon: Eye,
      title: 'Information We Collect',
      content: [
        'Personal information (name, email, shipping address)',
        'Usage data and preferences',
        'Product reviews and feedback',
        'Communication records'
      ]
    },
    {
      icon: Lock,
      title: 'How We Use Your Information',
      content: [
        'To provide and improve our services',
        'To fulfill product claims and shipping',
        'To communicate with you about your account',
        'To share with brand partners for product fulfillment'
      ]
    },
    {
      icon: Shield,
      title: 'Data Protection',
      content: [
        'We use industry-standard encryption',
        'Your data is stored securely',
        'We never sell your personal information',
        'You can request data deletion at any time'
      ]
    },
    {
      icon: Users,
      title: 'Information Sharing',
      content: [
        'We only share data necessary for product fulfillment',
        'Brand partners receive minimal required information',
        'We do not share data with third-party advertisers',
        'Legal requirements may require limited disclosure'
      ]
    }
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 py-24">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="privacy-geometric" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="currentColor" opacity="0.3"/>
                <path d="M0,10 Q10,0 20,10 Q10,20 0,10" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#privacy-geometric)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Privacy <span className="text-[#65E856]">Policy</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Your privacy is important to us. Learn how we collect, use, and protect your personal information.
          </p>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 text-center">
            Last updated: December 15, 2024
          </p>
        </div>
      </section>

      {/* Privacy Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Privacy Matters</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At Freely, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This policy explains how we handle your data and your rights regarding your information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {privacySections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#65E856] bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                      <Icon className="w-6 h-6 text-[#65E856]" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{section.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-600 text-sm flex items-start">
                        <span className="w-2 h-2 bg-[#65E856] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Policy */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Detailed Privacy Policy</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Information We Collect</h3>
              <div className="bg-white rounded-lg p-6">
                <p className="text-gray-600 mb-4">
                  We collect information you provide directly to us, such as when you create an account, claim products, 
                  or contact our support team. This may include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Name, email address, and shipping address</li>
                  <li>Account preferences and settings</li>
                  <li>Product reviews and feedback</li>
                  <li>Communication history with our support team</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h3>
              <div className="bg-white rounded-lg p-6">
                <p className="text-gray-600 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Provide and maintain our services</li>
                  <li>Process and fulfill your product claims</li>
                  <li>Communicate with you about your account and products</li>
                  <li>Improve our platform and user experience</li>
                  <li>Ensure compliance with legal obligations</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Information Sharing</h3>
              <div className="bg-white rounded-lg p-6">
                <p className="text-gray-600 mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>With brand partners to fulfill your claimed products</li>
                  <li>With service providers who assist in our operations</li>
                  <li>When required by law or to protect our rights</li>
                  <li>With your explicit consent</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">4. Your Rights</h3>
              <div className="bg-white rounded-lg p-6">
                <p className="text-gray-600 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Access and review your personal information</li>
                  <li>Update or correct your information</li>
                  <li>Request deletion of your account and data</li>
                  <li>Opt out of marketing communications</li>
                  <li>File a complaint with relevant authorities</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">5. Data Security</h3>
              <div className="bg-white rounded-lg p-6">
                <p className="text-gray-600 mb-4">
                  We implement appropriate security measures to protect your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Limited access to personal information</li>
                  <li>Secure data storage and processing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Questions About Privacy?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            If you have any questions about this privacy policy or how we handle your data, please contact us.
          </p>
          <a
            href="/contact"
            className="bg-[#65E856] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#5BD749] transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
