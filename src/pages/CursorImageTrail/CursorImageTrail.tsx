import PageWrapper from "../../components/PageWrapper/PageWrapper";
import useMousePositionCSS from "../../hooks/useMousePositionCSS";
import classes from "./CursorImageTrail.module.scss";

const images = [
  "https://images.unsplash.com/photo-1609856878074-cf31e21ccb6b?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519923041107-e4dc8d9193da?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1572085313473-08e54ae31fc8?q=80&w=200&auto=format&fit=crop",
];

const root: any = document.querySelector(":root");

root.style.setProperty("--images-opacity", 1);
root.style.setProperty("--cursor-scale", 1);

export default function CursorImageTrail() {
  useMousePositionCSS();

  return (
    <PageWrapper title="Cursor Image Trail">
      <div className={classes["container"]}>
        <a href="#">
          <p
            onMouseOver={() => {
              root.style.setProperty("--cursor-scale", 4);
              root.style.setProperty("--images-opacity", 0);
            }}
            onMouseLeave={() => {
              root.style.setProperty("--cursor-scale", 1);
              root.style.setProperty("--images-opacity", 1);
            }}
          >
            Some Link
          </p>
        </a>
        <img
          src="https://images.unsplash.com/photo-1573167443175-867d91708f97?q=80&w=800&auto=format&fit=crop"
          alt="Image background"
        />
        <div className={classes["background"]} />
      </div>
      <div className={classes["cursor"]} />
      <div className={classes["cursor-background"]} />
      {images.map((image, index) => {
        return (
          <img
            src={image}
            key={index}
            className={classes["image"]}
            style={{
              "--duration": `${0.25 + index * 0.075}s`,
            }}
          />
        );
      })}
    </PageWrapper>
  );
}
