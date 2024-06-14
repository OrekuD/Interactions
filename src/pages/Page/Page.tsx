// import React from "react";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import classes from "./Page.module.scss";

type PageProps = {
  item: string;
};

export default function Page(_: PageProps) {
  return (
    <PageWrapper title="Page">
      <div className={classes["container"]}></div>
    </PageWrapper>
  );
}
