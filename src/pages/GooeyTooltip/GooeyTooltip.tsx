import React from "react";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import classes from "./GooeyTooltip.module.scss";

export default function GooeyTooltip() {
  const [open, setOpen] = React.useState(false);

  return (
    <PageWrapper
      title="Page"
      inspirationUrl="https://x.com/raunofreiberg/status/1833493120262025545/video/1"
    >
      <div className={classes["container"]}>
        <div className={classes["tooltip-container"]}>
          <button
            className={classes["tooltip-button"]}
            onClick={() => setOpen((v) => !v)}
          ></button>

          <div
            className={`${classes["tooltip-content"]} ${open ? classes["tooltip-content-expanded"] : ""}`}
          ></div>
        </div>
      </div>
    </PageWrapper>
  );
}
