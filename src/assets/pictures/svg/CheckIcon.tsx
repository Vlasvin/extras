import React from "react";

const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="80px"
    height="80px"
    viewBox="0 0 80 80"
    version="1.1"
  >
    <g id="surface1">
      <path
        style={{
          fill: "none",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeOpacity: 1,
          strokeMiterlimit: 4,
          stroke: fill,
        }}
        d="M 9 12 L 11.000391 14.000391 L 15 9.999609 M 12 3 L 13.910156 4.871484 L 16.5 4.205859 L 17.218359 6.781641 L 19.794141 7.5 L 19.128516 10.089844 L 21 12 L 19.128516 13.910156 L 19.794141 16.5 L 17.218359 17.218359 L 16.5 19.794141 L 13.910156 19.128516 L 12 21 L 10.089844 19.128516 L 7.5 19.794141 L 6.781641 17.218359 L 4.205859 16.5 L 4.871484 13.910156 L 3 12 L 4.871484 10.089844 L 4.205859 7.5 L 6.781641 6.781641 L 7.5 4.205859 L 10.089844 4.871484 Z M 12 3 "
        transform="matrix(3.333333,0,0,3.333333,0,0)"
      />
    </g>
  </svg>
);

export default CheckIcon;
