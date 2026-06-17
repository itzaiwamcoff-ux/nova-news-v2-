import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function NewsCard({ article, index }) {
  const navigate = useNavigate();

  return (
    <motion.article
      className="news-card"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.08 * index,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        y: -6,
        transition: { duration: 0.25 },
      }}
      onClick={() => navigate(`/article/${article.id}`)}
    >
      <motion.div
        className="news-card-image"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4 }}
      >
        <img
          src={article.image}
          alt={article.title}
          loading="lazy"
        />
        <div className="news-card-category">
          <span>{article.category}</span>
        </div>
      </motion.div>
      <div className="news-card-body">
        <div className="news-card-meta">
          <span className="news-card-author">{article.author}</span>
          <span className="news-card-date">{article.date}</span>
        </div>
        <h3 className="news-card-title">{article.title}</h3>
        <p className="news-card-summary">{article.summary}</p>
        <div className="news-card-footer">
          <motion.div
            className="news-card-readmore"
            whileHover={{ x: 4 }}
          >
            <span>Read Article</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </motion.div>
          <div className="news-card-comments-count">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span>{article.comments.length}</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
