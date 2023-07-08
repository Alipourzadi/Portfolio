import React from "react";

export default function index() {
  return (
    <svg
      id="patternId"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="a"
          patternUnits="userSpaceOnUse"
          width="40"
          height="40"
          patternTransform="scale(2) rotate(0)"
        >
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="hsla(240, 7%, 18%, 0)"
          />
          <path
            d="M20-5V5m0 30v10m20-30v10M0 15v10"
            stroke-linecap="square"
            stroke-width="1"
            stroke="hsla(0, 0%, 100%, 1)"
            fill="none"
          />
          <path
            d="M-5 40H5M-5 0H5m30 0h10M35 40h10M15 20h10"
            stroke-linecap="square"
            stroke-width="1"
            stroke="hsla(199, 98%, 48%, 1)"
            fill="none"
          />
        </pattern>
      </defs>
      <rect
        width="800%"
        height="800%"
        transform="translate(0,0)"
        fill="url(#a)"
      />
    </svg>
  );
}
