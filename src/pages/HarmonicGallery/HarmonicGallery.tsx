import React from "react";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import classes from "./HarmonicGallery.module.scss";
// import fxSound from "../../assets/harmonic-gallery/fx.mp3";
import useMousePositionCSS from "../../hooks/useMousePositionCSS";
import video1 from "../../assets/harmonic-gallery/1.mp4";
import video2 from "../../assets/harmonic-gallery/2.mp4";
import video3 from "../../assets/harmonic-gallery/3.mp4";
import video4 from "../../assets/harmonic-gallery/4.mp4";
import video5 from "../../assets/harmonic-gallery/5.mp4";
import video6 from "../../assets/harmonic-gallery/6.mp4";
import video7 from "../../assets/harmonic-gallery/7.mp4";
import video8 from "../../assets/harmonic-gallery/8.mp4";
import doFx from "../../assets/harmonic-gallery/do.mp3";
import reFx from "../../assets/harmonic-gallery/re.mp3";
import miFx from "../../assets/harmonic-gallery/mi.mp3";
import laFx from "../../assets/harmonic-gallery/la.mp3";
import faFx from "../../assets/harmonic-gallery/fa.mp3";
import solFx from "../../assets/harmonic-gallery/sol.mp3";
import tiFx from "../../assets/harmonic-gallery/ti.mp3";

const doAudio = document.createElement("audio");
doAudio.src = doFx;
doAudio.loop = false;

const gallery = [
  {
    label: "Alstro",
    height: 130,
    video: video1,
    audioFx: doFx,
  },
  {
    label: "GSAP",
    height: 170,
    video: video2,
    audioFx: reFx,
  },
  {
    label: "Carot",
    height: 130,
    video: video3,
    audioFx: miFx,
  },
  {
    label: "Cult Gaia",
    height: 170,
    video: video4,
    audioFx: faFx,
  },
  {
    label: "SPARQ",
    height: 190,
    video: video5,
    audioFx: solFx,
  },
  {
    label: "Under Armour",
    height: 190,
    video: video6,
    audioFx: laFx,
  },
  {
    label: "Senreve",
    height: 170,
    video: video7,
    audioFx: tiFx,
  },
  {
    label: "Marc & Rose",
    height: 160,
    video: video8,
    audioFx: doFx,
  },
];

const withSound = gallery.map((item) => {
  const audio = document.createElement("audio");
  audio.src = item.audioFx;
  audio.loop = false;
  return {
    ...item,
    audio,
  };
});

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
      <p className={classes["hint"]}>Sound on</p>
      <div className={classes["container"]}>
        {withSound.map(({ video, label, height, audio }, index) => {
          return (
            <div
              className={classes["slide"]}
              key={label}
              onMouseOver={() => {
                root.style.setProperty("--mouse-opacity", 1);
              }}
              onMouseLeave={() => {
                root.style.setProperty("--mouse-opacity", 0);
              }}
              onMouseEnter={() => {
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
