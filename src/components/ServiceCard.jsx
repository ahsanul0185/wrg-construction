import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className="md:w-80 rounded-2xl shadow-[3px_5px_30px_rgba(0,0,0,0.18)] overflow-hidden group">
      {/* Image */}
      <div className="aspect-[4/3] overflow-clip">
        <img
          className="w-full h-full object-cover group-hover:scale-105 duration-500"
          src={service.imgURL}
          alt={service.name}
        />
      </div>

      {/* Details */}
      <div className="p-8">
        <h3 className="text-xl font-semibold">{service.name}</h3>
        <p className="mt-3 text-gray-600"> {service.details}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
