import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function AnimatedMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const menuItems = [
    { label: "Home", icon: "🏠" },
    { label: "Trending", icon: "🔥" },
    { label: "Latest", icon: "⚡" },
    { label: "Bookmarks", icon: "🔖" },
    { label: "About", icon: "ℹ️" },
    { label: "Contact", icon: "📧" },
  ];

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const panelVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 300,
        mass: 0.8,
      },
    },
    exit: {
      x: "100%",
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 300,
        mass: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 + i * 0.06,
        type: "spring",
        damping: 25,
        stiffness: 250,
      },
    }),
  };

  return (
    <>
      <motion.button
        className="menu-button"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        aria-label="Open menu"
      >
        <div className={`hamburger ${isOpen ? "open" : ""}`}>
          <span />
          <span />
          <span />
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="menu-overlay"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className={`menu-panel ${isDark ? "dark" : "light"}`}
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="menu-header">
                <h2 className="menu-title">Nova</h2>
                <motion.button
                  className="menu-close"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </motion.button>
              </div>

              <div className="menu-items">
                {menuItems.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href="#"
                    className="menu-item"
                    custom={i}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ x: 8 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="menu-item-icon">{item.icon}</span>
                    <span className="menu-item-label">{item.label}</span>
                    <svg
                      className="menu-item-arrow"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </motion.a>
                ))}
              </div>

              <motion.div
                className="menu-footer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <p>Nova News &copy; 2026</p>
                <p>Stay informed. Stay ahead.</p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
