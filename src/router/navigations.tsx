import Home from "../pages/Home";
import Player from "../pages/Player";


export const routes = [
  {
    path: "/",
    element: <Home />,
    name: "Home",
  },
{
  path: "/player/:slug",
  element: <Player />,
  name: "Player",
}

  
 
];
