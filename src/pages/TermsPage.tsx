import React from 'react';
import { FileText, Shield, Users, AlertTriangle } from 'lucide-react';

export function TermsPage() {
  const termsSections = [
    {
      icon: Users,
      title: 'User Responsibilities',
      content: [
        'Provide accurate and truthful information',
        'Write honest and helpful product reviews',
        'Respect community guidelines',
        'Maintain account security'
      ]
    },
    {
      icon: Shield,
      title: 'Platform Rules',
      content: [
        'No fraudulent or misleading reviews',
        'No abuse of the claiming system',
        'Respect intellectual property rights',
        'Follow all applicable laws and regulations'
      ]
    },
    {
      icon: FileText,
      title: 'Service Terms',
      content: [
        'Products are provided as-is',
        'We reserve the right to modify services',
        'Account termination for violations',
        'Limitation of liability applies'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Prohibited Activities',
      content: [
        'Creating multiple accounts',
        'Selling or transferring claimed products',
        'Harassing other users',
        'Attempting to manipulate the system'
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
              <pattern id="terms-geometric" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="currentColor" opacity="0.3"/>
                <path d="M0,10 Q10,0 20,10 Q10,20 0,10" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#terms-geometric)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Terms of <span className="text-[#65E856]">Service</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Please read these terms carefully before using Freely. By using our service, you agree to these terms.
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

      {/* Terms Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Terms Overview</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These terms govern your use of Freely and outline the rules and responsibilities for all users of our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {termsSections.map((section, index) => {
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

      {/* Detailed Terms */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Detailed Terms of Service</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h3>
              <div className="bg-white rounded-lg p-6">
                <p className="text-gray-600">
                  By accessing and using Freely, you accept and agree to be bound by the terms and provision of this agreement. 
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Description of Service</h3>
              <div className="bg-white rounded-lg p-6">
                <p className="text-gray-600 mb-4">
                  Freely is a platform that connects users with brands offering free products in exchange for honest reviews. 
                  Our service includes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Product browsing and claiming functionality</li>
                  <li>Review submission and management</li>
                  <li>User account management</li>
                  <li>Customer support services</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">3. User Accounts</h3>
              <div className="bg-white rounded-lg p-6">
                <p className="text-gray-600 mb-4">
                  To use certain features of Freely, you must create an account. You agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Notify us immediately of any unauthorized use</li>
                  <li>Accept responsibility for all activities under your account</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">4. Product Claims and Reviews</h3>
              <div className="bg-white rounded-lg p-6">
                <p className="text-gray-600 mb-4">
                  When claiming products and writing reviews, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Write honest, accurate, and helpful reviews</li>
                  <li>Submit reviews within the specified timeframe</li>
                  <li>Not engage in review manipulation or fraud</li>
                  <li>Respect the intellectual property of brands</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">5. Prohibited Activities</h3>
              <div className="bg-white rounded-lg p-6">
                <p className="text-gray-600 mb-4">
                  You may not use Freely to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Harass, abuse, or harm other users</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Use automated tools to manipulate the platform</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">6. Termination</h3>
              <div className="bg-white rounded-lg p-6">
                <p className="text-gray-600 mb-4">
                  We may terminate or suspend your account at any time for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Violation of these terms</li>
                  <li>Fraudulent or abusive behavior</li>
                  <li>Failure to comply with community guidelines</li>
                  <li>Any other reason at our sole discretion</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h3>
              <div className="bg-white rounded-lg p-6">
                <p className="text-gray-600">
                  Freely shall not be liable for any indirect, incidental, special, consequential, or punitive damages, 
                  including without limitation, loss of profits, data, use, goodwill, or other intangible losses, 
                  resulting from your use of the service.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">8. Changes to Terms</h3>
              <div className="bg-white rounded-lg p-6">
                <p className="text-gray-600">
                  We reserve the right to modify these terms at any time. We will notify users of any material changes 
                  via email or through the platform. Your continued use of Freely after such modifications constitutes 
                  acceptance of the updated terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Questions About Terms?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            If you have any questions about these terms of service, please contact our legal team.
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
