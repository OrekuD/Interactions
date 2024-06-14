import React from "react";
import classes from "./RadialDropdown.module.scss";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import useKeyPress from "../../hooks/useKeyPress";

type RadialDropdownProps = {
  options?: Array<string>;
};

export default function RadialDropdown(props: RadialDropdownProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const options = props.options || [
    "To Do",
    "In Progress",
    "In Review",
    "Shipped",
    "Blocked",
    "In Progress",
    "In Review",
    "Shipped",
    "Blocked",
  ];

  useKeyPress("Escape", () => {
    setIsOpen(false);
  });

  useKeyPress("ArrowUp", () => {
    if (!isOpen) return;
    setSelectedIndex((prevValue) =>
      prevValue === 0 ? prevValue : prevValue - 1,
    );
  });

  useKeyPress("ArrowDown", () => {
    if (!isOpen) return;
    setSelectedIndex((prevValue) =>
      prevValue === options.length - 1 ? prevValue : prevValue + 1,
    );
  });

  return (
    <PageWrapper
      title="Radial Dropdown"
      inspirationUrl="https://x.com/nitishkmrk/status/1781934894362538196"
    >
      <button
        className={classes["container"]}
        onClick={() => {
          setIsOpen((prevValue) => !prevValue);
        }}
      >
        {options.map((option, index) => {
          const translateY = (index - selectedIndex) * 100;
          let rotate = 0;
          let opacity = 0;

          if (isOpen) {
            rotate = (index - selectedIndex) * 5;
            opacity = Math.abs(index - selectedIndex) > 4 ? 0 : 1;
          } else {
            opacity = index === selectedIndex ? 1 : 0;
          }

          const transform = `rotate(${rotate}deg) translateY(${translateY}%)`;

          return (
            <div
              className={classes["item"]}
              key={`${option}-${index}`}
              style={{
                transform,
                opacity,
                pointerEvents: isOpen ? undefined : "none",
              }}
              onClick={(e) => {
                if (!isOpen) return;
                setSelectedIndex(index);
                if (index !== selectedIndex) {
                  e.stopPropagation();
                }
              }}
            >
              <p
                style={{
                  opacity: index === selectedIndex ? 1 : undefined,
                }}
              >
                {option}
              </p>
            </div>
          );
        })}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={classes["arrow-icon"]}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
          />
        </svg>
      </button>
    </PageWrapper>
  );
}
