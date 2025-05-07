import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
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

  const handleServiceSelect = (service: any) => {
    navigate('/booking', { 
      state: { 
        selectedService: service,
        formData: formData
      }
    });
  };

  const services = [
    {
      id: 'house-mover',
      icon: "🚚",
      title: "Professional House Mover Package",
      description: "Online Consultation\nFull Package Professional Movers Deal - Hire Professionals for the entire day *Excludes Mileage*",
      duration: "12 hr",
      price: null,
      link: "/services/house-mover"
    },
    {
      id: 'residential',
      icon: "📦",
      title: "Professional Residential / Local Movers",
      description: "Online Consultation\nBasic Moving Services - 2 guys + Truck + Moving Essentials",
      duration: "3 hr - 9 hr",
      price: "From $375",
      link: "/services/residential"
    },
    {
      id: 'gun-safe',
      icon: "🔒",
      title: "Gun Safe/Vault Movers",
      description: "Online Consultation",
      duration: "3 hr - 6 hr",
      price: "From $725",
      link: "/services/gun-safe"
    },
    {
      id: 'additional-mover',
      icon: "👥",
      title: "Additional Mover",
      description: "Get professional help with loading your belongings",
      duration: "1 hr - 7 hr",
      price: "From $45",
      link: "/services/additional-mover"
    },
    {
      id: 'art-packing',
      icon: "🎨",
      title: "Art Packing (3 Hour Min)",
      description: "Online Consultation\nBasic Moving Services - 2 guys + Truck + Moving Essentials",
      duration: "3 hr - 9 hr",
      price: "From $750",
      link: "/services/art-packing"
    },
    {
      id: 'furniture-assembly',
      icon: "🪑",
      title: "Furniture Assembly",
      description: "",
      duration: "1 hr 30 min - 7 hr",
      price: "From $75",
      link: "/services/furniture-assembly"
    },
    {
      id: 'college-dorm',
      icon: "🎓",
      title: "College Dorm Move (Complete Package)",
      description: "Efficiently move your entire house with our professional moving services",
      duration: "2 hr",
      price: null,
      link: "/services/college-dorm"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Pack Go Movers Services</h1>
            <p className="text-xl">Professional moving services tailored to your needs</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-2 whitespace-pre-line">{service.description}</p>
                <p className="text-gray-600 mb-2">{service.duration}</p>
                {service.price && <p className="text-blue-600 font-semibold mb-4">{service.price}</p>}
                <div className="flex space-x-4">
                  <button 
                    onClick={() => handleServiceSelect(service)}
                    className="flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
                  >
                    Make Your Reservation
                  </button>
                  <button 
                    onClick={() => navigate(service.link)}
                    className="flex-1 border border-blue-600 text-blue-600 py-2 rounded-md hover:bg-blue-50 transition duration-300"
                  >
                    View Pricing Options
                  </button>
                </div>
              </div>
            ))}
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
    </div>
  );
};

export default Services; 