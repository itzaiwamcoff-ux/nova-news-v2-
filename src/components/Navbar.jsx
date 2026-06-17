import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";
import AnimatedMenu from "./AnimatedMenu";
import TabSwitcher from "./TabSwitcher";

export default function Navbar({
  showTabs,
  categories,
  activeTab,
  onTabChange,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();
  const { isDark } = useTheme();

  const isArticlePage = location.pathname.startsWith("/article/");
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/signup";
  const isAdminPage = location.pathname === "/admin";

  return (
    <motion.header
      className={`navbar ${isDark ? "dark" : "light"}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <div className="navbar-inner">
        {/* Left: Brand + Auth */}
        <motion.div
          className="navbar-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <motion.a
            className="navbar-brand"
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            <span className="brand-text">Nova</span>
          </motion.a>

          {!isArticlePage && !isAdminPage && (
            <AnimatePresence mode="wait">
              {user ? (
                <motion.div
                  className="navbar-user"
                  key="user"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <motion.div
                    className="user-avatar-small"
                    whileHover={{ scale: 1.1 }}
                  >
                    {user.name.charAt(0).toUpperCase()}
                  </motion.div>
                  <span className="user-name-small">{user.name}</span>
                  {user.isAdmin && (
                    <motion.button
                      className="admin-btn"
                      onClick={() => navigate("/admin")}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Dashboard
                    </motion.button>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  className="navbar-auth"
                  key="auth"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <motion.button
                    className="auth-btn login-btn"
                    onClick={() => navigate("/login")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Log In
                  </motion.button>
                  <motion.button
                    className="auth-btn signup-btn"
                    onClick={() => navigate("/signup")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Sign Up
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </motion.div>

        {/* Center: Tabs */}
        {showTabs && (
          <div className="navbar-center">
            <TabSwitcher
              categories={categories}
              activeTab={activeTab}
              onTabChange={onTabChange}
            />
          </div>
        )}

        {/* Right: Settings */}
        <motion.div
          className="navbar-right"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {!isAuthPage && !isAdminPage && (
            <div className="navbar-actions">
              <ThemeToggle />
              <AnimatedMenu />
            </div>
          )}
          {(user || isAdminPage) && (
            <motion.button
              className="logout-btn"
              onClick={() => {
                logout();
                navigate("/");
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
              <span>Logout</span>
            </motion.button>
          )}
        </motion.div>
      </div>
    </motion.header>
  );
}
