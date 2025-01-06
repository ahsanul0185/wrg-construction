import React from "react";

const galleryImages = [
  {
    url: "/images/image_1.avif",
  },
  {
    url: "/images/image_2.avif",
  },
  {
    url: "/images/image_2.avif",
  },
  {
    url: "/images/image_2.avif",
  },
  {
    url: "/images/image_2.avif",
  },
  {
    url: "/images/image_1.avif",
  },
];

const Gallery = () => {
  return (
    <div className="py-20 px-5 md:px-10">
      {/* Grid */}
      <div className="max-w-[1220px] mx-auto gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((image, idx) => (
          <img
            key={idx}
            src={image.url}
            className="w-full h-full object-cover"
            alt="gallery image"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
