import React from "react";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full px-2 mt-24 text-center text-gray-300 bg-slate-900 py-y">
      <div className="max-w-[1240px] text-center mx-auto grid grid-cols-2 lg:grid-cols-6 md:grid-cols-5 border-b-2 border-gray-600 py-8">
        <div>
          <h6 className="pt-2 font-bold ">SOLUTIONS</h6>
          <ul>
            <li className="py-1 ">Marketing</li>
            <li className="py-1 ">Analytics</li>
            <li className="py-1 ">Commerce</li>
            <li className="py-1 ">Data</li>
            <li className="py-1 ">Cloud</li>
          </ul>
        </div>

        <div>
          <h6 className="pt-2 font-bold ">SUPPORT</h6>
          <ul>
            <li className="py-1 ">Pricing</li>
            <li className="py-1 ">Documentation</li>
            <li className="py-1 ">Guides</li>
            <li className="py-1 ">API Status</li>
          </ul>
        </div>

        <div>
          <h6 className="pt-2 font-bold ">COMPANY</h6>
          <ul>
            <li className="py-1 ">About</li>
            <li className="py-1 ">Blog</li>
            <li className="py-1 ">Jobs</li>
            <li className="py-1 ">Press</li>
            <li className="py-1 ">Partners</li>
          </ul>
        </div>

        <div>
          <h6 className="pt-2 font-bold ">LEGAL</h6>
          <ul>
            <li className="py-1 ">Claims</li>
            <li className="py-1 ">Privacy</li>
            <li className="py-1 ">Terms</li>
            <li className="py-1 ">Policies</li>
            <li className="py-1 ">Conditions</li>
          </ul>
        </div>
        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase">Subscribe to our newsletter</p>
          <p className="py-4">
            The latest news, articles, and resources, sent to your inbox weekly
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mb-4 mr-4 rounded-md"
              type="email"
              placeholder="Enter email"
            />
            <button className="p-2 mb-4">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="flex-col flex max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4">2022 Workflow, LLC. All rights reserved</p>
        <div className="flex sm:w-[300px] justify-around pt-4 text-2xl">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaTwitch />
          <FaGithub />
        </div>
      </div>
    </div>
  );
};

export default Footer;
