import React from 'react';
import { FaShieldAlt, FaStar, FaHeadset, FaRedo } from 'react-icons/fa';

const Cards: React.FC = () => {
  const features = [
    {
      icon: <FaShieldAlt className="text-purple-500 text-3xl" />,
      title: 'Secure Payment Gateways',
      description: '48+ gateways to ensure your security.',
    },
    {
      icon: <FaStar className="text-yellow-500 text-3xl" />,
      title: 'Genuine Customer Reviews',
      description: 'Find verified reviews showcased on our platforms.',
    },
    {
      icon: <FaHeadset className="text-green-500 text-3xl" />,
      title: '24/7 Customer Support',
      description: 'Always our support team is available for you.',
    },
    {
      icon: <FaRedo className="text-blue-500 text-3xl" />,
      title: 'Easy Return Policy',
      description: "If you're not satisfied, return it hassle-free.",
    },
  ];

  return (
    <div className="bg-gray-50 p-8 rounded-lg ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white p-4 rounded-md shadow hover:shadow-lg transition-shadow duration-200"
          >
            <div className="mb-3">{feature.icon}</div>
            <h3 className="font-semibold text-lg text-gray-800">{feature.title}</h3>
            <p className="text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
