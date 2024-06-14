import React from "react";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import classes from "./HarmonicGallery.module.scss";
import fxSound from "../../assets/harmonic-gallery/fx.mp3";
import useMousePositionCSS from "../../hooks/useMousePositionCSS";
import video1 from "../../assets/harmonic-gallery/1.mp4";
import video2 from "../../assets/harmonic-gallery/2.mp4";
import video3 from "../../assets/harmonic-gallery/3.mp4";
import video4 from "../../assets/harmonic-gallery/4.mp4";
import video5 from "../../assets/harmonic-gallery/5.mp4";
import video6 from "../../assets/harmonic-gallery/6.mp4";
import video7 from "../../assets/harmonic-gallery/7.mp4";
import video8 from "../../assets/harmonic-gallery/8.mp4";

const gallery = [
  {
    label: "Alstro",
    height: 130,
    video: video1,
  },
  {
    label: "GSAP",
    height: 170,
    video: video2,
  },
  {
    label: "Carot",
    height: 130,
    video: video3,
  },
  {
    label: "Cult Gaia",
    height: 170,
    video: video4,
  },
  {
    label: "SPARQ",
    height: 190,
    video: video5,
  },
  {
    label: "Under Armour",
    height: 190,
    video: video6,
  },
  {
    label: "Senreve",
    height: 170,
    video: video7,
  },
  {
    label: "Marc & Rose",
    height: 160,
    video: video8,
  },
];

const root: any = document.querySelector(":root");
root.style.setProperty("--mouse-offset-x", "0px");
root.style.setProperty("--mouse-opacity", 0);

export default function HarmonicGallery() {
  useMousePositionCSS();
  const paragraphRef = React.useRef<HTMLParagraphElement>(null);

  return (
    <PageWrapper
      title="Harmonic Gallery"
      inspirationUrl="https://toyfight.co/work"
      background="#FAF6EF"
    >
      <div className={classes["cursor"]}>
        <p ref={paragraphRef}></p>
      </div>
      <p className={classes["hint"]}>Click anywhere to enable sound</p>
      <div
        className={classes["container"]}
        onMouseOver={() => {
          root.style.setProperty("--mouse-opacity", 1);
        }}
        onMouseLeave={() => {
          root.style.setProperty("--mouse-opacity", 0);
        }}
      >
        {gallery.map(({ video, label, height }, index) => {
          return (
            <div
              className={classes["slide"]}
              key={label}
              onMouseOver={() => {
                const audio = document.createElement("audio");
                audio.src = fxSound;
                audio.play();

                paragraphRef.current!.innerText = label;

                if (index >= 4) {
                  root.style.setProperty(
                    "--mouse-offset-x",
                    "calc(-100% + -20px)",
                  );
                } else {
                  root.style.setProperty("--mouse-offset-x", "20px");
                }
              }}
              style={{
                height,
              }}
            >
              <video
                className={classes["video"]}
                autoPlay
                controls={false}
                muted
                loop
              >
                <source src={video} type="video/mp4" />
              </video>
            </div>
          );
        })}
      </div>
    </PageWrapper>
  );
}
