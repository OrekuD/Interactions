import React from "react";
import useMousePositionCSS from "../../hooks/useMousePositionCSS";
import classes from "./ZiaMenu.module.scss";
import useKeyPress from "../../hooks/useKeyPress";
import splitText from "../../utils/splitText";
import { AnimatePresence, Variants, cubicBezier, motion } from "framer-motion";

const root: HTMLDivElement = document.querySelector(":root")!;
root.style.setProperty("--mouse-size", "8px");
root.style.setProperty("--mouse-opacity", "1");
root.style.setProperty("--mouse-background", "white");
root.style.setProperty("--mouse-link-opacity", "0");
root.style.setProperty("--mouse-scale", "0");

function setCursorLink() {
  root.style.setProperty("--mouse-link-opacity", "1");
  root.style.setProperty("--mouse-scale", "1");
}

function resetCursorLink() {
  root.style.setProperty("--mouse-link-opacity", "0");
  root.style.setProperty("--mouse-scale", "0");
}

const links = ["about", "shots", "skills"];

const spanDefaultVariants: Variants = {
  initial: {
    translateY: "100%",
  },
  animate: (delay) => ({
    translateY: "0%",
    transition: {
      duration: 0.5,
      ease: cubicBezier(0.68, -0.55, 0.27, 1.55),
      delay,
    },
  }),
  hovered: (delay) => ({
    translateY: "-100%",
    transition: {
      duration: 0.5,
      ease: cubicBezier(0.68, -0.55, 0.27, 1.55),
      delay,
    },
  }),
  exit: (delay) => ({
    translateY: "100%",
    transition: {
      duration: 0.5,
      ease: cubicBezier(0.68, -0.55, 0.27, 1.55),
      delay,
    },
  }),
};

const spanOffsetVariants: Variants = {
  hovered: (delay) => ({
    translateY: "0%",
    transition: {
      duration: 0.5,
      ease: cubicBezier(0.68, -0.55, 0.27, 1.55),
      delay,
    },
  }),
  initial: {
    translateY: "100%",
  },
};

export default function ZiaMenu() {
  const [showMenu, setShowMenu] = React.useState(false);
  useMousePositionCSS();

  useKeyPress("Escape", () => setShowMenu(false));

  return (
    <>
      <div className={classes["cursor"]} />
      <div className={classes["cursor-link"]} />
      <div className={classes["container"]}>
        <AnimatePresence>
          {showMenu && (
            <motion.div
              className={classes["container__menu-background"]}
              initial={{
                translateY: "100%",
              }}
              animate={{
                translateY: "0%",
                transition: {
                  duration: 0.7,
                  ease: cubicBezier(0.16, 1, 0.32, 1),
                },
              }}
              exit={{
                translateY: "100%",
                transition: {
                  duration: 0.7,
                  ease: cubicBezier(0.16, 1, 0.32, 1),
                  delay: 0.2,
                },
              }}
              // style={{
              //   transform: showMenu ? "translateY(0)" : "translateY(100%)",
              // }}
            />
          )}
        </AnimatePresence>

        <div
          className={classes["container__menu-content-wrapper"]}
          style={
            {
              // pointerEvents: showMenu ? "all" : "none",
            }
          }
        >
          <AnimatePresence>
            {showMenu && (
              <div className={classes["container__menu-content"]}>
                <div className={classes["container__menu-content-left"]}>
                  <div
                    className={
                      classes["container__menu-content-left-menu-links"]
                    }
                  >
                    {links.map((link) => {
                      return (
                        <motion.div
                          key={link}
                          className={
                            classes["container__menu-content-left-menu-link"]
                          }
                          onMouseOver={setCursorLink}
                          onMouseLeave={resetCursorLink}
                          whileHover="hovered"
                          initial="initial"
                          animate="animate"
                          exit="exit"
                        >
                          {splitText(link).map((char, index) => (
                            <motion.span
                              key={index}
                              className={classes["span__default"]}
                              variants={spanDefaultVariants}
                              custom={index * 0.05}
                              // whileHover=""
                              // whileHover={{
                              //   translateY: "-100%",
                              //   transition: {
                              //     delay: index * 0.05
                              //   }
                              // }}
                              // style={{
                              //   "--link-delay": `${linkIndex * 0.2 + index * 0.05}s`,
                              //   "--delay": `${index * 0.05}s`,
                              // }}
                            >
                              {char}
                            </motion.span>
                          ))}
                          <div
                            className={
                              classes[
                                "container__menu-content-left-menu-link-offset"
                              ]
                            }
                          >
                            {splitText(link).map((char, index) => (
                              <motion.span
                                key={index}
                                className={classes["span__offset"]}
                                variants={spanOffsetVariants}
                                custom={index * 0.05}
                                // whileHover={{
                                //   translateY: "0%",
                                //   transition: {
                                //     delay: index * 0.05
                                //   }
                                // }}
                                // style={{
                                //   "--link-delay": `${linkIndex * 0.2 + index * 0.05}s`,
                                //   "--delay": `${index * 0.05}s`,
                                // }}
                              >
                                {char}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                  <div
                    className={
                      classes["container__menu-content-left-menu-footer"]
                    }
                  >
                    <AnimatePresence>
                      {showMenu && (
                        <motion.div
                          className={
                            classes[
                              "container__menu-content-left-menu-footer-content"
                            ]
                          }
                          onMouseOver={setCursorLink}
                          onMouseLeave={resetCursorLink}
                          initial={{
                            translateY: "100%",
                          }}
                          animate={{
                            translateY: "0%",
                            transition: {
                              delay: 0.2,
                              duration: 0.4,
                              ease: cubicBezier(0.16, 1, 0.32, 1),
                            },
                          }}
                          exit={{
                            translateY: "100%",
                            transition: {
                              duration: 0.4,
                              ease: cubicBezier(0.16, 1, 0.32, 1),
                              delay: 0.2,
                            },
                          }}
                        >
                          <p>design + develop</p>
                          <p>amir arhami</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                <div className={classes["container__menu-content-right"]}></div>
              </div>
            )}
          </AnimatePresence>
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
