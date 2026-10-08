'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './herobanner.module.scss';
import Button from '@/components/button';
import PipIcon from '@/icons/pipIcon';
import DepositIcon from '@/icons/depositIcon';
import LeverageIcon from '@/icons/leverageIcon';
import SpeedIcon from '@/icons/speedIcon';
import GiftIcon from '@/icons/giftIcon';
import FundingIcon from '@/icons/fundingIcon';
import TradingIcon from '@/icons/tradingIcon';
import SafeIcon from '@/icons/safeIcon';

const Hero = '/assets/video/hero.mp4';

const marqueeItems = [
  {
    icon: PipIcon,
    value: '0.0 Pips',
    label: 'Spread From',
  },
  {
    icon: DepositIcon,
    value: '$50',
    label: 'Minimum Deposit',
  },
  {
    icon: LeverageIcon,
    value: '1:1000',
    label: 'Max Leverage',
  },
  {
    icon: SpeedIcon,
    value: '<30MS',
    label: 'Execution Speed',
  },
  {
    icon: GiftIcon,
    value: 'Free',
    label: 'Funding Fee',
  },
  {
    icon: FundingIcon,
    value: '+10',
    label: 'Funding Options',
  },
  {
    icon: TradingIcon,
    value: 'Hundreds of',
    label: 'Trading Instruments',
  },
  {
    icon: SafeIcon,
    value: '100%',
    label: 'Segregated Client Funds',
  },
];

const titleLines = [
  'Your dream,',
  'executed with',
  'prime precision.',
];

const titleContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const titleLineVariant = {
  hidden: { y: '110%', opacity: 0 },
  visible: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const subTextContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.45,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Herobanner() {
  return (
    <div className={styles.herobanner}>
      <motion.video
        src={Hero}
        autoPlay
        loop
        muted
        playsInline
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />
      <motion.div
        className={styles.right}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.65, 0.4],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <div className={styles.contentAlignment}>
        <div className={styles.spacing}>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={titleContainer}
          >
            {titleLines.map((line, index) => (
              <span key={index} style={{ display: 'block', overflow: 'hidden' }}>
                <motion.span
                  style={{ display: 'block' }}
                  variants={titleLineVariant}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </motion.h1>
        </div>
      </div>
      <motion.div
        className={styles.subText}
        initial="hidden"
        animate="visible"
        variants={subTextContainer}
      >
        <div className={styles.subTextSpacing}>
          <motion.p variants={fadeInUp}>
            Yume Prime is a global forex and CFD broker for serious traders. Trade
            forex, metals, indices, commodities, and stock CFDs with transparent pricing.
          </motion.p>
          <motion.div className={styles.bottomButton} variants={fadeInUp}>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button text="Open Live Account" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button text="Open a Free Demo Account" textwhite outline />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className={styles.bottommarquee}
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.9,
          delay: 0.5,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <div className={styles.bottommarqueeSpacing}>
          {[0, 1, 2].map((trackIndex) => (
            <motion.div
              key={trackIndex}
              className={styles.marqueeGroup}
              animate={{ x: ['0%', '-100%'] }}
              transition={{
                ease: 'linear',
                duration: 35,
                repeat: Infinity,
              }}
            >
              {marqueeItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    className={styles.iconTextAlignment}
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  >
                    <IconComponent />
                    <div>
                      <p>{item.value}</p>
                      <span>{item.label}</span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
