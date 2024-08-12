import React from "react";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import classes from "./SummaryFeed.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import useWindowResize from "../../hooks/useWindowResize";

const items = ["a", "b", "c"];

export default function SummaryFeed() {
  const [selectedIndex, setSelectedIndex] = React.useState(-1);
  const { width } = useWindowResize();

  return (
    <PageWrapper title="Summary Feed">
      <div className={classes["container"]}>
        <div className={classes["cards"]}>
          {items.map((_, index) => {
            return (
              <motion.div
                className={classes["card"]}
                layoutId={index.toString()}
                onClick={() => {
                  setSelectedIndex(index);
                }}
                key={index}
                style={{
                  left: `${index * (width * 0.3)}px`,
                }}
              >
                <div className={classes["inner"]}></div>
              </motion.div>
            );
          })}
        </div>

        <AnimatePresence>
          {selectedIndex >= 0 ? (
            <motion.div
              className={classes["overlay"]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setSelectedIndex(-1);
              }}
            >
              <motion.div
                className={classes["card-opened"]}
                layoutId={selectedIndex.toString()}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              ></motion.div>
            </motion.div>
          ) : undefined}
        </AnimatePresence>
      </div>
    </PageWrapper>
  );
}
