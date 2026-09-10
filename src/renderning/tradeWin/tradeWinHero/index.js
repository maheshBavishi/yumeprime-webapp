'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './tradeWinHero.module.scss';
import Button from '@/components/button';

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

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function TradeWinHero({ heroData }) {
  const {
    titleMain = "yume prime trade & win volume based",
    titleSpan = "trading rewards.",
    description = "Trade the markets that move. Accumulate volume. Unlock milestone rewards built for traders who trade often and deserve more than just tighter spreads for it.",
    primaryBtnText = "Get Started Now",
    secondaryBtnText = "View Milestones"
  } = heroData || {};

  return (
    <div className={styles.tradeWinHero}>
      <motion.div
        className={styles.leftalignment}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h1 variants={fadeInUp}>
          {titleMain} <span> {titleSpan} </span>
        </motion.h1>
        <motion.p variants={fadeInUp}>
          {description}
        </motion.p>
        <motion.div className={styles.center} variants={fadeInUp}>
          <Button text={primaryBtnText} />
          <Button text={secondaryBtnText} outline />
        </motion.div>
      </motion.div>
    </div>
  );
}

