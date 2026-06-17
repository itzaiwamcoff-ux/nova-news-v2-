import { motion } from "framer-motion";

export default function TabSwitcher({ categories, activeTab, onTabChange }) {
  return (
    <motion.div
      className="tab-switcher"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
    >
      <div className="tab-container">
        {categories.map((tab, index) => (
          <motion.button
            key={tab}
            className={`tab-item ${activeTab === tab ? "active" : ""}`}
            onClick={() => onTabChange(tab)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
          >
            {activeTab === tab && (
              <motion.div
                className="tab-active-indicator"
                layoutId="activeTab"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
            <span className="tab-label">{tab}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
