import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import ViennaSlider from "./pages/ViennaSlider/ViennaSlider.tsx";
import RadialDropdown from "./pages/RadialDropdown/RadialDropdown.tsx";
import StripeSpeakersSlider from "./pages/StripeSpeakersSlider/StripeSpeakersSlider.tsx";
import HarmonicGallery from "./pages/HarmonicGallery/HarmonicGallery.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "vienna-slider",
    element: <ViennaSlider />,
  },
  {
    path: "radial-dropdown",
    element: <RadialDropdown />,
  },
  {
    path: "stripe-speakers-slider",
    element: <StripeSpeakersSlider />,
  },
  {
    path: "harmonic-gallery",
    element: <HarmonicGallery />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
