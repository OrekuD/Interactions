// import React from "react";
import classes from "./Page.module.scss";

type PageProps = {
  item: string;
};

export default function Page(_: PageProps) {
  return <div className={classes["container"]}></div>;
}
