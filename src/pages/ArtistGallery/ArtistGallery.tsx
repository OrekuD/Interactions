// import React from "react";
import classes from "./ArtistGallery.module.scss";
import image1 from "../../assets/artist-gallery/1.webp";
import image2 from "../../assets/artist-gallery/2.jpg";
import image3 from "../../assets/artist-gallery/3.webp";
import image4 from "../../assets/artist-gallery/4.webp";
import image5 from "../../assets/artist-gallery/5.webp";
import image6 from "../../assets/artist-gallery/6.webp";
import image7 from "../../assets/artist-gallery/7.webp";
import image8 from "../../assets/artist-gallery/8.webp";
import image9 from "../../assets/artist-gallery/9.webp";
import image10 from "../../assets/artist-gallery/10.webp";
import image11 from "../../assets/artist-gallery/11.webp";
import useMousePositionCSS from "../../hooks/useMousePositionCSS";

const gallery = [
  {
    image: image1,
    title: "Jump ball",
    description: "editorial",
  },
  {
    image: image2,
    title: "omi woods",
    description: "advertising",
  },
  {
    image: image3,
    title: "toronto fc energy kit",
    description: "advertising",
  },
  {
    image: image4,
    title: "yaad",
    description: "editorial",
  },
  {
    image: image5,
    title: "roots x revolutionnaire campaign",
    description: "advertising",
  },
  {
    image: image6,
    title: "nyam",
    description: "editorial",
  },
  {
    image: image7,
    title: `nike zoom freak 2 "naija"`,
    description: "advertising",
  },
  {
    image: image8,
    title: "the juno awards 2024 portrait studio",
    description: "advertising",
  },
  {
    image: image9,
    title: "the legacy award 2023",
    description: "advertising",
  },
  {
    image: image10,
    title: "praise & worship",
    description: "advertising",
  },
  {
    image: image11,
    title: "tenasãti jewelry",
    description: "advertising",
  },
];

const root: any = document.querySelector(":root");

root.style.setProperty("--focus-opacity", 0);

export default function ArtistGallery() {
  useMousePositionCSS();

  function onItemHover(e: React.MouseEvent<HTMLImageElement>, index: number) {
    console.log(Date.now(), " mouse over: ", index);
    // console.log({
    //   clientX: e.clientX,
    //   clientY: e.clientY,
    // });
  }

  return (
    <div className={classes["container"]}>
      <div className={classes["focus-container"]}>
        <div className={classes["top-left"]} />
        <div className={classes["bottom-left"]} />
        <div className={classes["top-right"]} />
        <div className={classes["bottom-right"]} />
      </div>
      <div className={classes["canvas-wrapper"]}>
        <div className={classes["canvas"]}>
          {gallery.map(({ image }, index) => {
            return (
              <img
                src={image}
                onMouseOver={(e) => onItemHover(e, index)}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
