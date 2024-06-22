import PageWrapper from "../../components/PageWrapper/PageWrapper";
import classes from "./Page.module.scss";

export default function Page() {
  return (
    <PageWrapper title="Page">
      <div className={classes["container"]}></div>
    </PageWrapper>
  );
}
