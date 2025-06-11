
const FeaturesSection = () => {
  const features = [
    {
      title: "Earn extra on your way",
      position: "top-left",
    },
    {
      title: "Make online presence",
      position: "center-left", 
    },
    {
      title: "Shop Fresh and fast",
      position: "bottom-left",
    },
    {
      title: "Send anything form A to B",
      position: "top-center",
    },
    {
      title: "Shop form Your fav Store",
      position: "top-right",
    },
    {
      title: "Same as store price",
      position: "center-right",
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-wider">
            Features
          </h2>
        </div>

        {/* Features Grid */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central large rectangle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-40 bg-gray-700 rounded-2xl"></div>

          {/* Feature boxes positioned around the center */}
          <div className="relative h-96">
            {/* Top left */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gray-600 rounded-xl flex items-center justify-center group hover:bg-zappy-orange transition-colors duration-300">
              <div className="text-center">
                <div className="w-4 h-4 bg-zappy-orange rounded-full mx-auto mb-2 group-hover:bg-white"></div>
                <p className="text-zappy-orange text-sm font-medium group-hover:text-white">Earn extra on your way</p>
              </div>
            </div>

            {/* Top center */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gray-600 rounded-xl flex items-center justify-center group hover:bg-zappy-orange transition-colors duration-300">
              <div className="text-center">
                <div className="w-4 h-4 bg-zappy-orange rounded-full mx-auto mb-2 group-hover:bg-white"></div>
                <p className="text-zappy-orange text-sm font-medium group-hover:text-white">Send anything from A to B</p>
              </div>
            </div>

            {/* Top right */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gray-600 rounded-xl flex items-center justify-center group hover:bg-zappy-orange transition-colors duration-300">
              <div className="text-center">
                <div className="w-4 h-4 bg-zappy-orange rounded-full mx-auto mb-2 group-hover:bg-white"></div>
                <p className="text-zappy-orange text-sm font-medium group-hover:text-white">Shop from Your fav Store</p>
              </div>
            </div>

            {/* Center left */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-32 h-32 bg-gray-600 rounded-xl flex items-center justify-center group hover:bg-zappy-orange transition-colors duration-300">
              <div className="text-center">
                <div className="w-4 h-4 bg-zappy-orange rounded-full mx-auto mb-2 group-hover:bg-white"></div>
                <p className="text-zappy-orange text-sm font-medium group-hover:text-white">Make online presence</p>
              </div>
            </div>

            {/* Center right */}
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-32 h-32 bg-gray-600 rounded-xl flex items-center justify-center group hover:bg-zappy-orange transition-colors duration-300">
              <div className="text-center">
                <div className="w-4 h-4 bg-zappy-orange rounded-full mx-auto mb-2 group-hover:bg-white"></div>
                <p className="text-zappy-orange text-sm font-medium group-hover:text-white">Same as store price</p>
              </div>
            </div>

            {/* Bottom left */}
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gray-600 rounded-xl flex items-center justify-center group hover:bg-zappy-orange transition-colors duration-300">
              <div className="text-center">
                <div className="w-4 h-4 bg-zappy-orange rounded-full mx-auto mb-2 group-hover:bg-white"></div>
                <p className="text-zappy-orange text-sm font-medium group-hover:text-white">Shop Fresh and fast</p>
              </div>
            </div>
          </div>
        </div>

        {/* What we offer section */}
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
                  We help you Send a parcel from a place to other making you more connected with Logizee
                </p>
                <div className="w-64 h-48 bg-gray-100 rounded-2xl mx-auto flex items-center justify-center">
                  <span className="text-gray-400">Illustration Placeholder</span>
                </div>
              </div>

              {/* Right side */}
              <div className="text-center">
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  online platform for local businesses send any parcel hassle-free without worrying about huge commissions
                </p>
                <div className="w-64 h-48 bg-gray-100 rounded-2xl mx-auto flex items-center justify-center">
                  <span className="text-gray-400">Illustration Placeholder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
