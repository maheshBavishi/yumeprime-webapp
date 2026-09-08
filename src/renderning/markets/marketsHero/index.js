'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './marketsHero.module.scss';
import Button from '@/components/button';

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export default function MarketsHero() {
  return (
    <div className={styles.marketsHero}>
      <motion.div
        className={styles.content}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={containerVariants}
      >
        <motion.h2 variants={fadeInLeft}>
          One Account. Six Markets. <span> No Limits. </span>
        </motion.h2>
        <motion.div variants={fadeInRight}>
          <p>
            Everything you want to trade is accessible from a single Yume Prime account forex, metals, crypto CFDs, global indices,
            stock CFDs, and commodities, powered by MetaTrader 5, WebTrader, and our mobile app.
          </p>
          <Button text="Start Trading" />
        </motion.div>
      </motion.div>
    </div>
  );
}

