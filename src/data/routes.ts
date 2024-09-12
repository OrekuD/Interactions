import radialDropdown from "../assets/menu-demos/radial-dropdown.gif";
import viennaSlider from "../assets/menu-demos/vienna-slider.gif";
import ArtistGallery from "../pages/ArtistGallery/ArtistGallery";
import CursorImageTrail from "../pages/CursorImageTrail/CursorImageTrail";
import GooeyTooltip from "../pages/GooeyTooltip/GooeyTooltip";
import HarmonicGallery from "../pages/HarmonicGallery/HarmonicGallery";
import ImageHoverMenu from "../pages/ImageHoverMenu/ImageHoverMenu";
import MoodersMenu from "../pages/MoodersMenu/MoodersMenu";
import RadialDropdown from "../pages/RadialDropdown/RadialDropdown";
import Stepper from "../pages/Stepper/Stepper";
import StripeSpeakersSlider from "../pages/StripeSpeakersSlider/StripeSpeakersSlider";
import SummaryFeed from "../pages/SummaryFeed/SummaryFeed";
import TeamTimezones from "../pages/TeamTimezones/TeamTimezones";
import ViennaSlider from "../pages/ViennaSlider/ViennaSlider";
import ZiaMenu from "../pages/ZiaMenu/ZiaMenu";

const routes = [
  {
    label: "Vienna Images Slider",
    to: "/vienna-slider",
    demo: viennaSlider,
    component: ViennaSlider,
  },
  {
    label: "Image Hover Menu",
    to: "/image-hover-menu",
    component: ImageHoverMenu,
  },
  {
    label: "Radial Dropdown",
    to: "/radial-dropdown",
    demo: radialDropdown,
    component: RadialDropdown,
  },
  {
    label: "Stripe Speakers Slider",
    to: "/stripe-speakers-slider",
    component: StripeSpeakersSlider,
  },
  {
    label: "Team Timezones",
    component: TeamTimezones,
    to: "/team-timezones",
  },
  {
    label: "Harmonic Gallery",
    to: "/harmonic-gallery",
    component: HarmonicGallery,
  },
  {
    label: "Artist Gallery",
    to: "/artist-gallery",
    component: ArtistGallery,
  },
  {
    label: "Cursor Image Trail",
    to: "/cursor-image-trail",
    component: CursorImageTrail,
  },
  {
    label: "Stepper",
    to: "/stepper",
    component: Stepper,
  },
  {
    label: "Summary Feed",
    to: "/summary-feed",
    component: SummaryFeed,
  },
  {
    label: "Mooders Menu",
    to: "/mooders-menu",
    component: MoodersMenu,
  },
  {
    label: "Zia Photography Menu",
    to: "/zia-photography-menu",
    component: ZiaMenu,
  },
  {
    label: "Gooey Tooltip",
    to: "/gooey-tooltip",
    component: GooeyTooltip,
    hidden: true,
  },
];

export default routes;
