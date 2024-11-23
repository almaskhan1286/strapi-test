"use client";

import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Feature {
  id: number;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Industry Experts",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Dedicated Team",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Outcome Focused",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    title: "High Quality Service",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 5,
    title: "Cyber Security Expert",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export default function WhyChooseUs() {
  const [activeFeature, setActiveFeature] = useState(1);

  return (
    <section className="py-16 px-4 md:py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-wider uppercase mb-4">
            WHY CHOOSSE US
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            We Are Different From Others
          </h3>
          <p className="max-w-2xl mx-auto text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side - Image Section */}
          <div className="relative w-full lg:w-1/2 aspect-square">
            {/* Pink Circle Background */}
            <div
              className={`
              absolute left-0 top-1/2 -translate-y-1/2
              w-[80%] aspect-square rounded-full
              bg-[#C41E3A] text-white
              flex flex-col justify-center items-center
              p-8 transition-all duration-300 opacity-90
              z-10
            `}
            >
              <h4 className="text-2xl font-semibold mb-4">
                {features[activeFeature - 1].title}
              </h4>
              <p className="text-center">
                {features[activeFeature - 1].description}
              </p>
            </div>

            {/* Image */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[80%] aspect-square rounded-full overflow-hidden bg-gray-100">
              <Image
                src="https://img.freepik.com/premium-photo/female-model-white-tshirt_979387-25.jpg"
                alt="Professional expert"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Side - Features List */}
          <div className="w-full lg:w-1/2 space-y-4">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`
                  w-full text-left pl-4 pr-6 py-4
                  flex items-center gap-3
                  transition-all duration-300
                  rounded-l-full
                  ${
                    activeFeature === feature.id
                      ? "bg-[#C41E3A] text-white"
                      : "bg-[#E6E7EC] text-black hover:bg-gray-200"
                  }
                `}
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="text-lg font-medium">{feature.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
