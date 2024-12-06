import React from "react";
const FFooter: React.FC = () => {
  return (
    <footer className="bg-[#781C2C] text-white p-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row flex-wrap justify-between items-center md:items-start gap-8">
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start md:flex-1">
          <div className="flex items-center gap-2">
            <img
              className="w-40"
              src="https://demo.readyecommerce.app/assets/logoWhite.png"
              alt="Ready eCommerce Logo"
            />
          </div>
          <p className="text-center md:text-left mt-4 max-w-xs">
            The ultimate all-in-one solution for your eCommerce business worldwide.
          </p>
          <div className="bg-[#781C2C] text-white mt-6 p-4 rounded-md flex flex-col gap-4">
            {[{ icon: "📞", text: "01963953998" }, { icon: "📧", text: "support@razinsoft.com" }].map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-[#61151F] px-4 py-2 rounded-full"
              >
                <span className="text-xl mr-3">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
            <div className="flex justify-center gap-4">
              {[
                {
                  href: "https://www.linkedin.com",
                  src: "https://demo.readyecommerce.app/assets/icons/LinkedIn.svg",
                  alt: "LinkedIn",
                },
                {
                  href: "https://www.youtube.com",
                  src: "https://demo.readyecommerce.app/assets/icons/YouTube.svg",
                  alt: "YouTube",
                },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#781C2C] p-2 rounded-full"
                >
                  <img src={link.src} alt={link.alt} className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-1">
          <h3 className="font-bold">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="#shops" className="hover:text-pink-500">
                Shops
              </a>
            </li>
            <li>
              <a href="#most-popular" className="hover:text-pink-500">
                Most Popular
              </a>
            </li>
            <li>
              <a href="#best-deal" className="hover:text-pink-500">
                Best Deal
              </a>
            </li>
            <li>
              <a href="#become-seller" className="hover:text-pink-500">
                Become a Seller
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 md:flex-1">
          <h3 className="font-bold">Company</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="#about-us" className="hover:text-pink-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-pink-500">
                Contact
              </a>
            </li>
            <li>
              <a href="#terms" className="hover:text-pink-500">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#privacy" className="hover:text-pink-500">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col md:flex-1">
          <h3 className="font-bold mb-4">Download our app</h3>
          <div className="flex gap-2">
            <a href="#" className="text-[#781C2C] px-4 py-2 rounded bg-pink-900">
              <img
                src="https://demo.readyecommerce.app/assets/icons/appstoreFooter.svg"
                alt="App Store"
                className="h-6"
              />
            </a>
            <a href="#" className="text-[#781C2C] px-4 py-2 rounded bg-pink-900">
              <img
                src="https://demo.readyecommerce.app/assets/icons/playstoreFooter.svg"
                alt="Google Play"
                className="h-6"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>© 2024 All rights reserved by RaziSoft.</p>
      </div>
    </footer>
  );
};
export default FFooter;