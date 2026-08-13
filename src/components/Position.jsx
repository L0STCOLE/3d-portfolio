import React from "react";

const produceSpans = (text, animation) => {
  return text.split("").map((letter, index) => (
    <span
      key={index}
      className={`inline-block transform-style-3d origin-bottom ${animation}`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {letter === " " ? " " : letter}
    </span>
  ));
};

const Position = ({ roles }) => {
  const [first, second] = roles;

  return (
    <div className="relative cursor-default font-mono font-semibold text-quaternary text-[14px] xs:text-[18px] sm:text-[22px] md:text-[26px] leading-[32px] w-full flex items-center">
      <span className="text-secondary mr-2">$</span>
      <div className="relative overflow-hidden h-[32px] flex-1">
        <div className="absolute left-0 flex" aria-label={first}>
          {produceSpans(first, "animate-textRotate1")}
        </div>
        <div className="absolute left-0 flex" aria-label={second}>
          {produceSpans(second, "animate-textRotate2")}
        </div>
      </div>
    </div>
  );
};

export default Position;
