import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"

const navItems = [
  { to: "/", label: "Home" },
  { to: "/", label: "Explore" },
  { to: "/library", label: "Library" },
]

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 h-14 safe-top bg-gray-900/95 backdrop-blur-md text-white flex items-center justify-between px-4 sm:px-6 z-40 shadow-lg"
    >
      <h1 className="text-base sm:text-lg font-semibold truncate">
        My Video App
      </h1>

      <div className="flex gap-4 sm:gap-6 text-sm">
        {navItems.map(({ to, label }) => (
          <NavLink key={label} to={to} className="relative py-2">
            {({ isActive }) => (
              <>
                <span
                  className={`hover:text-gray-300 transition-colors duration-200 ${
                    isActive ? "text-blue-400 font-semibold" : ""
                  }`}
                >
                  {label}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="navbar-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400 rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </motion.nav>
  )
}
