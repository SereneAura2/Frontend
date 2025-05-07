import SignupForm from '@/component/SignupForm';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Welcome to Home Haulers
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Your trusted partner for stress-free moving experiences. We're launching soon - be the first to know!
          </p>
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