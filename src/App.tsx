import { Routes, Route } from "react-router-dom";
import { routes } from "./router/navigations";

import MiniPlayer from "./components/MiniPlayer";
function App() {
  return (
    <>
     
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          />
        ))}
        
      </Routes>
      <MiniPlayer/>
    </>
  );
}

export default App;
