import React from "react";
import AnimatedCursor from "react-animated-cursor";

const Cursor = () => {
  return (
    <div style={{ pointerEvents: "none" }}>
      <AnimatedCursor
        innerSize={8}
        outerSize={30}
        color="255, 0, 0"
        outerAlpha={1}
        innerScale={1.2}
        outerScale={3}
        trailingSpeed={5}
        clickables={[
          "a",
          "button",
          ".custom-hover",
          "input[type='text']",
          "input[type='email']",
          "input[type='number']",
          "input[type='submit']",
          "input[type='image']",
          "label[for]",
          "select",
          "textarea",
          ".link",
          {
            target: ".custom-hover",
            options: {
              innerSize: 12,
              outerSize: 40,
              color: "255, 255, 255",
              outerAlpha: 0.3,
              innerScale: 1.5,
              outerScale: 5
            }
          }
        ]}
        outerStyle={{
          border: "2px solid rgba(255, 0, 0, 1)",
          backgroundColor: "transparent",
          mixBlendMode: "normal",
          zIndex: 9999999999, // Extremely high z-index
          pointerEvents: "none"
        }}
        innerStyle={{
          backgroundColor: "rgba(255, 0, 0, 1)",
          zIndex: 9999999999, // Extremely high z-index
          pointerEvents: "none"
        }}
        showSystemCursor={false}
        innerComponent={
          <div style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            backgroundColor: "rgba(255, 0, 0, 1)"
          }} />
        }
      />
    </div>
  );
};

export default Cursor;