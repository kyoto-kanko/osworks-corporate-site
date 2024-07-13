"use client";
import NextImage from "next/image";
import React, { useEffect, useState } from "react";

const smImages: string[] = [
  "top/sm/IMG_5031.png",
  "top/sm/IMG_5059.png",
  "top/sm/IMG_5192.png",
  "top/sm/IMG_5408.png",
  "top/sm/IMG_9166.png",
];

const lgImages: string[] = [
  "top/lg/IMG_5031.png",
  "top/lg/IMG_5059.png",
  "top/lg/IMG_5192.png",
  "top/lg/IMG_5408.png",
  "top/lg/IMG_9166.png",
];

const preloadImages = (imageArray: string[]) => {
  imageArray.forEach((image) => {
    const img = new window.Image();
    img.src = image;
  });
};

const Home: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % smImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const images = isSmallScreen ? smImages : lgImages;

  useEffect(() => {
    preloadImages(images);
  }, [images]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center sm:hidden">
        <div className="text-center space-y-16 w-3/4">
          <a href="/repair" className="block border border-white py-2 px-4">
            <div className="text-white text-xl">REPAIR</div>
          </a>
          <a href="/marking" className="block border border-white py-2 px-4">
            <div className="text-white text-xl">MARKING</div>
          </a>
          <a href="/news" className="block border border-white py-2 px-4">
            <div className="text-white text-xl">NEWS</div>
          </a>

          <a href="https://lin.ee/1ev9Xy5" className="flex justify-center">
            <NextImage
              className="opacity-75"
              src="/top/IMG_8761.jpg"
              alt="Instagram QR Code"
              width={200}
              height={100}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
