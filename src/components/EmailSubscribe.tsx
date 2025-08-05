import React, { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";

const EmailSubscribe: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email subscription
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <section className="py-20 px-4 bg-off-white relative overflow-hidden">
      {/* Background elements - changed to square shape */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 bg-street-brown-200 opacity-20 blur-3xl"
        style={{ borderRadius: "25%" }}
      ></div>

      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="font-permanent text-3xl sm:text-4xl md:text-6xl text-street-brown-800 mb-6 transform hover:scale-105 transition-transform duration-300">
            Join the Drop
          </h2>
          <p className="font-inter text-street-brown-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-4">
            Be the first to know when our inaugural collection hits the streets.
            Exclusive access to the culture that defines us.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto px-4">
          <div className="relative group">
            <div
              className="absolute inset-0 bg-gradient-to-r from-street-blue-500 to-street-brown-500 blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"
              style={{ borderRadius: "12px" }}
            ></div>
            <div
              className="relative flex flex-col sm:flex-row items-stretch bg-white shadow-2xl overflow-hidden border-2 border-transparent group-hover:border-street-blue-400 transition-colors duration-300"
              style={{ borderRadius: "12px" }}
            >
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-street-brown-400 w-5 h-5 hidden sm:block" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full pl-4 sm:pl-12 pr-4 py-4 font-inter text-street-brown-800 placeholder-street-brown-400 focus:outline-none bg-transparent text-center sm:text-left"
                  required
                  style={{ borderRadius: "12px 12px 0 0" }}
                />
              </div>
              <button
                type="submit"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="px-6 py-4 bg-street-brown-700 hover:bg-street-brown-800 text-off-white font-inter font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                style={{ borderRadius: "0 0 12px 12px" }}
              >
                <span className="uppercase tracking-wide text-sm">
                  Notify Me
                </span>
                <ArrowRight
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isHovered ? "translate-x-1" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </form>

        <p className="font-inter text-street-brown-500 text-sm mt-6 max-w-md mx-auto px-4">
          No spam, just pure street culture. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default EmailSubscribe;
