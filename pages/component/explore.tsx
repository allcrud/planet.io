import React from "react";

const Explore: React.FC = () => (
  <>
    {/* <button id="btn">Explore</button> */}
    <div className="buttonContainer">
      <svg className="effect" width="486" height="174" viewBox="0 0 486 174">
        <defs>
          <clipPath id="theClip">
            <path d="m 102,35 h 276 c 28.808,0 52,23.192 52,52 0,28.808 -23.192,52 -52,52 H 102 C 73.192002,139 50,115.808 50,87 50,58.192 73.192002,35 102,35 Z" />
          </clipPath>
        </defs>
        <path
          style={{ fill: "rgb(36 19 3)" }}
          d="m 102,35 h 276 c 28.808,0 52,23.192 52,52 0,28.808 -23.192,52 -52,52 H 102 C 73.192002,139 50,115.808 50,87 50,58.192 73.192002,35 102,35 Z"
        />
        <g clipPath="url(#theClip)">
          <g className="sprites">
            <circle className="sprite1" cx="0" cy="0" r="70" />
            <circle
              className="sprite1"
              fill="none"
              stroke="#000"
              strokeWidth="1"
              cx="0"
              cy="0"
              r="70"
            />
            <circle className="sprite2" cx="0" cy="0" r="50" />
            <circle
              className="sprite2"
              fill="none"
              stroke="#000"
              strokeWidth="1"
              cx="0"
              cy="0"
              r="50"
            />
            <circle className="sprite3" cx="0" cy="0" r="30" />
            <circle
              className="sprite3"
              fill="none"
              stroke="#000"
              strokeWidth="1"
              cx="0"
              cy="0"
              r="30"
            />
            <circle className="sprite4" cx="0" cy="0" r="10" />
            <circle
              className="sprite4"
              fill="none"
              stroke="#000"
              strokeWidth="1"
              cx="0"
              cy="0"
              r="10"
            />
          </g>
        </g>
        <path
          style={{ fill: "black" }}
          d="m 102,45 h 276 c 23.268,0 42,18.732 42,42 0,23.268 -18.732,42 -42,42 H 102 C 78.732002,129 60,110.268 60,87 60,63.732 78.732002,45 102,45 Z"
        />
      </svg>
      <button className="button">Explore</button>
    </div>
  </>
);

export default Explore;
