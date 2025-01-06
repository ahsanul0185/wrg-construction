import React from "react";
import bg_video from "/videos/bg_video.mp4";

const ActionMessage = () => {
  return (
    <div className="relative h-[60vh]">
      {/* Background video */}
      <video
        loop
        muted
        autoPlay
        playsInline
        className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2"
      >
        <source src={bg_video} />
      </video>

      {/* Overlay Content */}
      <div className="relative bg-[#7c5839]/30 h-full z-5 grid place-items-center">
        <p className="text-3xl md:text-5xl font-light text-center">
          Let's build the home <br /> you'll love forever.
        </p>
      </div>
    </div>
  );
};

export default ActionMessage;
