import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import CommentSection from "../components/CommentSection";
import { getNewsById, addComment } from "../data/news";

export default function Article() {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = getNewsById(id);
  const [, setRefresh] = useState(0);

  if (!article) {
    return (
      <div className="page page-article">
        <Navbar />
        <motion.div
          className="article-not-found"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <h1>Article Not Found</h1>
          <p>The article you're looking for doesn't exist.</p>
          <motion.button
            className="back-btn"
            onClick={() => navigate("/")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Home
          </motion.button>
        </motion.div>
      </div>
    );
  }

  const handleAddComment = (articleId, comment) => {
    addComment(articleId, comment);
    setRefresh((r) => r + 1);
  };

  return (
    <div className="page page-article">
      <Navbar />

      <motion.main
        className="article-main"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Back button */}
        <motion.button
          className="back-btn"
          onClick={() => navigate("/")}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05, x: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          <span>Back</span>
        </motion.button>

        {/* Article Image */}
        <motion.div
          className="article-image-wrapper"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <img
            src={article.image}
            alt={article.title}
            className="article-image"
          />
          <motion.div
            className="article-category-badge"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            {article.category}
          </motion.div>
        </motion.div>

        {/* Article Header */}
        <motion.div
          className="article-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="article-title">{article.title}</h1>
          <div className="article-meta">
            <motion.div
              className="article-author"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="author-avatar">
                {article.author.charAt(0).toUpperCase()}
              </div>
              <span>{article.author}</span>
            </motion.div>
            <motion.span
              className="article-date"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              {article.date}
            </motion.span>
          </div>
        </motion.div>

        {/* Article Content */}
        <motion.div
          className="article-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {article.content.split("\n\n").map((paragraph, i) => (
            <motion.p
              key={i}
              className="article-paragraph"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 + i * 0.05 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          className="article-divider"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />

        {/* Comment Section */}
        <CommentSection
          comments={article.comments}
          articleId={article.id}
          onAddComment={handleAddComment}
        />
      </motion.main>
    </div>
  );
}
