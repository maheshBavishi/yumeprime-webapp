'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './stopSwitching.module.scss';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const lineVariant = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function StopSwitching() {
  return (
    <div className={styles.stopSwitching}>
      <div className='container-xl'>
        <motion.div
          className={styles.title}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
        >
          <h2>Stop switching between platforms and brokers</h2>
        </motion.div>
      </div>

      <motion.div
        className={styles.line}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ transformOrigin: 'left' }}
        variants={lineVariant}
      />

      <div className={styles.leftright}>
        <div className='container-xl'>
          <div className={styles.spacing}>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeInUp}
            >
              <span> Yume Prime </span> gives you global market access on MetaTrader 5, WebTrader, and mobile one login, transparent pricing, and the same execution
              standard across every asset class you trade.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}

