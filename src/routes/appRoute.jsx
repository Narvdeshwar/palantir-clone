import React from "react";
import PageTransition from "../components/transitions/PageTransition";

// lazy import
const Home = React.lazy(() => import("../views/home/Home"));
const Search = React.lazy(() => import("../components/search/SearchComponent"));
const Menu = React.lazy(() => import("../components/menu/Menu"));
const OpsUnity = React.lazy(() => import("../views/platforms/opsunity/OpsUnity"));
const JSPARKVision = React.lazy(() => import("../views/platforms/gotham/Gotham"));
const GetStarted = React.lazy(() => import("../views/get-started/GetStarted"));
const Foundary = React.lazy(() =>
  import("../views/platforms/foundary/Foundary")
);
const Ontalogy = React.lazy(() =>
  import("../views/platforms/ontology/Ontology")
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
    path: "/platforms/gotham",
    element: (
      <PageTransition>
        <JSPARKVision />
      </PageTransition>
    ),
  },
  {
    path: "/platforms/foundary",
    element: (
      <PageTransition>
        <Foundary />
      </PageTransition>
    ),
  },
  {
    path: "/platforms/ontology",
    element: (
      <PageTransition>
        <Ontalogy />
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
