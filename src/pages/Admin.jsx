import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "../components/ThemeToggle";
import AnimatedMenu from "../components/AnimatedMenu";
import newsData, { categories } from "../data/news";

export default function Admin() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { isDark } = useTheme();
  const [activeSection, setActiveSection] = useState("dashboard");
  const [newsList, setNewsList] = useState(newsData);
  const [editingArticle, setEditingArticle] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  if (!user || !user.isAdmin) {
    return (
      <div className="page page-admin">
        <div className="admin-unauthorized">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <h2>Access Denied</h2>
            <p>You need admin privileges to access this page.</p>
            <motion.button
              className="auth-submit"
              onClick={() => navigate("/login")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Go to Login
            </motion.button>
          </motion.div>
        </div>
      </div>
    );
  }

  const filteredNews = useMemo(
    () =>
      newsList.filter(
        (a) =>
          a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          a.category.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [newsList, searchTerm]
  );

  const totalComments = newsList.reduce(
    (sum, a) => sum + a.comments.length,
    0
  );
  const totalArticles = newsList.length;

  const sidebarItems = [
    { key: "dashboard", label: "Dashboard", icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" },
    { key: "articles", label: "Articles", icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6" },
    { key: "comments", label: "Comments", icon: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className={`admin-page ${isDark ? "dark" : "light"}`}>
      {/* Admin Navbar */}
      <motion.header
        className="admin-navbar"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="admin-nav-inner">
          <motion.a
            className="admin-logo"
            href="/"
            onClick={(e) => { e.preventDefault(); navigate("/"); }}
            whileHover={{ scale: 1.05 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            <span>Nova Admin</span>
          </motion.a>

          <div className="admin-nav-right">
            <ThemeToggle />
            <motion.button
              className="auth-btn signup-btn"
              onClick={() => { logout(); navigate("/"); }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
              <span>Logout</span>
            </motion.button>
          </div>
        </div>
      </motion.header>

      <div className="admin-layout">
        {/* Sidebar */}
        <motion.nav
          className="admin-sidebar"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {sidebarItems.map((item) => (
            <motion.button
              key={item.key}
              className={`sidebar-item ${activeSection === item.key ? "active" : ""}`}
              onClick={() => setActiveSection(item.key)}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.97 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d={item.icon} />
              </svg>
              <span>{item.label}</span>
            </motion.button>
          ))}
        </motion.nav>

        {/* Main Content */}
        <motion.main
          className="admin-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence mode="wait">
            {activeSection === "dashboard" && (
              <motion.div
                key="dashboard"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -20 }}
              >
                <h1 className="admin-page-title">Dashboard</h1>
                <div className="admin-stats-grid">
                  {[
                    { label: "Total Articles", value: totalArticles, color: "#6C63FF" },
                    { label: "Total Comments", value: totalComments, color: "#00BCD4" },
                    { label: "Categories", value: categories.length - 1, color: "#4CAF50" },
                    { label: "Active Users", value: "—", color: "#FF9800" },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      className="stat-card"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * i }}
                      whileHover={{ y: -4 }}
                    >
                      <div className="stat-value" style={{ color: stat.color }}>
                        {stat.value}
                      </div>
                      <div className="stat-label">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeSection === "articles" && (
              <motion.div
                key="articles"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="admin-section-header">
                  <h1 className="admin-page-title">Articles</h1>
                  <motion.button
                    className="admin-add-btn"
                    onClick={() => setShowAddModal(true)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                    New Article
                  </motion.button>
                </div>

                <div className="admin-search">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <div className="admin-table">
                  <div className="admin-table-header">
                    <span>Article</span>
                    <span>Category</span>
                    <span>Comments</span>
                    <span>Actions</span>
                  </div>
                  {filteredNews.map((article, i) => (
                    <motion.div
                      key={article.id}
                      className="admin-table-row"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.03 }}
                    >
                      <div className="admin-table-title">
                        <div className="admin-table-thumb" style={{ background: `hsl(${article.id * 40}, 60%, 50%)` }} />
                        <span>{article.title.substring(0, 50)}...</span>
                      </div>
                      <span className="admin-table-category">{article.category}</span>
                      <span>{article.comments.length}</span>
                      <div className="admin-table-actions">
                        <motion.button
                          className="admin-action-btn edit"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setEditingArticle(article)}
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                          </svg>
                        </motion.button>
                        <motion.button
                          className="admin-action-btn delete"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => {
                            setNewsList((prev) =>
                              prev.filter((a) => a.id !== article.id)
                            );
                          }}
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                          </svg>
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeSection === "comments" && (
              <motion.div
                key="comments"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -20 }}
              >
                <h1 className="admin-page-title">Comments</h1>
                <div className="admin-comments-list">
                  {newsList.map((article) =>
                    article.comments.length > 0 ? (
                      <motion.div
                        key={article.id}
                        className="admin-comment-group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <h3 className="admin-comment-article-title">
                          {article.title}
                        </h3>
                        {article.comments.map((comment, ci) => (
                          <motion.div
                            key={comment.id}
                            className="admin-comment-item"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: ci * 0.05 }}
                          >
                            <div className="admin-comment-avatar">
                              {comment.author.charAt(0).toUpperCase()}
                            </div>
                            <div className="admin-comment-body">
                              <div className="admin-comment-header">
                                <strong>{comment.author}</strong>
                                <span>{comment.date}</span>
                              </div>
                              <p>{comment.text}</p>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    ) : null
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.main>
      </div>

      {/* Add/Edit Modal */}
      <AnimatePresence>
        {(showAddModal || editingArticle) && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setShowAddModal(false);
              setEditingArticle(null);
            }}
          >
            <motion.div
              className="modal-content"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2>{editingArticle ? "Edit Article" : "New Article"}</h2>
              <div className="modal-form">
                <div className="input-group">
                  <label>Title</label>
                  <input
                    className="auth-input"
                    type="text"
                    placeholder="Article title"
                    defaultValue={editingArticle?.title || ""}
                  />
                </div>
                <div className="input-group">
                  <label>Category</label>
                  <select className="auth-input" defaultValue={editingArticle?.category || "Tech"}>
                    {categories.filter(c => c !== "All").map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div className="input-group">
                  <label>Summary</label>
                  <textarea
                    className="auth-input"
                    rows={3}
                    placeholder="Article summary"
                    defaultValue={editingArticle?.summary || ""}
                  />
                </div>
                <div className="input-group">
                  <label>Content</label>
                  <textarea
                    className="auth-input"
                    rows={6}
                    placeholder="Article content"
                    defaultValue={editingArticle?.content || ""}
                  />
                </div>
                <div className="modal-actions">
                  <motion.button
                    className="auth-submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setShowAddModal(false);
                      setEditingArticle(null);
                    }}
                  >
                    {editingArticle ? "Save Changes" : "Create Article"}
                  </motion.button>
                  <motion.button
                    className="modal-cancel"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setShowAddModal(false);
                      setEditingArticle(null);
                    }}
                  >
                    Cancel
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
