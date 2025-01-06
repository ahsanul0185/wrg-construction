import React from "react";
import ServiceCard from "../components/ServiceCard";

const services = [
  {
    id: 1,
    name: "Renovations",
    details: "Upgrade and modernize your space with expert renovations.",
    imgURL: "/images/service_1.avif",
  },
  {
    id: 2,
    name: "Construction",
    details: "Build sturdy, stylish structures with our trusted expertise.",
    imgURL: "/images/service_2.avif",
  },
  {
    id: 3,
    name: "Outdoor Living",
    details: "Enhance your outdoors with elegant pools and patios.",
    imgURL: "/images/service_3.avif",
  },
];

const Services = () => {
  return (
    <div className="pt-10 pb-20 px-5 sm:px-10">
      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-20">
        Services
      </h2>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
