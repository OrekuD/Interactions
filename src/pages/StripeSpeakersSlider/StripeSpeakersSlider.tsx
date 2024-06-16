import React from "react";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import classes from "./StripeSpeakersSlider.module.scss";
import yinWu from "../../assets/stripe-slider/yin_wu.jpg";
import peter from "../../assets/stripe-slider/peter_fitzpatrick.jpg";
import takao from "../../assets/stripe-slider/takao_chitose.jpg";
import rachel from "../../assets/stripe-slider/rachel_lea_fishman.jpg";
import jason from "../../assets/stripe-slider/jason_fan.jpg";
import jeff from "../../assets/stripe-slider/jeff_sherlock.jpg";
import ted from "../../assets/stripe-slider/ted_power.jpg";
import simon from "../../assets/stripe-slider/simon_taylor.jpg";
import angela from "../../assets/stripe-slider/angela_strange.jpg";
import christa from "../../assets/stripe-slider/christa_davies.jpg";
import useArrowControls from "../../hooks/useArrowControls";

const expandedWidth = 550;

const root: any = document.querySelector(":root");

const speakers = [
  {
    name: "Yin Wu",
    image: yinWu,
  },
  {
    name: "Peter Fitzpatrick",
    image: peter,
  },
  {
    name: "Takao Chitose",
    image: takao,
  },
  {
    name: "Rachel Lea Fishman",
    image: rachel,
  },
  {
    name: "Jason Fan",
    image: jason,
  },
  {
    name: "Jeff Sherlock",
    image: jeff,
  },
  {
    name: "Ted Power",
    image: ted,
  },
  {
    name: "Simon Taylor",
    image: simon,
  },
  {
    name: "Angela Strange",
    image: angela,
  },
  {
    name: "Christa Davies",
    image: christa,
  },
];

export default function StripeSpeakersSlider() {
  const [slideIndex, setSlideIndex] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function onResize() {
      adjustSlide(slideIndex);
    }

    onResize();

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, [slideIndex, containerRef]);

  function adjustSlide(index: number) {
    const containerWidth = containerRef.current?.offsetWidth;

    if (!containerWidth) return;

    const maxNumberOfVisibleSlides = Math.floor(
      (containerWidth - expandedWidth) / (100 + 24),
    );

    let translateX = 0;

    if (index >= maxNumberOfVisibleSlides) {
      translateX =
        index === speakers.length - 1
          ? (index + 2 - maxNumberOfVisibleSlides) * -100
          : (index + 3 - maxNumberOfVisibleSlides) * -100;
    }

    root.style.setProperty("--translate-x", `${translateX}px`);
  }

  useArrowControls(speakers.length, setSlideIndex);

  return (
    <PageWrapper title="Stripe Speakers Slider">
      <div className={classes["container"]}>
        <div className={classes["wrapper"]} ref={containerRef}>
          {speakers.map(({ image, name }, index) => {
            const isActive = index === slideIndex;
            return (
              <div
                key={index}
                onClick={() => {
                  setSlideIndex(index);
                  // const containerWidth = containerRef.current?.offsetWidth;

                  // if (!containerWidth) return;

                  // const maxNumberOfVisibleSlides = Math.floor(
                  //   (containerWidth - expandedWidth) / (100 + 24),
                  // );

                  // let translateX = 0;

                  // if (index >= maxNumberOfVisibleSlides) {
                  //   translateX = (index + 3 - maxNumberOfVisibleSlides) * -100;
                  // }

                  // root.style.setProperty("--translate-x", `${translateX}px`);

                  adjustSlide(index);
                }}
                className={classes["slide"]}
                style={{
                  cursor: isActive ? "default" : "pointer",
                  width: isActive ? expandedWidth : undefined,
                }}
              >
                <img
                  src={image}
                  alt={name}
                  className={classes["image"]}
                  style={{
                    width: expandedWidth,
                    minWidth: expandedWidth,
                  }}
                />
                <div
                  className={classes["content"]}
                  style={{
                    width: expandedWidth,
                    minWidth: expandedWidth,
                  }}
                >
                  <p
                    className={classes["description"]}
                    style={{
                      opacity: isActive ? 1 : undefined,
                    }}
                  >
                    Quis anim esse tempor magna eu esse velit.
                  </p>
                  <p
                    className={classes["name"]}
                    style={{
                      opacity: isActive ? 1 : undefined,
                    }}
                  >
                    {name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PageWrapper>
  );
}
