import { Link } from "react-router-dom";
import classes from "./Home.module.scss";
import { motion } from "framer-motion";
import routes from "../../data/routes";

// const links = [
//   { label: "Vienna Images Slider", to: "/vienna-slider", demo: viennaSlider },
//   {
//     label: "Image Hover Menu",
//     to: "/image-hover-menu",
//   },
//   { label: "Radial Dropdown", to: "/radial-dropdown", demo: radialDropdown },
//   {
//     label: "Stripe Speakers Slider",
//     to: "/stripe-speakers-slider",
//   },
//   {
//     label: "Team Timezones",
//     to: "/team-timezones",
//   },
//   {
//     label: "Harmonic Gallery",
//     to: "/harmonic-gallery",
//   },
//   {
//     label: "Artist Gallery",
//     to: "/artist-gallery",
//   },
//   {
//     label: "Cursor Image Trail",
//     to: "/cursor-image-trail",
//   },
//   {
//     label: "Stepper",
//     to: "/stepper",
//   },
//   {
//     label: "Summary Feed",
//     to: "/summary-feed",
//   },
//   {
//     label: "Mooders Menu",
//     to: "/mooders-menu",
//   },
//   {
//     label: "Zia Menu",
//     to: "/zia-menu",
//   },
//   {
//     label: "Gooey Tooltip",
//     to: "/gooey-tooltip",
//   },
// ];

export default function Home() {
  return (
    <div className={classes["container"]}>
      <div className={classes["wrapper"]}>
        <p className={classes["title"]}>Interactions Playground</p>
        <div className={classes["list"]}>
          {routes.map(({ label, to, demo, hidden }) => {
            if (hidden) return null;

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
