'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './herobanner.module.scss';
import Button from '@/components/button';

const CryptoIcon = '/assets/images/crypto.png';

export default function Herobanner() {
  return (
    <div className={styles.herobanner}>
      {/* Animated Background Layer */}
      <div
        className={styles.bgImage} ></div>

      {/* Hero Bottom Content with Staggered Entrance */}
      <div className={styles.bottomContent}>
        <div className={styles.leftSpacing}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <h1>
              Your dream, <br />
              executed with <br />
              <span>prime precision.</span>
            </h1>
          </motion.div>

          <motion.div
            className={styles.contentRight}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          >
            <p>
              Yume Prime is a global forex and CFD broker for serious traders. Trade forex, metals,
              indices, commodities, and stock CFDs with transparent pricing.
            </p>
            <div className={styles.buttonAlignment}>
              <Button text="Open Live Account" />
              <Button text="Open a Free Demo Account" outline />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Side Floating Animated Crypto Icon */}
      <div className={styles.rightIcon}>
        <motion.div

          initial={{ opacity: 0, x: 80, scale: 0.85 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          <motion.div
            animate={{
              y: [-12, 12, -12],
              rotate: [-3, 3, -3],
              filter: [
                'drop-shadow(0 15px 30px rgba(197, 158, 99, 0.25))',
                'drop-shadow(0 25px 45px rgba(227, 208, 169, 0.45))',
                'drop-shadow(0 15px 30px rgba(197, 158, 99, 0.25))',
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.08,
              rotate: 6,
              filter: 'drop-shadow(0 30px 50px rgba(227, 208, 169, 0.65))',
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.96 }}
          >
            <img src={CryptoIcon} alt='CryptoIcon' />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
