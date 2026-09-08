'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './regulatoryStatement.module.scss';
import Button from '@/components/button';

const Coins = '/assets/images/coin-line.png';

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

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function RegulatoryStatement() {
  return (
    <div className={styles.regulatoryStatement}>
      <motion.div
        className='container-xl'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={containerVariants}
      >
        <motion.h2 variants={fadeInUp}>
          Regulatory Statement
        </motion.h2>

        <motion.p variants={fadeInUp}>
          Yume Prime [is a trading name of / is operated by] [Legal Entity Name], [authorised and regulated
          by / operating under license from] [Regulator, License No. XXXXX].
        </motion.p>

        <motion.p variants={fadeInUp}>
          Client funds are held in segregated accounts, separate from company operating capital.
          [Finalise exact regulatory wording with your compliance team before publishing.]
        </motion.p>

        <motion.div className={styles.buttonCenter} variants={fadeInUp}>
          <Button text="Open an Account" />
        </motion.div>

        <motion.div className={styles.centerText} variants={fadeInUp}>
          <span>
            Compare Account Types
          </span>
          <div className={styles.line}></div>
          <span>
            Talk to Us
          </span>
        </motion.div>

        <motion.div className={styles.video} variants={imageVariants}>
          <img src={Coins} alt='Coins' />
        </motion.div>
      </motion.div>
    </div>
  );
}

