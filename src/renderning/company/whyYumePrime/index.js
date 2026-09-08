'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './whyYumePrime.module.scss';

const Infrastructure = '/assets/icons/infrastructure.svg';
const Transparency = '/assets/icons/transparency.svg';
const Security = '/assets/icons/security.svg';
const Markets = '/assets/icons/markets.svg';
const Conditions = '/assets/icons/conditions.svg';
const Understanding = '/assets/icons/understanding.svg';
const Partnerships = '/assets/icons/partnerships.svg';

const whyYumePrimeData = [
  {
    counter: '01',
    title: 'Execution-first infrastructure',
    description: 'Built around speed and reliability, not marketing claims',
    icon: Infrastructure,
  },
  {
    counter: '02',
    title: 'Full pricing transparency',
    description: 'Published spreads and commissions across all three account types, no fine print that never applies in practice',
    icon: Transparency,

  },
  {
    counter: '03',
    title: 'Client fund security',
    description: 'Funds held in accounts segregated from company operating capital',
    icon: Security,

  },
  {
    counter: '04',
    title: 'One account, six markets',
    description: 'Forex, Metals, Indices, Crypto CFDs, Commodities, and Stock CFDs from a single login',
    icon: Markets,

  },
  {
    counter: '05',
    title: 'Trade anywhere, same conditions',
    description: 'MT5, WebTrader, and mobile app, all synced to one account',
    icon: Conditions,

  },
  {
    counter: '06',
    title: 'Global reach, regional understanding',
    description: 'Headquartered in St. Lucia, serving traders across multiple regions with support that understands local hours and needs',
    icon: Understanding,

  },
  {
    counter: '07',
    title: 'Built for the long trade',
    description: 'Support and partnerships structured for traders who stay, not just convert',
    icon: Partnerships,

  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export default function WhyYumePrime() {
  return (
    <div className={styles.whyYumePrime}>
      <div className='container-xl'>
        <motion.div
          className={styles.title}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInUp}
        >
          <h2>Why Yume Prime</h2>
        </motion.div>
        <motion.div
          className={styles.allBoxAlignment}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
        >
          {whyYumePrimeData.map((item) => (
            <motion.div
              key={item.counter}
              className={styles.box}
              variants={fadeInUp}
            >
              <div className={styles.counter}>{item.counter}</div>
              <div className={styles.line}></div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <div className={styles.icon}>
                <img src={item.icon} alt={item.icon} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

