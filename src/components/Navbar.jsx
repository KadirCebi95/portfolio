import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Anasayfa", path: "/" },
  { name: "Hakkımda", path: "/about" },
  { name: "Projeler", path: "/projects" },
  { name: "Hizmetler", path: "/services" },
  { name: "İletişim", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-950 text-white z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-yellow-400">
          Kadir Çebi
        </Link>

        <div className="md:hidden text-2xl" onClick={() => setOpen(true)}>
          <FiMenu />
        </div>

        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className="text-gray-300 hover:text-yellow-400 transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              className="fixed top-0 right-0 w-64 h-full bg-gray-900 z-50 p-6 shadow-lg"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold text-yellow-400">Kadir Çebi</h2>
                <button onClick={() => setOpen(false)} className="text-2xl">
                  <FiX />
                </button>
              </div>
              <div className="flex flex-col gap-4">
                {navLinks.map((link, i) => (
                  <Link
                    key={i}
                    to={link.path}
                    className="text-gray-300 hover:text-yellow-400"
                    onClick={() => setOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
