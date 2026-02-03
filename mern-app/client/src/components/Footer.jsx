import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Column 1 */}
          <div>
            <h2 className="text-xl font-semibold text-green-500 mb-3">
              A2G RAM Tool
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Contribute to sustainable packaging and reduced
              environmental impact.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-sm font-semibold text-black mb-3">
              Quick Links
            </h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li className="hover:text-green-600 cursor-pointer">Features</li>
              <li className="hover:text-green-600 cursor-pointer">Pricing</li>
              <li className="hover:text-green-600 cursor-pointer">RAM Guide</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-sm font-semibold text-black mb-3">
              Legal
            </h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li className="hover:text-green-600 cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-green-600 cursor-pointer">
                Terms of Use
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-sm font-semibold text-black mb-3">
              Get in Touch
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              Or write to us at:{" "}
              <span className="font-medium">
                Arushi.thakur@aagarg.co.uk
              </span>
            </p>

            <div className="flex gap-5 text-sm text-gray-800">
              <span className="hover:text-green-600 cursor-pointer">
                Facebook
              </span>
              <span className="hover:text-green-600 cursor-pointer">
                Instagram
              </span>
              <span className="hover:text-green-600 cursor-pointer">
                Twitter
              </span>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mt-8 pt-4 text-center">
          <p className="text-xs text-gray-700">
            © 2026 A2G RAM Tool. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
