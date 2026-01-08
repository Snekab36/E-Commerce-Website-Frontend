import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import banner1 from "../assets/banners/banner-2.jpg";
import banner2 from "../assets/banners/banner-4.jpg";
import banner3 from "../assets/banners/banner-5.png";
import banner4 from "../assets/banners/banner-6.png";
const banners = [
  {
    img: banner1,
    brand: "Digitek",
    tagline: "Sab ke Liye",
    offer: "UP TO 70% OFF",
    subtitle: "Biggest New Year Sale Ever",
    date: "6th Jan to 8th Jan",
    link: "/products",
  },
  {
    img: banner2,
    brand: "ASUS",
    tagline: "Your Vibe. Your Color",
    offer: "UP TO 40% OFF",
    subtitle: "Biggest New Year Sale Ever",
    date: "6th Jan to 8th Jan",
    link: "/products",
  },
  {
    img: banner3,
    brand: "FUJIFLIM",
    tagline: "Precision in Every Detail",
    offer: "UP TO 30% OFF",
    subtitle: "Biggest New Year Sale Ever",
    date: "6th Jan to 8th Jan",
    link: "/products",
  },
  {
    img: banner4,
    brand: "Sony",
    tagline: "Sab ke Liye",
    offer: "UP TO 70% OFF",
    subtitle: "Biggest New Year Sale Ever",
    date: "6th Jan to 8th Jan",
    link: "/products",
  },

];

export default function Banner() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const banner = banners[current];

  return (
    <div
      className="relative w-full h-[320px] md:h-[480px] overflow-hidden cursor-pointer"
      onClick={() => navigate(banner.link)}
    >
      {/* Background Image */}
      <img
        src={banner.img}
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="px-6 md:px-16 max-w-xl text-white space-y-4">
          
          {/* Brand */}
          <h3 className="text-lg tracking-wide opacity-90">
            {banner.brand}
          </h3>

          {/* Tagline */}
          <p className="italic text-sm opacity-80">
            {banner.tagline}
          </p>

          {/* Offer */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-yellow-400">
            {banner.offer}
          </h1>

          {/* Subtitle */}
          <p className="text-sm md:text-base opacity-90">
            {banner.subtitle}
          </p>

          {/* Date */}
          <span className="inline-block bg-black/60 px-4 py-1 rounded-full text-sm">
            {banner.date}
          </span>

          {/* CTA */}
          <button className="mt-4 bg-yellow-400 text-black px-6 py-2 font-semibold rounded hover:bg-yellow-300 transition">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}
