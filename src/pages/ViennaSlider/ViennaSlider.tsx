import React from "react";
import classes from "./ViennaSlider.module.scss";
import PageWrapper from "../../components/PageWrapper/PageWrapper";

type ViennaSliderProps = {
  images?: Array<string>;
};

export default function ViennaSlider(props: ViennaSliderProps) {
  const [isSlideActive, setIsSlideActive] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const images = props.images || [
    "https://images.unsplash.com/photo-1609856878074-cf31e21ccb6b?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519923041107-e4dc8d9193da?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1572085313473-08e54ae31fc8?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1592179896083-09083e2c2099?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1573167443175-867d91708f97?q=80&w=1400&auto=format&fit=crop",
  ];
  return (
    <PageWrapper
      inspirationProps={{
        url: "https://x.com/nickpylll/status/1800110285069721793",
      }}
    >
      <div className={classes["container"]}>
        <div
          className={classes["images-container"]}
          style={{
            transform: isSlideActive ? "scale(1)" : "scale(0.8)",
          }}
          onClick={() => {
            if (!isSlideActive) {
              setIsSlideActive(true);
            }
          }}
        >
          <button
            className={classes["left-arrow-button"]}
            onClick={() => {
              if (activeIndex === 0) {
                setIsSlideActive(false);
                return;
              }
              setActiveIndex((prevValue) =>
                prevValue === 0 ? 0 : prevValue - 1,
              );
            }}
            style={{
              opacity: isSlideActive ? 1 : 0,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              width={20}
              height={20}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>
          {images.map((image, index) => {
            let translateX = -50;
            let scale = 1;
            let rotate = 0;
            let opacity = 1;

            if (isSlideActive) {
              translateX = -50 + (index - activeIndex) * 100;
              scale = index < activeIndex ? 0 : 1;
              rotate = index < activeIndex ? 30 : 0;
              opacity = index < activeIndex ? 0 : 1;
            } else {
              scale = index > 2 ? 0 : 1;
              rotate = index === 0 ? 0 : index === 1 ? 8 : -8;
            }

            const transform = `translate(${translateX}%, -50%) rotate(${rotate}deg) scale(${scale})`;

            return (
              <div
                className={classes["image-container"]}
                key={image}
                style={{
                  transform,
                  opacity,
                  zIndex: 10000 - index,
                }}
              >
                <div
                  className={classes["image"]}
                  onClick={() => {
                    setActiveIndex(index);
                  }}
                >
                  <img src={image} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PageWrapper>
  );
}
