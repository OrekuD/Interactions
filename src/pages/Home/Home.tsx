import { Link } from "react-router-dom";
import radialDropdown from "../../assets/menu-demos/radial-dropdown.gif";
import viennaSlider from "../../assets/menu-demos/vienna-slider.gif";
import classes from "./Home.module.scss";
import { motion } from "framer-motion";

const links = [
  { label: "Vienna Images Slider", to: "/vienna-slider", demo: viennaSlider },
  {
    label: "Image Hover Menu",
    to: "/image-hover-menu",
  },
  { label: "Radial Dropdown", to: "/radial-dropdown", demo: radialDropdown },
  {
    label: "Stripe Speakers Slider",
    to: "/stripe-speakers-slider",
  },
  {
    label: "Team Timezones",
    to: "/team-timezones",
  },
  {
    label: "Harmonic Gallery",
    to: "/harmonic-gallery",
  },
  {
    label: "Artist Gallery",
    to: "/artist-gallery",
  },
  {
    label: "Cursor Image Trail",
    to: "/cursor-image-trail",
  },
  {
    label: "Stepper",
    to: "/stepper",
  },
  {
    label: "Summary Feed",
    to: "/summary-feed",
  },
  {
    label: "Mooders Menu",
    to: "/mooders-menu",
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
                  <motion.p layoutId={to}>{label}</motion.p>
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
