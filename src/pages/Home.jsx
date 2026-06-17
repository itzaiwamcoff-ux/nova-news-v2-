import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import NewsCard from "../components/NewsCard";
import { getNewsByCategory, categories } from "../data/news";

export default function Home() {
  const [activeTab, setActiveTab] = useState("All");

  const articles = useMemo(
    () => getNewsByCategory(activeTab),
    [activeTab]
  );

  return (
    <div className="page page-home">
      <Navbar
        showTabs
        categories={categories}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Hero Section */}
      <motion.section
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <motion.span
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            Your Daily News Hub
          </motion.span>
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Discover the Stories
            <br />
            <span className="hero-highlight">That Shape Our World</span>
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            From groundbreaking tech to captivating entertainment —
            stay informed with Nova.
          </motion.p>
        </motion.div>

        <motion.div
          className="hero-graphic"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="hero-grid">
            {[...Array(9)].map((_, i) => (
              <motion.div
                key={i}
                className="hero-grid-cell"
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 2 + i * 0.3,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* News Feed */}
      <motion.section
        className="news-feed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.div
          className="feed-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <h2 className="feed-title">
            {activeTab === "All" ? "Latest Stories" : `${activeTab} News`}
          </h2>
          <span className="feed-count">{articles.length} articles</span>
        </motion.div>

        {articles.length === 0 ? (
          <motion.div
            className="no-results"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <p>No articles found in this category.</p>
          </motion.div>
        ) : (
          <div className="news-grid">
            {articles.map((article, i) => (
              <NewsCard key={article.id} article={article} index={i} />
            ))}
          </div>
        )}
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="site-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div className="footer-inner">
          <div className="footer-brand">
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
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            <span>Nova News</span>
          </div>
          <p>&copy; 2026 Nova. All rights reserved.</p>
        </div>
      </motion.footer>
    </div>
  );
}
