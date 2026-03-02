import { BUSSINESSMEETTING } from "../../../assets/images";

export default function WhatWeDo() {
  return (
    <div className="w-full flex flex-col md:flex-row px-10 py-20 gap-10">
      {/* Left Section - Image */}
      <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg h-[500px]">
        <img
          src={BUSSINESSMEETTING}
          alt="Team working"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section - Text */}
      <div className="bg-card w-full md:w-1/2 flex flex-col justify-center items-center h-[500px]">
        <h1 className="text-page-title text-center mb-6">
          The future is waiting to be shaped.
        </h1>
        <p className="text-body text-center mb-8">
          Our AI powers critical decisions for the world’s most important
          operations.
        </p>
        <button className="btn-primary">
          LEARN MORE
        </button>
      </div>
    </div>
  );
}
