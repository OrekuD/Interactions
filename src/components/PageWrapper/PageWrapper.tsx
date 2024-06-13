import { useNavigate } from "react-router";
import Inspiration, { InspirationProps } from "../Inspiration/Inspiration";
import classes from "./PageWrapper.module.scss";

type PageWrapperProps = {
  inspirationProps: InspirationProps;
};

export default function PageWrapper({
  inspirationProps,
  children,
}: React.PropsWithChildren<PageWrapperProps>) {
  const navigate = useNavigate();

  return (
    <div className={classes["container"]}>
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
      <Inspiration {...inspirationProps} />
      {children}
    </div>
  );
}
