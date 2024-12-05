import React from "react";
const Cards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-gray-50">
      <div className="flex items-center space-x-4 p-5 bg-white shadow-sm rounded-lg">
        <div className="flex items-center justify-center w-12 h-12 bg-purple-100 text-pink-700 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 9V7a4 4 0 10-8 0v2m9 4a3 3 0 11-6 0m6 0H9m6 0a3 3 0 11-6 0m6 0H9"
            />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-bold">Secure Payment Gateways</h3>
          <p className="text-gray-600">48+ gateways to ensure your security.</p>
        </div>
      </div>
      <div className="flex items-center space-x-4 p-5 bg-white shadow-sm rounded-lg">
        <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 4c-1.104 0-2 .896-2 2v1h4v-1c0-1.104-.896-2-2-2zm0 2c.552 0 1-.448 1-1s-.448-1-1-1-.896 1-.896 1c.448 1 1 1z"
            />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-bold">Genuine Customer Reviews</h3>
          <p className="text-gray-600">Find verified reviews showcased on our platforms.</p>
        </div>
      </div>
      <div className="flex items-center space-x-4 p-5 bg-white shadow-sm rounded-lg">
        <div className="flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 14h.01M16 10h.01M9 21h6a2 2 0 002-2v-4.68a2 2 0 00-.9-1.65L13 10.58V7a1 1 0 00-1-1 1 1 0 00-1 1v3.58l-2.1 1.57A2 2 0 007 14.32V19a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-bold">24/7 Customer Support</h3>
          <p className="text-gray-600">Always our support team is available for you.</p>
        </div>
      </div>
      <div className="flex items-center space-x-4 p-5 bg-white shadow-sm rounded-lg">
        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 10h2a2 2 0 012 2v4a2 2 0 002 2h10m3-10l-4-4m0 0l4-4m-4 4H7m0 0l4-4"
            />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-bold">Easy Return Policy</h3>
          <p className="text-gray-600">If you're not satisfied, return it hassle-free.</p>
        </div>
      </div>
    </div>
  );
};
export default Cards;