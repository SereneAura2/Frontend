import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Value>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState<any>(null);

  useEffect(() => {
    if (location.state) {
      setBookingData(location.state);
    } else {
      navigate('/services');
    }
  }, [location, navigate]);

  // Mock function to get available times for a date
  const getAvailableTimes = (date: Date) => {
    // This would typically come from your backend
    const times = [
      '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
      '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM',
      '04:00 PM', '05:00 PM'
    ];
    return times;
  };

  const handleDateChange = (date: Value) => {
    setSelectedDate(date);
    if (date instanceof Date) {
      setAvailableTimes(getAvailableTimes(date));
    }
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep(3);
  };

  const handleConfirmBooking = () => {
    // Here you would typically send the booking data to your backend
    console.log('Booking confirmed:', {
      service: bookingData?.selectedService,
      date: selectedDate,
      time: selectedTime,
      customerInfo: bookingData?.formData
    });
    // Navigate to confirmation page or show success message
  };

  if (!bookingData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-8 text-center">Book Your Service</h1>
          
          {/* Progress Steps */}
          <div className="flex justify-between mb-8">
            <div className={`step ${step >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
              1. Select Date
            </div>
            <div className={`step ${step >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
              2. Choose Time
            </div>
            <div className={`step ${step >= 3 ? 'text-blue-600' : 'text-gray-400'}`}>
              3. Confirm Booking
            </div>
          </div>

          {/* Step 1: Calendar */}
          {step === 1 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Select a Date</h2>
              <Calendar
                onChange={handleDateChange}
                value={selectedDate}
                minDate={new Date()}
                className="w-full border-none"
              />
              <button
                onClick={() => setStep(2)}
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
              >
                Continue
              </button>
            </div>
          )}

          {/* Step 2: Time Selection */}
          {step === 2 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Select a Time</h2>
              <div className="grid grid-cols-3 gap-4">
                {availableTimes.map((time) => (
                  <button
                    key={time}
                    onClick={() => handleTimeSelect(time)}
                    className="p-3 border border-gray-300 rounded-md hover:border-blue-500 hover:bg-blue-50"
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Confirm Your Booking</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Service:</h3>
                  <p>{bookingData.selectedService.title}</p>
                </div>
                <div>
                  <h3 className="font-medium">Date:</h3>
                  <p>{selectedDate instanceof Date ? selectedDate.toLocaleDateString() : ''}</p>
                </div>
                <div>
                  <h3 className="font-medium">Time:</h3>
                  <p>{selectedTime}</p>
                </div>
                <div>
                  <h3 className="font-medium">Customer Information:</h3>
                  <p>Name: {bookingData.formData.firstName} {bookingData.formData.lastName}</p>
                  <p>Phone: {bookingData.formData.phone}</p>
                </div>
                <button
                  onClick={handleConfirmBooking}
                  className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking; 