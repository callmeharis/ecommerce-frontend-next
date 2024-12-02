"use client"
import React, { useState } from 'react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-md p-6 bg-white rounded-md shadow-lg">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Tabs */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setActiveTab('login')}
            className={`px-4 py-2 ${
              activeTab === 'login'
                ? 'border-b-2 border-pink-500 text-pink-500'
                : 'text-gray-600'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setActiveTab('signup')}
            className={`px-4 py-2 ${
              activeTab === 'signup'
                ? 'border-b-2  border-pink-500 text-pink-500'
                : 'text-gray-600'
            }`}
          >
            Signup
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          <div>
            Welcome!
            <br />
            Please Login to Continue
          </div>
          <br />
          {activeTab === 'login' && (
             <form className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded-md"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border rounded-md"
              />
              <button
                type="submit"
                className="w-full py-2 text-white bg-pink-400 rounded-md hover:bg-pink-500"
              >
                Login
              </button>
            </form>
          )}

          {activeTab === 'signup' && (
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-2 border rounded-md"
              />
              <input
                type="number"
                placeholder="Phone Number"
                className="w-full p-2 border rounded-md"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded-md"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border rounded-md"
              />
              <button
                type="submit"
                className="w-full py-2 text-white bg-pink-400 rounded-md hover:bg-pink-500"
              >
                Signup
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
