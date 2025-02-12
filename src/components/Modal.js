import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import React from "react";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
  exit: { opacity: 0 },
};

const modal = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: "200px",
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

export default function Modal({ showModal, setShowModal }) {
  return (
    <animatePresence wait>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="exit">
          <motion.div
            className="modal"
            variants={modal}
            initial="hidden"
            animate="visible">
            <p>Want to make another pizza?</p>
            <Link to="/">
              <button>Start Again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </animatePresence>
  );
}
