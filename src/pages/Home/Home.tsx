import { Link } from "react-router-dom";
import classes from "./Home.module.scss";

const links = [
  { label: "Vienna Slider", to: "/vienna-slider" },
  { label: "Radial Dropdown", to: "/radial-dropdown" },
];

export default function Home() {
  return (
    <div className={classes["container"]}>
      {links.map(({ label, to }) => {
        return (
          <Link to={to} key={to}>
            {label}
          </Link>
        );
      })}
    </div>
  );
}
