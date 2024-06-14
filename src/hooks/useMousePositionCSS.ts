import React from "react";

const root: any = document.querySelector(":root");

export default function useMousePositionCSS() {
  React.useEffect(() => {
    function onMouseMove(e: MouseEvent) {
      root.style.setProperty("--mouse-x", `${e.clientX}px`);
      root.style.setProperty("--mouse-y", `${e.clientY}px`);
    }

    document.addEventListener("mousemove", onMouseMove);

    return () => document.removeEventListener("mousemove", onMouseMove);
  }, []);
}
