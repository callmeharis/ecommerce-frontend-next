import React from "react";

const FFooter: React.FC = () => {
  return (
    <footer className="bg-[#781C2C] text-white p-4 md:p-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row flex-wrap justify-between items-center md:items-start gap-4 md:gap-6">
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start md:flex-1 text-xs md:text-sm my-2 px-8">
          <div className="flex items-center gap-2">
            <img
              className="w-28 md:w-36"
              src="https://demo.readyecommerce.app/assets/logoWhite.png"
              alt="Ready eCommerce Logo"
            />
          </div>
          <p className="text-center md:text-left mt-2 md:mt-3 leading-tight max-w-xs">
            The ultimate all-in-one solution for your eCommerce business worldwide.
          </p>
          <div className="bg-[#781C2C] text-white mt-4 p-3 rounded-md flex flex-col gap-2">
            {[{ icon: "📞", text: "01963953998" }, { icon: "📧", text: "support@razinsoft.com" }].map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-[#61151F] px-3 py-1.5 rounded-full"
              >
                <span className="text-base mr-2">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
            <div className="flex justify-center gap-2 mt-2">
              {[{ 
                href: "https://www.linkedin.com",
                src: "https://demo.readyecommerce.app/assets/icons/LinkedIn.svg",
                alt: "LinkedIn",
              },
              {
                href: "https://www.youtube.com",
                src: "https://demo.readyecommerce.app/assets/icons/YouTube.svg",
                alt: "YouTube",
              }].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#781C2C] p-2 rounded-full"
                >
                  <img src={link.src} alt={link.alt} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2 md:flex-1 text-xs md:text-sm">
          <h3 className=" text-xl my-2">Quick Links</h3>
          <ul className="flex flex-col gap-5">
            <li>
              <a href="#shops" className="hover:text-pink-500 text-base">
                Shops
              </a>
            </li>
            <li>
              <a href="#most-popular" className="hover:text-pink-500 text-base">
                Most Popular
              </a>
            </li>
            <li>
              <a href="#best-deal" className="hover:text-pink-500 text-base">
                Best Deal
              </a>
            </li>
            <li>
              <a href="#become-seller" className="hover:text-pink-500 text-base">
                Become a Seller
              </a>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div className="flex flex-col gap-2 md:flex-1 text-xs md:text-sm">
          <h3 className="text-xl my-2">Company</h3>
          <ul className="flex flex-col gap-5">
            <li>
              <a href="#about-us" className="hover:text-pink-500 text-base">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-pink-500 text-base">
                Contact
              </a>
            </li>
            <li>
              <a href="#terms" className="hover:text-pink-500 text-base">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#privacy" className="hover:text-pink-500 text-base">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* App Download */}
        <div className="flex flex-col md:flex-1">
          <h3 className="text-xl mb-3 my-2">Download our app</h3>
          <div className="flex gap-2">
            <a href="#" className="text-[#781C2C] px-2 py-2 my-2 rounded bg-pink-900">
              <img
                src="https://demo.readyecommerce.app/assets/icons/appstoreFooter.svg"
                alt="App Store"
                className="h-5 md:h-7"
              />
            </a>
            <a href="#" className="text-[#781C2C] px-2 py-2 my-2 rounded bg-pink-900">
              <img
                src="https://demo.readyecommerce.app/assets/icons/playstoreFooter.svg"
                alt="Google Play"
                className="h-5 md:h-7"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Divider and Copyright */}
      <div className="text-center mt-6">
        <hr className="border-pink-800 mb-3" />
        <p className="text-xs">© 2024 All rights reserved by RaziSoft.</p>
      </div>
    </footer>
  );
};

export default FFooter;
