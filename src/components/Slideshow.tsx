"use client";
import React, { useEffect, useState } from "react";

const images: string[] = [
  "top/IMG_5031.jpg",
  "top/IMG_5059.jpg",
  "top/IMG_5192.jpg",
  "top/IMG_5297.JPG",
  "top/IMG_5408.PNG",
  "top/IMG_9166.jpg",
];

const Slideshow: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full h-screen bg-cover bg-center duration-1000"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    ></div>
  );
};

export default Slideshow;
