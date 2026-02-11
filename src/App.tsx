import { Routes, Route } from "react-router-dom"
import { routes } from "./router/navigations"
import Player from "./pages/Player"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
      {/* Global player: mini stays visible on every screen */}
      <Player />
    </>
  )
}

export default App;
