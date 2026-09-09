'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './accountTypeBanner.module.scss';

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

export default function AccountTypeBanner() {
    return (
        <div className={styles.accountTypeBanner}>
            <motion.div
                className={styles.contetAlignment}
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.h1 variants={itemVariants}>
                    One standard of execution, three <span> ways to trade it. </span>
                </motion.h1>
                <motion.p variants={itemVariants}>
                    Every Yume Prime account runs on the same infrastructure and gives access to all six markets. The difference is in the pricing
                    model choose the one that matches your strategy and trading volume.
                </motion.p>
            </motion.div>
        </div>
    );
}

