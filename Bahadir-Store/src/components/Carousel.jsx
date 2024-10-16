import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

/* eslint-disable react/prop-types */
function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);
  

  function prevSlide() {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  }
  function nextSlide() {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  }
  console.log(current);
  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex transition-transform ease-in-out duration-500`}
        style={{ transform: `translateX(-${current * 100})%` }}
      >
        {slides.map((s, index) => {
          return <img key={index} src={s} className="w-full h-auto" />;
        })}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4 px-50">
        <button
          onClick={prevSlide}
          className="text-white bg-transparent border-none cursor-pointer p-1 "
        >
          <ChevronLeft size={60} />
        </button>
        <button
          onClick={nextSlide}
          className="text-white bg-transparent border-none cursor-pointer p-1"
        >
          <ChevronRight size={60} />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
