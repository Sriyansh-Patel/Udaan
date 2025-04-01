import { useState, useEffect } from "react";

export default function Crausel() {
  const [index, setIndex] = useState(0);

  const slides = [
    "https://www.jcboseust.ac.in/static/website/images/h.jpg",
    "https://www.jcboseust.ac.in/static/website/Video/Video.mp4",
    "https://www.jcboseust.ac.in/assets/slider/President-03.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Changes slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="carousel w-full h-96 rounded-box relative overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`carousel-item absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          {slide.endsWith(".mp4") ? (
            <video
              autoPlay
              loop
              muted
              src={slide}
              className="w-full h-full object-cover"
            />
          ) : (
            <img src={slide} className="w-full h-full object-cover" alt="Slide" />
          )}
        </div>
      ))}
    </div>
  );
}
