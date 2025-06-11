
const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Placeholder for image/video */}
          <div className="animate-fade-in">
            <div className="w-full h-96 bg-gray-200 rounded-3xl flex items-center justify-center">
              <span className="text-gray-500 text-lg">Video/Image Placeholder</span>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Everything You Need — Delivered Fast and Reliably
            </h2>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                From food and medicine to groceries, fashion, and more. Zappy connects you to your favorite local stores with ease.
              </p>
              
              <p>
                Experience the charm of window shopping, re-imagined for the digital age.
              </p>
              
              <p>
                We're a marketplace built to empower local shops, restaurants, hotels, and businesses.
              </p>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="relative mt-16">
          <div className="absolute right-10 top-0">
            <div className="w-32 h-32 bg-gradient-to-br from-zappy-orange to-zappy-orange-light rounded-2xl flex items-center justify-center animate-float">
              <span className="text-4xl">🛍️</span>
            </div>
          </div>
          
          <div className="absolute left-20 bottom-0">
            <div className="w-40 h-24 bg-gradient-to-r from-zappy-orange-light to-zappy-orange rounded-xl flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
              <span className="text-3xl">🍔</span>
            </div>
          </div>
          
          <div className="absolute right-1/3 bottom-10">
            <div className="w-24 h-24 bg-gray-200 rounded-xl animate-float" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
