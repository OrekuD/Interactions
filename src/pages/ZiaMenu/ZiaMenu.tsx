import React from "react";
import useMousePositionCSS from "../../hooks/useMousePositionCSS";
import classes from "./ZiaMenu.module.scss";
import useKeyPress from "../../hooks/useKeyPress";
import splitText from "../../utils/splitText";

const root: HTMLDivElement = document.querySelector(":root")!;
root.style.setProperty("--mouse-size", "8px");
root.style.setProperty("--mouse-opacity", "1");
root.style.setProperty("--mouse-background", "white");
root.style.setProperty("--mouse-link-opacity", "0");
root.style.setProperty("--mouse-scale", "0.5");

function setCursorLink() {
  root.style.setProperty("--mouse-link-opacity", "1");
  root.style.setProperty("--mouse-scale", "1");
}

function resetCursorLink() {
  root.style.setProperty("--mouse-link-opacity", "0");
  root.style.setProperty("--mouse-scale", "0");
}

const links = ["about", "shots", "skills"];

export default function ZiaMenu() {
  const [showMenu, setShowMenu] = React.useState(false);
  useMousePositionCSS();

  useKeyPress("Escape", () => setShowMenu(false));

  return (
    <>
      <div className={classes["cursor"]} />
      <div className={classes["cursor-link"]} />
      <div className={classes["container"]}>
        <div
          className={classes["container__menu-background"]}
          style={{
            transform: showMenu ? "translateY(0)" : "translateY(100%)",
          }}
        />
        <div
          className={classes["container__menu-content-wrapper"]}
          style={
            {
              // pointerEvents: showMenu ? "all" : "none",
            }
          }
        >
          {showMenu && (
            <div className={classes["container__menu-content"]}>
              <div className={classes["container__menu-content-left"]}>
                <div
                  className={classes["container__menu-content-left-menu-links"]}
                >
                  {links.map((link, linkIndex) => {
                    return (
                      <div
                        key={link}
                        className={
                          classes["container__menu-content-left-menu-link"]
                        }
                        onMouseOver={setCursorLink}
                        onMouseLeave={resetCursorLink}
                      >
                        {splitText(link).map((char, index) => (
                          <span
                            key={index}
                            className={classes["span__default"]}
                            style={{
                              "--link-delay": `${linkIndex * 0.2 + index * 0.05}s`,
                              "--delay": `${index * 0.05}s`,
                            }}
                          >
                            {char}
                          </span>
                        ))}
                        <div
                          className={
                            classes[
                              "container__menu-content-left-menu-link-offset"
                            ]
                          }
                        >
                          {splitText(link).map((char, index) => (
                            <span
                              key={index}
                              className={classes["span__offset"]}
                              style={{
                                "--link-delay": `${linkIndex * 0.2 + index * 0.05}s`,
                                "--delay": `${index * 0.05}s`,
                              }}
                            >
                              {char}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div
                  className={
                    classes["container__menu-content-left-menu-footer"]
                  }
                >
                  <div
                    className={
                      classes[
                        "container__menu-content-left-menu-footer-content"
                      ]
                    }
                    onMouseOver={setCursorLink}
                    onMouseLeave={resetCursorLink}
                  >
                    <p>design + develop</p>
                    <p>amir arhami</p>
                  </div>
                </div>
              </div>
              <div className={classes["container__menu-content-right"]}></div>
            </div>
          )}
        </div>
        <div className={classes["container__menu-button-attraction-area"]}>
          <button
            className={`${classes["container__menu-button"]} ${showMenu ? `${classes["container__menu-button-opened"]}` : ""}`}
            onClick={() => setShowMenu((v) => !v)}
            onMouseOver={() => {
              root.style.setProperty("--mouse-size", "64px");
              root.style.setProperty("--mouse-opacity", "0");
              root.style.setProperty("--mouse-background", "transparent");
            }}
            onMouseLeave={() => {
              root.style.setProperty("--mouse-size", "8px");
              root.style.setProperty("--mouse-opacity", "1");
              root.style.setProperty("--mouse-background", "white");
            }}
            style={{
              borderColor: "rgba(255, 255, 255, 0.1)",
            }}
          >
            <div className={classes["container__menu-button-background"]} />
            <div className={classes["container__menu-button-line-top"]} />
            <div className={classes["container__menu-button-line-bottom"]} />
          </button>
        </div>
      </div>
    </>
  );
}
