import React from "react";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import classes from "./ImageHoverMenu.module.scss";
import image1 from "../../assets/image-hover-menu/1.webp";
import image2 from "../../assets/image-hover-menu/2.webp";
import image3 from "../../assets/image-hover-menu/3.webp";
import image4 from "../../assets/image-hover-menu/4.webp";
import image5 from "../../assets/image-hover-menu/5.webp";
import image6 from "../../assets/image-hover-menu/6.webp";
import image7 from "../../assets/image-hover-menu/7.webp";
import image8 from "../../assets/image-hover-menu/8.webp";
import image9 from "../../assets/image-hover-menu/9.webp";
import image10 from "../../assets/image-hover-menu/10.webp";
import image11 from "../../assets/image-hover-menu/11.webp";
import image12 from "../../assets/image-hover-menu/12.webp";
import image13 from "../../assets/image-hover-menu/13.webp";
import { Link } from "react-router-dom";
import useMousePositionCSS from "../../hooks/useMousePositionCSS";

const menuItems = [
  {
    title: "Serrano",
    services: ["Packaging Design", "Rebranding", "Repositioning"],
    image: image1,
  },
  {
    title: "GP18",
    services: ["Exhibition Design", "Visual Identity"],
    image: image2,
  },
  {
    title: "Itsasoko",
    services: ["Brand Design", "Brand Strategy", "Packaging Design"],
    image: image3,
  },
  {
    title: "GP19",
    services: ["Exhibition Design", "Visual Identity"],
    image: image4,
  },
  {
    title: "Reaction",
    services: ["Brand Design", "Visual Campaign"],
    image: image5,
  },
  {
    title: "ALC",
    services: ["Brand Design", "Creative Direction"],
    image: image6,
    sup: "K",
  },
  {
    title: "El Naturalista",
    services: ["Brand Design", "Brand Strategy"],
    image: image7,
  },
  {
    title: "Transform",
    services: ["Exhibition Design"],
    image: image8,
  },
  {
    title: "TB",
    services: ["Brand Architecture"],
    image: image9,
  },
  {
    title: "Neokdun",
    services: ["Brand Design", "Brand Strategy"],
    image: image10,
  },
  {
    title: "Canopy",
    services: ["Environmental Design", "Signage"],
    image: image11,
  },
  {
    title: "NEEEV",
    services: ["Editorial Design"],
    image: image12,
  },
  {
    title: "Arkeologi",
    services: ["Brand Design", "Exhibition Design"],
    image: image13,
  },
];

const root: any = document.querySelector(":root");

export default function ImageHoverMenu() {
  const [hoveredIndex, setHoveredIndex] = React.useState(-1);
  useMousePositionCSS();

  return (
    <PageWrapper
      title="Image Hover Menu"
      inspirationUrl="https://ang-studio.com/work"
    >
      <div className={classes["container"]}>
        <div className={classes["menu-items"]}>
          {menuItems.map(({ image, services, title, sup }, index) => {
            return (
              <Link to="#" key={title}>
                <div
                  className={classes["menu-item"]}
                  style={{
                    zIndex: index === hoveredIndex ? 100 : index,
                    opacity:
                      hoveredIndex === -1 || hoveredIndex === index ? 1 : 0.3,
                  }}
                  onMouseOver={(e) => {
                    setHoveredIndex(index);
                    root.style.setProperty(
                      `--offset-x-${index + 1}`,
                      `${e.currentTarget.offsetLeft}px`,
                    );
                    root.style.setProperty(
                      `--offset-y-${index + 1}`,
                      `${e.currentTarget.offsetTop}px`,
                    );
                  }}
                  onMouseLeave={() => {
                    setHoveredIndex(-1);
                  }}
                >
                  <div className={classes["mask"]}>
                    <p className={classes["title"]}>{title}</p>
                  </div>
                  {Boolean(sup) && (
                    <div className={classes["mask"]}>
                      <sup>{sup}</sup>
                    </div>
                  )}
                  <div className={classes["services"]}>
                    {services.map((service) => (
                      <div className={classes["mask"]} key={service}>
                        <p>{service}</p>
                      </div>
                    ))}
                  </div>
                  <img
                    src={image}
                    alt={`${title} image`}
                    className={`${classes["image"]} ${classes[`image-${index + 1}`]}`}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </PageWrapper>
  );
}
