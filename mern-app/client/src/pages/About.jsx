import React from "react";

const About = () => {
  return (
    <section className="w-full flex justify-center px-4 py-20">
      <div className="max-w-4xl w-full">

        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-16">
          About A2G-RAM
        </h1>

        {/* Mission */}
        <h2 className="text-2xl font-semibold text-green-700 mb-4">
          Our Mission
        </h2>
        <p className="text-base leading-relaxed text-gray-700 mb-12">
          A2G-RAM aims to improve the recyclability of packaging by providing a
          standardized methodology for assessing how easy a packaging is to
          recycle. Our mission is to provide guidance to the industry to improve
          packaging design for recycling, ultimately contributing to a more
          circular economy.
        </p>

        {/* Tool Section */}
        <h2 className="text-2xl font-semibold text-green-700 mb-4">
          The A2G-RAM Online Tool
        </h2>
        <p className="text-base leading-relaxed text-gray-700 mb-10">
          The A2G-RAM Online Tool is a free application that assesses the
          recyclability of packaging and shows to what extent it is suitable for
          recycling. The tool rates packaging on a scale from A to C:
        </p>

        {/* Rating Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
          <div className="rounded-lg bg-green-50 py-10 px-6 text-center">
            <div className="text-5xl font-bold text-green-600 mb-3">A</div>
            <p className="text-gray-800 font-medium">
              Excellent recyclability
            </p>
          </div>

          <div className="rounded-lg bg-blue-50 py-10 px-6 text-center">
            <div className="text-5xl font-bold text-blue-600 mb-3">B</div>
            <p className="text-gray-800 font-medium">
              Good recyclability
            </p>
          </div>

          <div className="rounded-lg bg-yellow-50 py-10 px-6 text-center">
            <div className="text-5xl font-bold text-yellow-600 mb-3">C</div>
            <p className="text-gray-800 font-medium">
              Limited recyclability
            </p>
          </div>
        </div>

        {/* How It Works */}
        <h2 className="text-2xl font-semibold text-green-700 mb-4">
          How It Works
        </h2>
        <p className="text-base leading-relaxed text-gray-700 mb-6">
          The assessment is based on internationally recognized recyclability
          criteria and follows these steps:
        </p>

        <ol className="list-decimal list-inside space-y-4 text-gray-800 mb-16">
          <li>
            <span className="font-semibold">Material Selection:</span>{" "}
            Choose between plastics, aluminium, or steel as your primary
            packaging material.
          </li>
          <li>
            <span className="font-semibold">Packaging Type Selection:</span>{" "}
            Select the specific type of packaging you are using.
          </li>
          <li>
            <span className="font-semibold">
              Design for Recycling Assessment:
            </span>{" "}
            Answer questions about the design features, components, and
            materials of your packaging.
          </li>
          <li>
            <span className="font-semibold">Results:</span>{" "}
            Receive a recyclability rating and specific recommendations for
            improvement.
          </li>
        </ol>

        {/* Why Use A2G-RAM */}
        <h2 className="text-2xl font-semibold text-green-700 mb-6">
          Why Use A2G-RAM
        </h2>

        <ul className="list-disc list-inside space-y-4 text-gray-800">
          <li>
            Get an objective assessment of your packaging recyclability
          </li>
          <li>
            Identify specific areas for design improvement
          </li>
          <li>
            Support your sustainability claims with data-backed recyclability
            ratings
          </li>
          <li>
            Contribute to a more circular economy through better packaging
            design
          </li>
          <li>
            Comply with growing regulatory requirements for recycling and
            sustainability
          </li>
        </ul>

      </div>
    </section>
  );
};

export default About;
