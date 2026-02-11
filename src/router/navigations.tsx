import Home from "../pages/Home";
import PlayerRoute from "../pages/PlayerRoute";

export const routes = [
  {
    path: "/",
    element: <Home />,
    name: "Home",
  },
  {
    path: "/player/:slug",
    element: <PlayerRoute />,
    name: "Player",
  },
];
