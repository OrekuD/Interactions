import { Link } from "react-router-dom";
import radialDropdown from "../../assets/menu-demos/radial-dropdown.gif";
import viennaSlider from "../../assets/menu-demos/vienna-slider.gif";
import classes from "./Home.module.scss";

const links = [
  { label: "Vienna Images Slider", to: "/vienna-slider", demo: viennaSlider },
  { label: "Radial Dropdown", to: "/radial-dropdown", demo: radialDropdown },
  {
    label: "Stripe Speakers Slider",
    to: "/stripe-speakers-slider",
  },
  {
    label: "Harmonic Gallery",
    to: "/harmonic-gallery",
  },
];

export default function Home() {
  return (
    <div className={classes["container"]}>
      <div className={classes["wrapper"]}>
        <p className={classes["title"]}>Interactions Playground</p>
        <div className={classes["list"]}>
          {links.map(({ label, to, demo }) => {
            return (
              <Link to={to} key={to}>
                <div className={classes["item"]}>
                  <p>{label}</p>
                  {demo && (
                    <img
                      src={demo}
                      alt={label}
                      className={classes["floating-image"]}
                    />
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
