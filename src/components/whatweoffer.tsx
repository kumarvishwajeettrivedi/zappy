import React from "react";

const WhatWeOffer = () => {
  return (
    <div className="mt-32">
      <div className="bg-white rounded-3xl p-12 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            What we offer?
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left side */}
          <div className="text-center">
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We help you send a parcel from one place to another, making you more connected with Zappy.
            </p>
            <div className="w-64 h-48 bg-gray-100 rounded-2xl mx-auto flex items-center justify-center">
              <span className="text-gray-400">Illustration Placeholder</span>
            </div>
          </div>

          {/* Right side */}
          <div className="text-center">
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              An online platform for local businesses to send any parcel hassle-free, without worrying about huge commissions.
            </p>
            <div className="w-64 h-48 bg-gray-100 rounded-2xl mx-auto flex items-center justify-center">
              <span className="text-gray-400">Illustration Placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
