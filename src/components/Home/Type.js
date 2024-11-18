import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Lighting Console Programmer",
          "Dimmer Board Operator",
          "Best Electric, Rigging Electric, Electric",
          "Best Grip, Rigging Grip, Grip", 
          "Freelance Filmmaker",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 90,
      }}
    />
  );
}

export default Type;
