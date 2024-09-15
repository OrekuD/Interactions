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

const hello = Array(15).fill(null);

const socialLinks = Array(3).fill(null);

const spanDefaultVariants: Variants = {
  initial: {
    translateY: "100%",
  },
  animate: (delay) => ({
    translateY: "0%",
    transition: {
      duration: 0.6,
      ease: cubicBezier(0.68, -0.55, 0.27, 1.55),
      delay,
    },
  }),
  hovered: (delay) => ({
    translateY: "-100%",
    transition: {
      duration: 0.4,
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
      duration: 0.4,
      ease: cubicBezier(0.68, -0.55, 0.27, 1.55),
      delay,
    },
  }),
  animate: (delay) => ({
    translateY: "100%",
    transition: {
      duration: 0.6,
      ease: cubicBezier(0.68, -0.55, 0.27, 1.55),
      delay,
    },
  }),
  initial: {
    translateY: "100%",
  },
};

const socialLinksVariants: Variants = {
  initial: {
    translateY: "80%",
    opacity: 0,
  },
  animate: (delay) => ({
    translateY: "0%",
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      delay,
    },
  }),
  exit: (delay) => ({
    translateY: "80%",
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      delay,
    },
  }),
  hover: {
    scale: 1.2,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
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
            />
          )}
        </AnimatePresence>

        <div className={classes["container__menu-content-wrapper"]}>
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
                            delay: 0.4,
                            duration: 0.5,
                            ease: cubicBezier(0.16, 1, 0.32, 1),
                          },
                        }}
                        exit={{
                          translateY: "100%",
                          opacity: 0,
                          transition: {
                            duration: 0.6,
                            ease: cubicBezier(0.16, 1, 0.32, 1),
                            delay: 0.1,
                          },
                        }}
                      >
                        <p>design + develop</p>
                        <p>amir arhami</p>
                      </motion.div>
                    )}
                  </div>
                </div>
                <div className={classes["container__menu-content-right"]}>
                  <div
                    className={
                      classes["container__menu-content-right-menu-top"]
                    }
                  >
                    {showMenu && (
                      <motion.div
                        className={
                          classes[
                            "container__menu-content-right-menu-top-content"
                          ]
                        }
                        initial={{
                          translateY: "100%",
                        }}
                        animate={{
                          translateY: "0%",
                          transition: {
                            delay: 0.4,
                            duration: 0.5,
                            ease: cubicBezier(0.16, 1, 0.32, 1),
                          },
                        }}
                        exit={{
                          translateY: "100%",
                          opacity: 0,
                          transition: {
                            duration: 0.6,
                            ease: cubicBezier(0.16, 1, 0.32, 1),
                            delay: 0.1,
                          },
                        }}
                      >
                        <p>*</p>
                        <p>I'm a girl</p>
                        <p>from the heart of desert!</p>
                      </motion.div>
                    )}
                  </div>

                  <div className={classes["container__menu-social-links"]}>
                    {socialLinks.map((_, index) => (
                      <motion.div
                        className={classes["container__menu-social-link"]}
                        onMouseOver={setCursorLink}
                        onMouseLeave={resetCursorLink}
                        variants={socialLinksVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        custom={(socialLinks.length - 1 - index) * 0.1}
                        key={index}
                      />
                    ))}
                  </div>
                </div>
                <motion.div
                  className={classes["container__hello-marquee-container"]}
                  initial={{
                    opacity: 0,
                    transform:
                      "translateY(60px) translateX(30px) rotate(-10deg)",
                  }}
                  animate={{
                    opacity: 1,
                    transform:
                      "translateY(30px) translateX(30px) rotate(-10deg)",
                    transition: {
                      duration: 0.7,
                      ease: "easeInOut",
                    },
                  }}
                  exit={{
                    opacity: 0,
                    transform:
                      "translateY(60px) translateX(30px) rotate(-10deg)",
                    transition: {
                      duration: 0.7,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <div className={classes["container__hello-marquee"]}>
                    {hello.map((_, index) => (
                      <span key={index}>hello</span>
                    ))}
                  </div>
                  <div className={classes["container__hello-marquee"]}>
                    {hello.map((_, index) => (
                      <span key={index}>hello</span>
                    ))}
                  </div>
                </motion.div>
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
