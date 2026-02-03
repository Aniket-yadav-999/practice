import React, { useState } from "react";

const Hero = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
          Introducing the A2G Online <br />
          <span className="block mt-2">
            Recyclability Assessment Tool
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
          An intelligent online solution designed to help businesses assess the
          recyclability of their packaging materials in compliance with{" "}
          <strong>UK Packaging EPR</strong> regulations.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition shadow-md">
            Start Your Free Assessment
          </button>

          <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition">
            Learn More About RAM
          </button>
        </div>

        {/* Preview Image */}
        <div className="mt-16 flex justify-center">
          <div className="relative group bg-white p-4 rounded-2xl shadow-2xl max-w-4xl">

            <img
              src="/Images/a2gram.png"
              alt="RAM Tool Preview"
              className="rounded-xl w-full h-[260px] md:h-[380px] object-contain"
            />

            {/* Hover Overlay */}
            <div
              onClick={() => setOpen(true)}
              className="absolute inset-4 rounded-xl bg-black/60 opacity-0 
                         group-hover:opacity-100 transition duration-300 
                         flex items-center justify-center cursor-pointer"
            >
              <div className="text-white text-xl md:text-2xl font-semibold 
                              border-2 border-white px-6 py-3 rounded-lg">
                View Full Diagram
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ================= FULL SCREEN MODAL ================= */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4">

          {/* Image Wrapper */}
          <div className="relative bg-white rounded-xl p-4 max-w-6xl w-full">

            {/* Close Button INSIDE image */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 z-10
                         bg-black/70 text-white w-10 h-10 
                         rounded-full flex items-center justify-center 
                         text-2xl font-bold hover:bg-black"
            >
              ×
            </button>

            {/* Image */}
            <img
              src="/Images/a2gram.png"
              alt="Full Diagram"
              className="w-full h-[75vh] object-contain rounded-lg"
            />

          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
