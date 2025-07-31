import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions - Pizza Express',
  description: 'Terms and conditions for using Pizza Express services.',
};

function PageInfo({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 py-16 overflow-hidden">
      {/* Animated waves */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-12 text-white animate-pulse" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C300,0 900,120 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-6xl font-bold text-white mb-4">{children}</h1>
      </div>
    </div>
  );
}

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <PageInfo>TERMS & CONDITIONS</PageInfo>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to Pizza Express. These terms and conditions outline the rules and regulations for the use of Pizza Express's website and services. By accessing this website and placing orders, you accept these terms and conditions in full.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Service Availability</h2>
            <p className="text-gray-700 leading-relaxed">
              Our delivery service is available from 11 AM to 11 PM, 7 days a week. We deliver within our designated service areas only. Pizza Express reserves the right to refuse service or cancel orders at our discretion.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Ordering and Payment</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>All orders are subject to availability and confirmation</li>
              <li>Prices are subject to change without notice</li>
              <li>We accept cash on delivery and various digital payment methods</li>
              <li>Full payment is required at the time of delivery for COD orders</li>
              <li>We reserve the right to cancel orders for any reason</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Delivery Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We strive to deliver within 30 minutes of order confirmation. However, delivery times may vary based on weather conditions, traffic, and order volume. Pizza Express is not liable for delays beyond our control.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Returns and Refunds</h2>
            <p className="text-gray-700 leading-relaxed">
              Due to the nature of our food products, we do not accept returns. However, if you're not satisfied with your order, please contact us immediately, and we'll work to resolve the issue to your satisfaction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">
              All intellectual property rights of Pizza Express, including but not limited to copyright, logos, names, trademarks, service marks, design, text, sound recordings, images, links, concepts and themes are exclusively owned by Pizza Express Ltd. Any reproduction, transmission, publication, performance, broadcast, alteration, license, hyperlink, creation of derivative works or other use in whole or in part in any manner is strictly prohibited.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We respect your privacy and are committed to protecting your personal information. Please refer to our Privacy Policy for details on how we collect, use, and protect your data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              Pizza Express's liability is limited to the cost of the food ordered. We are not liable for any indirect, incidental, or consequential damages arising from the use of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              Pizza Express reserves the right to modify these terms and conditions at any time. Changes will be effective immediately upon posting on our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about these terms and conditions, please contact us at:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg mt-4">
              <p><strong>Email:</strong> legal@pizzaexpress.com</p>
              <p><strong>Phone:</strong> (555) 123-PIZZA</p>
              <p><strong>Address:</strong> 123 Pizza Street, Food City, FC 12345</p>
            </div>
          </section>

          <div className="text-center mt-12">
            <p className="text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
