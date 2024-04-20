import React, { memo } from "react";

function Hero() {
  return (
    <div className="hero">
      <h1>
        Super Flash Sale <br /> 50% Off
      </h1>
    </div>
  );
}

export default memo(Hero);
