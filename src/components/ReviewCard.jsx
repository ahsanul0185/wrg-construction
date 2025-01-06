import React from "react";

const ReviewCard = ({ profile_url, name, location, text }) => {
  return (
    <div className="w-full md:w-80 mx-auto h-72 rounded-2xl shadow-[5px_5px_20px_rgba(0,0,0,0.15)] p-8">
      {/* Top part */}
      <div className="flex items-center gap-5">
        <img
          className="size-12 rounded-full"
          src={profile_url}
          alt="profile photo"
        />
        <div>
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-gray-600 text-sm">{location}</p>
        </div>
      </div>

      {/* text */}
      <div className="mt-8">
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
