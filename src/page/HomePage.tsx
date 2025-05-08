import SignupForm from '@/component/SignupForm';
import ServicesSlideshow from '@/component/ServicesSlideshow';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Pack Go Movers
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Your trusted partner for stress-free moving experiences. We're launching soon - be the first to know!
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Our Moving Services
          </h2>
          <ServicesSlideshow />
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl text-gray-600 mb-8">
            Professional moving services for your home and office needs
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Request a Quote
            </button>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Let's Chat
            </button>
          </div>
        </div>

        <div className="mt-12">
          <SignupForm />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">Professional Service</h3>
              <p className="mt-2 text-sm text-gray-500">
                Our experienced team ensures your belongings are handled with care and professionalism.
              </p>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">Nationwide Coverage</h3>
              <p className="mt-2 text-sm text-gray-500">
                Moving anywhere in the country? We've got you covered with our extensive network.
              </p>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">Competitive Pricing</h3>
              <p className="mt-2 text-sm text-gray-500">
                Get transparent quotes and competitive rates for your moving needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 