
import { Button } from "@/components/ui/button";

const AppDownloadSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-3xl p-12 max-w-4xl mx-auto shadow-lg">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get the app on
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Everything Nearby, Instantly at Your Door
              </p>
              
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

            {/* Right Content - Phone with QR */}
            <div className="flex justify-center animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="relative">
                {/* Phone mockup */}
                <div className="w-64 h-80 bg-black rounded-3xl p-2">
                  <div className="w-full h-full bg-white rounded-2xl flex flex-col items-center justify-center p-6">
                    <div className="w-32 h-32 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-gray-500 text-xs">QR Code</span>
                    </div>
                    <p className="text-gray-600 text-center text-sm">
                      Scan the QR code to Download the App
                    </p>
                  </div>
                </div>
                
                {/* Phone notch */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
