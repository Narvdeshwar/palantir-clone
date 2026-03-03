import React from "react";
import PageTransition from "../components/transitions/PageTransition";

// lazy import
const Home = React.lazy(() => import("../views/home/Home"));
const Search = React.lazy(() => import("../components/search/SearchComponent"));
const Menu = React.lazy(() => import("../components/menu/Menu"));
const OpsUnity = React.lazy(() => import("../views/platforms/opsunity/OpsUnity"));
const JSPARKVision = React.lazy(() => import("../views/platforms/jspark-vision/JSPARKVision"));
const GetStarted = React.lazy(() => import("../views/get-started/GetStarted"));
const PrimeEAM = React.lazy(() =>
  import("../views/platforms/prime-eam/PrimeEAM")
);
const OpsSharthi = React.lazy(() =>
  import("../views/platforms/opsharthi/OpsSharthi")
);
const Appollo = React.lazy(() => import("../views/platforms/appollo/Appollo"));

export const appRoutes = [
  {
    path: "/",
    element: (
      <PageTransition>
        <Home />
      </PageTransition>
    ),
  },
  {
    path: "/search",
    element: (
      <PageTransition>
        <Search />
      </PageTransition>
    ),
  },
  {
    path: "/menu",
    element: (
      <PageTransition>
        <Menu />
      </PageTransition>
    ),
  },
  {
    path: "/platforms/opsunity",
    element: (
      <PageTransition>
        <OpsUnity />
      </PageTransition>
    ),
  },
  {
    path: "/platforms/jspark-vision",
    element: (
      <PageTransition>
        <JSPARKVision />
      </PageTransition>
    ),
  },
  {
    path: "/platforms/prime-eam",
    element: (
      <PageTransition>
        <PrimeEAM />
      </PageTransition>
    ),
  },
  {
    path: "/platforms/opsharthi",
    element: (
      <PageTransition>
        <OpsSharthi />
      </PageTransition>
    ),
  },
  {
    path: "/platforms/appollo",
    element: (
      <PageTransition>
        <Appollo />
      </PageTransition>
    ),
  },
  {
    path: "/get-started",
    element: (
      <PageTransition>
        <GetStarted />
      </PageTransition>
    ),
  },
];
