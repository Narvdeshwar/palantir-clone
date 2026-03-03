import { BUSSINESSMEETTING } from "../../../assets/images";
import Button from "../../../components/Button";

export default function WhatWeDo() {
  return (
    <div className="w-full flex flex-col md:flex-row px-10 py-24 gap-12 bg-bg-app">
      {/* Left Section - Image */}
      <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-2xl h-[550px] border border-white/10">
        <img
          src={BUSSINESSMEETTING}
          alt="Team working"
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
        />
      </div>

      {/* Right Section - Text */}
      <div className="bg-card w-full md:w-1/2 flex flex-col justify-center items-start p-12 h-[550px] rounded-2xl border border-white/5 shadow-2xl">
        <h1 className="text-white text-5xl font-bold leading-tight mb-8 tracking-tighter">
          The future is waiting to be shaped.
        </h1>
        <p className="text-white/60 text-xl leading-relaxed mb-10 max-w-2xl">
          Our AI powers critical decisions for the world’s most important
          operations.
        </p>
        <Button variant="primary" size="lg" className="px-10 py-4 text-lg">
          LEARN MORE
        </Button>
      </div>
    </div>
  );
}
