import React from "react";

import { PhoneIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { CpuChipIcon, LightBulbIcon } from "@heroicons/react/24/solid";

import supportImg from "../assets/support.jpg";

const Support = () => {
  return (
    //! SUPPORT
    <div name="support" className="w-full mt-24">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          className="object-cover w-full h-full mix-blend-overlay"
          src={supportImg}
          alt="/"
        />
      </div>

      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="pt-8 text-3xl text-center text-slate-300">SUPPORT</h2>
          <h3 className="py-6 text-5xl font-bold text-center">
            Finding the right team
          </h3>
          <p className="py-4 text-3xl text-slate-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
            repudiandae ex laborum veritatis quaerat.
          </p>
        </div>

        <div className="relative grid grid-cols-1 px-4 pt-12 text-black lg:grid-cols-3 gap-x-8 gap-y-16 sm:pt-20">
          {/* SALES  */}
          <div className="bg-white shadow-2xl rounded-xl">
            <div className="p-8">
              <PhoneIcon className="w-16 p-4 text-white bg-indigo-600 rounded-lg mt-[-4rem]" />
              <h3 className="my-6 text-2xl font-bold ">Sales</h3>
              <p className="text-xl text-gray-600">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequuntur culpa eum consequatur voluptatem beatae dicta ad
                saepe eaque!
              </p>
            </div>
            <div className="py-4 pl-8 bg-slate-100">
              <p className="flex items-center text-indigo-600">
                Contact Us <ChevronRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
          {/* SALES FINISH */}

          {/* TECHNICAL */}
          <div className="bg-white shadow-2xl rounded-xl">
            <div className="p-8">
              <LightBulbIcon className="w-16 p-4 text-white bg-indigo-600 rounded-lg mt-[-4rem]" />
              <h3 className="my-6 text-2xl font-bold ">Technical Support</h3>
              <p className="text-xl text-gray-600">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequuntur culpa eum consequatur voluptatem beatae dicta ad
                saepe eaque!
              </p>
            </div>
            <div className="py-4 pl-8 bg-slate-100">
              <p className="flex items-center text-indigo-600">
                Contact Us <ChevronRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
          {/* SALES FINISH */}

          {/* MEDIA */}
          <div className="bg-white shadow-2xl rounded-xl">
            <div className="p-8">
              <CpuChipIcon className="w-16 p-4 text-white bg-indigo-600 rounded-lg mt-[-4rem]" />
              <h3 className="my-6 text-2xl font-bold ">Media Inquiries</h3>
              <p className="text-xl text-gray-600">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequuntur culpa eum consequatur voluptatem beatae dicta ad
                saepe eaque!
              </p>
            </div>
            <div className="py-4 pl-8 bg-slate-100">
              <p className="flex items-center text-indigo-600">
                Contact Us <ChevronRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
          {/* MEDIA FINISH */}
        </div>
      </div>
    </div>
  );
};

export default Support;
