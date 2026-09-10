'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './introducingBrokerHero.module.scss';

export default function IntroducingBrokerHero() {
    return (
        <div className={styles.introducingBrokerHero}>
            <div className={styles.contentAlignment}>
                <motion.h1
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    Trade your way or let experience
                    <span> trade for you. </span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    Whether you want to follow experienced strategies or have your capital professionally managed, Yume
                    Prime’s Trading Solutions give you more ways to participate in the markets.
                </motion.p>
            </div>
        </div>
    );
}

