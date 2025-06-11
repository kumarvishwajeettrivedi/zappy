
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen zappy-gradient overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-8 h-8 border-2 border-white rounded-full animate-float"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 flex items-center min-h-screen">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="text-white animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Logizee
            </h1>
            <p className="text-xl md:text-2xl mb-4 opacity-90 leading-relaxed">
              One roof solution for all kinds of delivery need
            </p>
            <p className="text-lg mb-8 opacity-80">
              Crafted with ❤️ in Sikkim
            </p>
            
            <div className="mb-8">
              <p className="text-lg mb-4">Get it on</p>
              <Button 
                className="bg-black hover:bg-gray-800 text-white px-8 py-6 rounded-lg flex items-center gap-3 text-lg font-semibold transition-transform hover:scale-105"
                onClick={() => window.open('#', '_blank')}
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded"></div>
                  <span>Google Play</span>
                </div>
              </Button>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="flex justify-center animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="relative">
              <div className="w-80 h-96 bg-white/20 backdrop-blur-sm rounded-3xl border border-white/30 flex items-center justify-center">
                <div className="text-center text-white/70">
                  <p className="text-lg">Scan the QR code</p>
                  <p className="text-sm mt-2">to Download the App</p>
                </div>
              </div>
              {/* Phone notch */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-white/80">
          <span className="text-sm mb-2">Scroll down</span>
          <ArrowDown size={24} />
        </div>
      </div>

      {/* Curved bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-#ff2254 zappy-curve"></div>
    </section>
  );
};

export default HeroSection;
