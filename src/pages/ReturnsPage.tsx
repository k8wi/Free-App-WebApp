import React from 'react';
import { RefreshCw, Package, AlertTriangle, CheckCircle } from 'lucide-react';

export function ReturnsPage() {
  const returnPolicy = [
    {
      icon: Package,
      title: 'Product Condition',
      description: 'Products must be in original condition with all packaging intact'
    },
    {
      icon: RefreshCw,
      title: 'Return Window',
      description: 'Returns must be initiated within 30 days of receiving the product'
    },
    {
      icon: AlertTriangle,
      title: 'Damaged Items',
      description: 'Contact us immediately if you receive damaged or defective products'
    },
    {
      icon: CheckCircle,
      title: 'Review Requirement',
      description: 'You must still submit a review even if returning the product'
    }
  ];

  const returnSteps = [
    {
      step: 1,
      title: 'Contact Support',
      description: 'Reach out to our support team within 30 days of receiving your product'
    },
    {
      step: 2,
      title: 'Provide Details',
      description: 'Include your order number and reason for return'
    },
    {
      step: 3,
      title: 'Get Approval',
      description: 'We\'ll review your request and provide return instructions'
    },
    {
      step: 4,
      title: 'Ship Product',
      description: 'Ship the product back using the provided shipping label'
    }
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 py-24">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="returns-geometric" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="currentColor" opacity="0.3"/>
                <path d="M0,10 Q10,0 20,10 Q10,20 0,10" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#returns-geometric)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Returns & <span className="text-[#65E856]">Refunds</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            While our products are free, we understand that sometimes returns are necessary. Learn about our return policy and process.
          </p>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 bg-yellow-50 border-b border-yellow-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3" />
            <p className="text-yellow-800 font-medium">
              Important: Since products are free, we do not offer refunds. Returns are only accepted for damaged or defective items.
            </p>
          </div>
        </div>
      </section>

      {/* Return Policy Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Return Policy</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our return policy is designed to ensure you receive quality products while maintaining the integrity of our free product program.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {returnPolicy.map((policy, index) => {
              const Icon = policy.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#65E856] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-[#65E856]" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{policy.title}</h3>
                  <p className="text-gray-600 text-sm">{policy.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Return Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Return Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Follow these steps if you need to return a product. Remember, returns are only accepted for damaged or defective items.
            </p>
          </div>

          <div className="space-y-8">
            {returnSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-[#65E856] text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Can Be Returned */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Can Be Returned?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 mr-2" />
                Acceptable Returns
              </h3>
              <ul className="space-y-2 text-green-700">
                <li>• Damaged products received</li>
                <li>• Defective items that don't work</li>
                <li>• Wrong products shipped</li>
                <li>• Products with missing parts</li>
                <li>• Expired food or beauty products</li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <h3 className="text-xl font-semibold text-red-800 mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-2" />
                Not Acceptable
              </h3>
              <ul className="space-y-2 text-red-700">
                <li>• Changed your mind</li>
                <li>• Don't like the product</li>
                <li>• Product doesn't fit</li>
                <li>• Opened and used products</li>
                <li>• Missing original packaging</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Why don't you offer refunds?</h3>
              <p className="text-gray-600">
                Since all products on Freely are completely free, there are no payments to refund. Our brand partners cover all costs.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if I receive a damaged product?</h3>
              <p className="text-gray-600">
                Contact our support team immediately with photos of the damage. We'll work with the brand to get you a replacement or alternative product.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do I still need to write a review if I return the product?</h3>
              <p className="text-gray-600">
                Yes, you must still submit a review explaining why you returned the product. This helps other users and provides valuable feedback to brands.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How long does the return process take?</h3>
              <p className="text-gray-600">
                Once we approve your return, you'll receive a shipping label. After we receive the returned product, we'll process your replacement within 5-7 business days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need to Return a Product?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our support team to start the return process. Please have your order number and photos of any damage ready.
          </p>
          <a
            href="/contact"
            className="bg-[#65E856] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#5BD749] transition-colors"
          >
            Contact Support
          </a>
        </div>
      </section>
    </main>
  );
}
