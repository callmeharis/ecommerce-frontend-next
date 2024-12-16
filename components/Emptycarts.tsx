import React from "react";

const EmptyCart: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-start">
      <div className="w-full  mx-auto">
        <div className="flex items-center justify-start p-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="text-pink-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 5h14M5 5L4 15a2 2 0 002 2h12a2 2 0 002-2l-1-10M8 9h8"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 ">My Cart</h1>
            <span className="text-lg text-pink-700">(0 items)</span>
          </div>
        </div>

        {/* Empty State */}
        <div className="flex flex-col items-center justify-center py-24">
          <div className="flex items-center justify-center w-20 h-20 bg-pink-100 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-pink-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h18l-1.5 13.5a2 2 0 01-2 1.5H6.5a2 2 0 01-2-1.5L3 3z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7h8m-4 4h0"
              />
            </svg>
          </div>
          <p className="mt-4 text-lg text-gray-600">Cart is empty</p>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
