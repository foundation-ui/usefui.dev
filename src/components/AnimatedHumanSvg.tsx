"use client";

import React from "react";
import { Icon, PixelIcon } from "@foundation-ui/icons";

function AnimatedHumanSvg() {
  const [isHandsUp, setIsHandsUp] = React.useState<boolean>(true);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setIsHandsUp((prevIsHandsUp) => !prevIsHandsUp);
    }, 500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Icon>
      {isHandsUp ? <PixelIcon.HumanHandsup /> : <PixelIcon.HumanHandsdown />}
    </Icon>
  );
}

export default AnimatedHumanSvg;
