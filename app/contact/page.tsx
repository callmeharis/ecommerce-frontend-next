import React from 'react';
const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto">
      <div className="text-left mb-8 mt-8">
        <h1 className="text-3xl font-bold text-gray-800 ">
          Can't find the answer you are looking for?
        </h1>
        <p className="text-gray-600 text-xl">
          Our friendly assistant is here to assist you 24 hours a day!
        </p>
      </div>
      <div className="flex justify-between gap-6">
        <form className="space-y-6 bg-white p-6  rounded-lg w-[70%]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="fullName" className="block text-gray-700 font-medium">
                Full Name <span className="text-pink-700-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Enter full name"
                className="w-full h-10 border-gray-300 rounded-lg  focus:ring-pink-500 focus:border-pink-500"
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
                className="w-full h-10 border-gray-300 rounded-lg  focus:ring-pink-500 focus:border-pink-500"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="block text-gray-700 font-medium">
              Subject <span className="text-pink-700">*</span>
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Enter subject line"
              className="w-full h-10 border-gray-300 rounded-lg  focus:ring-pink-500 focus:border-pink-500"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium">
              Message <span className="text-pink-700">*</span>
            </label>
            <textarea
              id="message"
              placeholder="Write your message ..."
              rows={5}
<<<<<<< HEAD
              className="w-full border-gray-800 rounded-lg  focus:ring-pink-500 focus:border-pink-500"
=======
              className="w-full border-gray-300 rounded-lg  focus:ring-pink-500 focus:border-pink-500"
>>>>>>> ca89b515580a73b2cf0bdc41d548671b816e29ec
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-40 h-14 bg-pink-700 text-white py-2 px-4 rounded-lg hover:bg-pink-600 mb-10"
            >
              Send
            </button>
          </div>
        </form>
        <div className="hidden md:block">
          <img
            src="https://demo.readyecommerce.app/assets/images/contact-us.png"
            alt="Friendly Assistant"
            className="w-50 rounded-lg "
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
