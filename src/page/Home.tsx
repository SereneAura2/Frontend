import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fromZip: '',
    toZip: '',
    moveDate: '',
    rooms: '',
    firstName: '',
    lastName: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    navigate('/booking');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Pack Go Movers</h1>
            <p className="text-xl mb-8">
              Professional moving services for your home and office needs
            </p>
            <div className="flex justify-center space-x-4">
              <button 
                onClick={() => navigate('/booking')}
                className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-300"
              >
                Request a Quote
              </button>
              <button 
                onClick={() => navigate('/contact')}
                className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
              >
                Let's Chat
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Moving Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold mb-4">Professional House Mover Package</h3>
              <p className="text-gray-600 mb-4">12 hr</p>
              <div className="flex space-x-4">
                <button 
                  onClick={() => navigate('/booking')}
                  className="flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Book Now
                </button>
                <button 
                  onClick={() => navigate('/services')}
                  className="flex-1 border border-blue-600 text-blue-600 py-2 rounded-md hover:bg-blue-50 transition duration-300"
                >
                  Explore Plans
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-semibold mb-4">Professional Residential / Local Movers</h3>
              <p className="text-gray-600 mb-2">3 hr - 9 hr</p>
              <p className="text-blue-600 font-semibold mb-4">From $375</p>
              <div className="flex space-x-4">
                <button 
                  onClick={() => navigate('/booking')}
                  className="flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Book Now
                </button>
                <button 
                  onClick={() => navigate('/services')}
                  className="flex-1 border border-blue-600 text-blue-600 py-2 rounded-md hover:bg-blue-50 transition duration-300"
                >
                  Explore Plans
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-4">Gun Safe/Vault Movers</h3>
              <p className="text-gray-600 mb-2">3 hr - 6 hr</p>
              <p className="text-blue-600 font-semibold mb-4">From $725</p>
              <div className="flex space-x-4">
                <button 
                  onClick={() => navigate('/booking')}
                  className="flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Book Now
                </button>
                <button 
                  onClick={() => navigate('/services')}
                  className="flex-1 border border-blue-600 text-blue-600 py-2 rounded-md hover:bg-blue-50 transition duration-300"
                >
                  Explore Plans
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Pack Go Movers?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">👨‍💼</div>
              <h3 className="text-xl font-semibold mb-2">Experienced Professionals</h3>
              <p className="text-gray-600">Our team consists of trained and experienced movers</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-2">Fully Insured</h3>
              <p className="text-gray-600">Your belongings are protected with our comprehensive insurance</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2">Affordable Rates</h3>
              <p className="text-gray-600">Competitive pricing with transparent quotes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-xl text-gray-600 italic">
              "I recently moved with Pack Go Movers and was extremely satisfied with their service. The team was professional, efficient, and careful with my belongings."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Get Your Free Quote</h2>
            <p className="text-center text-gray-600 mb-8">Fill out the form and a team member will follow up with you</p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fromZip" className="block text-sm font-medium text-gray-700 mb-1">Moving From Zip Code</label>
                  <input
                    type="text"
                    id="fromZip"
                    name="fromZip"
                    value={formData.fromZip}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="toZip" className="block text-sm font-medium text-gray-700 mb-1">Moving to Zip Code</label>
                  <input
                    type="text"
                    id="toZip"
                    name="toZip"
                    value={formData.toZip}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="moveDate" className="block text-sm font-medium text-gray-700 mb-1">Moving Date</label>
                  <input
                    type="date"
                    id="moveDate"
                    name="moveDate"
                    value={formData.moveDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="rooms" className="block text-sm font-medium text-gray-700 mb-1">Number of Rooms</label>
                  <input
                    type="text"
                    id="rooms"
                    name="rooms"
                    value={formData.rooms}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Submit
              </button>
            </form>
            <p className="text-center text-gray-600 mt-4">Someone from our team will be reaching out soon!</p>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Servicing</h2>
          <div className="text-center text-gray-600">
            <p>Newport Beach, Laguna Hills, Lake Forest, Irvine, Tustin, North Tustin,</p>
            <p>Santa Ana, Orange, Brea, Los Angeles, Long Beach, Seal Beach</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 