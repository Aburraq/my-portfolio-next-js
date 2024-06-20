"use client";

import React from 'react';
import { motion, useTransform } from 'framer-motion';

export default function ScrollDown({ scrollYProgress }) {
  const moveDown = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <div style={{ position: 'relative', textAlign: 'center', margin:"auto" }}>
      <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" stroke="black" strokeWidth="3" fill="none" />
        <motion.line
          x1="50"
          y1="10"
          x2="50"
          y2="50"
          stroke="black"
          strokeWidth="3"
          style={{ translateY: moveDown }}
        />
        <motion.line
          x1="40"
          y1="40"
          x2="50"
          y2="50"
          stroke="black"
          strokeWidth="3"
          style={{ translateY: moveDown }}
        />
        <motion.line
          x1="60"
          y1="40"
          x2="50"
          y2="50"
          stroke="black"
          strokeWidth="3"
          style={{ translateY: moveDown }}
        />
      </svg>
      <motion.div style={{ translateY: moveDown, position: 'absolute', top: '120%' }}>
      </motion.div>
    </div>
  );
}
