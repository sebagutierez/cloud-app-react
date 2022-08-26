import React from "react";
import {
  CloudArrowUpIcon,
  CircleStackIcon,
  ServerIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";

import bgImg from "../assets/cyber-bg.png";

const Hero = () => {
  return (
    <div
      name="home"
      className="flex flex-col justify-between w-full h-screen bg-zinc-200"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center w-full px-2 py-8 md:items-start">
          <p className="text-2xl">Unique Sequencing & Production</p>
          <h1 className="py-3 text-5xl font-bold md:text-7xl">
            Cloud Management{" "}
          </h1>
          <p className="pb-3 text-2xl">This is our Tech brand</p>
          <button className="px-6 py-3 sm:w-[60%]">Get Started</button>
        </div>
        <div>
          <img className="w-full" src={bgImg} alt="/" />
        </div>
      </div>
      <div className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl">
        <p>Data Services</p>
        <div className="flex flex-wrap justify-between px-4">
          <p className="flex px-4 py-2 text-slate-500">
            <CloudArrowUpIcon className="h-6 text-indigo-600" /> App Security
          </p>
          <p className="flex px-4 py-2 text-slate-500 ">
            <CircleStackIcon className="h-6 text-indigo-600" /> Dashboard Design
          </p>
          <p className="flex px-4 py-2 text-slate-500 ">
            <ServerIcon className="h-6 text-indigo-600" /> Cloud Data
          </p>
          <p className="flex px-4 py-2 text-slate-500 ">
            <PaperAirplaneIcon className="h-6 text-indigo-600" /> API
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
