/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import womenShopping from "../assets/women-shopping.jpeg";
import menThings from "../assets/men-things.png";
import ClickAction from "./ClickAction";

const goods = [
  {
    src: womenShopping,
    altText: "Slide 1",
    caption: "Slide 1",
    key: 1,
    season: "Summer 2024",
    title: "NEW COLLECTION",
    description:
      "We know how large objects will act, but things on a small scale.",
    buttonText: "Shop Now",
  },
  {
    src: menThings,
    altText: "Slide 1",
    caption: "Slide 1",
    key: 1,
    season: "Summer 2024",
    title: "NEW COLLECTION",
    description:
      "We know how large objects will act, but things on a small scale.",
    buttonText: "Shop Now",
  },
];

function CarouselSlider({ Index = 0 }) {
  const [current, setCurrent] = useState(0);
  const [animation, setAnimation] = useState(false);

  const next = () => {
    if (animation) return;
    const nextSlide = current === goods.length - 1 ? 0 : current + 1;
    setCurrent(nextSlide);
  };

  const prev = () => {
    if (animation) return;
    const nextSlide = current === 0 ? goods.length - 1 : current - 1;
    setCurrent(nextSlide);
  };

  const babyIndex = (newIndex) => {
    if (animation) return;
    setCurrent(newIndex);
  };

  const slides = goods.map((good, index) => {
    return (
      <div
        key={good.key}
        className={`absolute inset-0 transition-opacity duration-1000 ${
          current === index ? "opacity-100" : "opacity-0"
        }`}
        onTransitionEnd={() => setAnimation(false)}
      >
        <img
          src={good.src}
          alt={good.altText}
          className="w-[110%] h-[90%] object-cover md:h-[104%] aspect-auto	"
        />

        <ClickAction
          season={good.season}
          title={good.title}
          description={good.description}
          buttonText={good.buttonText}
          price={good.price}
        />
      </div>
    );
  });

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="relative h-full">
        {slides}
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-transparent text-white text-8xl font-thin"
        onClick={prev}
      >
        &#8249;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent text-white text-8xl font-thin"
        onClick={next}
      >
        &#8250;
      </button>
      <div className="absolute bottom-24 md:bottom-4 left-1/2 transform -translate-x-1/2 flex">
        {goods.map((_, index) => (
          <button
            key={index}
            className={`w-14 h-2 ${current === index ? 'bg-white' : 'backdrop-brightness-50'}`}
            onClick={() => babyIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default CarouselSlider;
