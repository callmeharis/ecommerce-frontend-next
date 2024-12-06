import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto">
      {/* Header Section */}
      <div className="text-left mb-8">
        <h1 className="text-2xl font-bold text-gray-800">
          Can't find the answer you are looking for?
        </h1>
        <p className="text-gray-600">
          Our friendly assistant is here to assist you 24 hours a day!
        </p>
      </div>

      {/* Form and Image Section */}
      <div className="flex justify-between gap-6">
        {/* Form */}
        <form className="space-y-6 bg-white p-6  rounded-lg w-[70%]">
          {/* Full Name and Phone Number */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="fullName" className="block text-gray-700 font-medium">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Enter full name"
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500"
                required
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-gray-700 font-medium">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="phoneNumber"
                placeholder="Enter phone number"
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500"
                required
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-gray-700 font-medium">
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Enter subject line"
              className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              placeholder="Write your message ..."
              rows={5}
              className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-600 "
            >
              Send
            </button>
          </div>
        </form>

        {/* Image */}
        <div className="hidden md:block">
          <img
            src="https://demo.readyecommerce.app/assets/images/contact-us.png" // Make sure to replace with the actual image path in your project
            alt="Friendly Assistant"
            className="w-50 rounded-lg "
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
