import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../context/AuthContext";

export default function CommentSection({ comments, articleId, onAddComment }) {
  const { user } = useAuth();
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim() || !user) return;

    onAddComment(articleId, {
      author: user.name,
      text: text.trim(),
    });
    setText("");
    setSubmitted(true);

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <motion.div
      className="comment-section"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <motion.h3
        className="comment-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        Comments ({comments.length})
      </motion.h3>

      <AnimatePresence>
        {user ? (
          <motion.form
            className="comment-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <div className="comment-input-wrapper">
              <textarea
                className="comment-input"
                placeholder={`Comment as ${user.name}...`}
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={3}
                required
              />
              <motion.button
                className="comment-submit"
                type="submit"
                disabled={!text.trim()}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Post Comment
              </motion.button>
            </div>
            <AnimatePresence>
              {submitted && (
                <motion.div
                  className="comment-success"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  Comment posted successfully!
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        ) : (
          <motion.div
            className="comment-login-prompt"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
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
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span>
              <a href="/login">Log in</a> to leave a comment
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="comments-list">
        <AnimatePresence>
          {comments.length === 0 ? (
            <motion.p
              className="no-comments"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              No comments yet. Be the first to share your thoughts!
            </motion.p>
          ) : (
            [...comments].reverse().map((comment, i) => (
              <motion.div
                key={comment.id}
                className="comment-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.1 * i,
                }}
                whileHover={{ x: 4 }}
              >
                <div className="comment-avatar">
                  {comment.author.charAt(0).toUpperCase()}
                </div>
                <div className="comment-content">
                  <div className="comment-header">
                    <span className="comment-author">{comment.author}</span>
                    <span className="comment-date">{comment.date}</span>
                  </div>
                  <p className="comment-text">{comment.text}</p>
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
