
const Footer = () => {
  return (
    <footer className="bg-zappy-gray text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-3xl font-bold mb-6">Zappy</h3>
          </div>

          {/* For Businesses */}
          <div>
            <h4 className="text-xl font-semibold mb-6">For Businesses</h4>
            <p className="text-gray-400 mb-4">partner with us</p>
          </div>

          {/* For Captains */}
          <div>
            <h4 className="text-xl font-semibold mb-6">For Captains</h4>
            <p className="text-gray-400 mb-4">partner with us</p>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Social Links</h4>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-zappy-orange transition-colors cursor-pointer">
                <span className="text-sm">f</span>
              </div>
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-zappy-orange transition-colors cursor-pointer">
                <span className="text-sm">t</span>
              </div>
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-zappy-orange transition-colors cursor-pointer">
                <span className="text-sm">i</span>
              </div>
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-zappy-orange transition-colors cursor-pointer">
                <span className="text-sm">y</span>
              </div>
            </div>
          </div>
        </div>

        {/* Learn More Section */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <h4 className="text-xl font-semibold mb-6">Learn More</h4>
          <div className="grid md:grid-cols-4 gap-6 text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Help & Support</a>
            <div className="text-sm">
              <p className="hover:text-white transition-colors font-semibold">Contact Us</p>
              <ul className="mt-2 space-y-1 text-gray-300">
                <li>
                  <a href="mailto:office@logizee.com" className="hover:text-white transition-colors">
                    office@logizee.com
                  </a>
                </li>
                <li>
                  <a href="mailto:office.logizee@gmail.com" className="hover:text-white transition-colors">
                  office.logizee@gmail.com
                  </a>
                </li>
              </ul>
            </div>


          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>
            By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners.<br />
            2023 © Logizee Solutions LLP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
