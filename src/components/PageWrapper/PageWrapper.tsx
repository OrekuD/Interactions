import { useNavigate } from "react-router";
import classes from "./PageWrapper.module.scss";

type PageWrapperProps = {
  title: string;
  inspirationUrl?: string;
  background?: string;
};

export default function PageWrapper({
  background,
  children,
  title,
  inspirationUrl,
}: React.PropsWithChildren<PageWrapperProps>) {
  const navigate = useNavigate();

  return (
    <div
      className={classes["container"]}
      style={{
        background,
      }}
    >
      <div className={classes["header"]}>
        <button className={classes["back-button"]} onClick={() => navigate(-1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
            width={20}
            height={20}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </button>
        <p className={classes["title"]}>{title}</p>
        {Boolean(inspirationUrl?.trim()) && (
          <a href={inspirationUrl} className={classes["inspiration"]}>
            <p className={classes["title"]}>Inspiration</p>
          </a>
        )}
      </div>
      {children}
    </div>
  );
}
