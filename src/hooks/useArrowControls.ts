import React from "react";
import useKeyPress from "./useKeyPress";
/***

A hook that enables keyboard navigation / controls

@param length
The length of the list

@param setIndex
The updater function

@param disabled
Disable the arrow keys

***/
export default function useArrowControls(
  length: number,
  setIndex: React.Dispatch<React.SetStateAction<number>>,
  disabled?: boolean,
) {
  useKeyPress("ArrowUp", () => {
    if (disabled) return;
    setIndex((prevValue) => (prevValue === 0 ? prevValue : prevValue - 1));
  });
  useKeyPress("ArrowLeft", () => {
    if (disabled) return;
    setIndex((prevValue) => (prevValue === 0 ? prevValue : prevValue - 1));
  });

  useKeyPress("ArrowDown", () => {
    if (disabled) return;
    setIndex((prevValue) =>
      prevValue === length - 1 ? prevValue : prevValue + 1,
    );
  });
  useKeyPress("ArrowRight", () => {
    if (disabled) return;
    setIndex((prevValue) =>
      prevValue === length - 1 ? prevValue : prevValue + 1,
    );
  });
}
