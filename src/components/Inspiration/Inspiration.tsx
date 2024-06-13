import classes from "./Inspiration.module.scss";

export type InspirationProps = {
  url: string;
};

export default function Inspiration({ url }: InspirationProps) {
  return (
    <a href={url} target="_blank" rel="noreferrer noopener">
      <div className={classes["container"]}>
        <p>Inspiration</p>
      </div>
    </a>
  );
}
