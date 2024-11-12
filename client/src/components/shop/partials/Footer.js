import React, { Fragment } from "react";
import moment from "moment";
import img from "../../../Assets/Sryshaya-Logo.png";

const Footer = (props) => {
  return (
    <Fragment>
      <footer style={{ backgroundColor: '#f3f6fa' }} className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start">
          {/* Company Info */}
          <div className="flex flex-col mb-4 sm:mb-0 mt-2">
            <img
              alt="Company Logo"
              className="h-20 w-40 object-contain mb-4 sm:mb-0"
              src={img}
            />
            <address className="not-italic">
              <strong>Address:</strong> 321, 3rd Floor, Silver Business Hub, Bapa Sitaram Chowk, Nr. Yogi Chowk, Simada, Surat-395006
            </address>
            <div className="flex flex-col mt-4 sm:flex-row">
              <div className="flex flex-col mr-4">
                <p><strong>Call us:</strong> +91-9081804600</p>
                <p><strong>Call us:</strong> +91-9081804700</p>
                <p><strong>Call us:</strong> +91-9081804800</p>
                <p><strong>Call us:</strong> 0 261 440 3847</p>
              </div>
              <div className="flex flex-col mt-4 sm:mt-0">
                <p><strong>Email:</strong> salesrysahaya@gmail.com</p>
                <p><strong>Email:</strong> support@sryshaya.com</p>
              </div>
            </div>
          </div>
          {/* Useful Links */}
          <div className="flex flex-col mt-4 sm:mt-0">
            <h3 className="text-xl font-semibold">Useful Links</h3>
            <ul className="mt-2 space-y-2">
              <li><a className="text-base text-gray-600 hover:text-gray-800" href="/about-us">About Us</a></li>
              <li><a className="text-base text-gray-600 hover:text-gray-800" href="/contact-us">Contact Us</a></li>
              <li><a className="text-base text-gray-600 hover:text-gray-800" href="/">Privacy Policy</a></li>
              <li><a className="text-base text-gray-600 hover:text-gray-800" href="/">Terms & Conditions</a></li>
              <li><a className="text-base text-gray-600 hover:text-gray-800" href="/">Cancellations & Returns</a></li>
            </ul>
          </div>
          {/* Our Products */}
          <div className="flex flex-col mt-4 sm:mt-0">
            <h3 className="text-xl font-semibold">Our Products</h3>
            <ul className="mt-2 space-y-2">
              <li><a className="text-base text-gray-600 hover:text-gray-800" href="/">Papaya Powder</a></li>
              <li><a className="text-base text-gray-600 hover:text-gray-800" href="/">Mango Powder</a></li>
              <li><a className="text-base text-gray-600 hover:text-gray-800" href="/">Banana Powder</a></li>
              <li><a className="text-base text-gray-600 hover:text-gray-800" href="/">Apple Powder</a></li>
              <li><a className="text-base text-gray-600 hover:text-gray-800" href="/">Pineapple Powder</a></li>
              <li><a className="text-base text-gray-600 hover:text-gray-800" href="/">Strawberry Powder</a></li>
              <li><a className="text-base text-gray-600 hover:text-gray-800" href="/">Pomegranate Powder</a></li>
            </ul>
          </div>
          {/* More Products */}
          <div className="flex flex-col mt-4 sm:mt-0">
            <h3 className="text-xl font-semibold">More Products</h3>
            <ul className="mt-2 space-y-2">
              <li><a className="text-base text-gray-600 hover:text-gray-800" href="/">Dehydrated Carrot</a></li>
              <li><a className="text-base text-gray-600 hover:text-gray-800" href="/">Dehydrated Tomato</a></li>
              <li><a className="text-base text-gray-600 hover:text-gray-800" href="/">Dehydrated Potato</a></li>
              <li><a className="text-base text-gray-600 hover:text-gray-800" href="/">Dehydrated Cabbage</a></li>
              <li><a className="text-base text-gray-600 hover:text-gray-800" href="/">Dehydrated Red Onion</a></li>
              <li><a className="text-base text-gray-600 hover:text-gray-800" href="/"> Dehydrated Green Chilli</a></li>
              <li><a className="text-base text-gray-600 hover:text-gray-800" href="/">Dehydrated White Onion</a></li>
            </ul>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="bg-[#e6e6e6] py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">&copy; {moment().format("YYYY")} Sryshaya | All rights reserved</p>
            <p className="text-sm text-gray-600 mt-2 sm:mt-0">Designed & Developed by Sryshaya Group</p>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
