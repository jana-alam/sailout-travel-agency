import React from "react";
import darklogo from "../../images/sailout-dark-logo.png";
import { MailIcon, PhoneIcon, HomeIcon } from "@heroicons/react/outline";

const Footer = () => {
  return (
    // Footer Section
    <footer>
      {/* footer-top section */}
      <div className="footer-top grid grid-cols-5 bg-gray-800 py-8 px-12">
        <div>
          <img src={darklogo} alt="" />
          <div className="text-left ml-2 mt-4 text-cyan-200">
            <div className="flex items-center">
              <HomeIcon className="w-4 h-4 mr-2" />
              <span>103,Los Angels, USA</span>
            </div>
            <div className="flex items-center">
              <PhoneIcon className="w-4 h-4 mr-2" />
              <span>+9-03303-02-303</span>
            </div>
            <div className="flex items-center">
              <MailIcon className="w-4 h-4 mr-2" />
              <span>info@sailout.com</span>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <h4 className="font-satisfy text-4xl text-cyan-400 text-center mb-4">
            Latest Tours
          </h4>

          <div className="grid grid-cols-3 gap-2">
            <img src="https://i.ibb.co/TWj3rzN/italy.jpg" alt="" />
            <img src="https://i.ibb.co/HGswJv3/hill.jpg" alt="" />
            <img src="https://i.ibb.co/6vc2zjC/sydney.jpg" alt="" />
          </div>
        </div>
        <div className="col-span-2">
          <h4 className="font-satisfy text-4xl text-cyan-400 text-center mb-4">
            Newsletter
          </h4>
          <div className="flex flex-col w-9/12 mx-auto">
            <input
              type="text"
              placeholder="someone@gmail.com"
              className="p-2  outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button className="px-20 py-2 mt-2 bg-cyan-500 text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      {/* footer-bottom section */}
      <div className="footer-bottom py-2 bg-black text-gray-50">
        <p>
          All Rights Reserved By <span className="text-cyan-400">sailout</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
