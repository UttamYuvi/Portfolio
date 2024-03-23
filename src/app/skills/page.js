"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const { default: Link } = require("next/link");

export default function Skills() {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <div>
      {/* {items.map((item) => ( */}
      <motion.div onClick={() => setSelectedId(item.id)}>
        <motion.h5>ddd</motion.h5>
        <motion.h2>fff</motion.h2>
      </motion.div>
      {/* ))} */}

      <AnimatePresence>
        {selectedId && (
          <motion.div layoutId={selectedId}>
            <motion.h5>sss</motion.h5>
            <motion.h2>ssss</motion.h2>
            <motion.button onClick={() => setSelectedId(null)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
