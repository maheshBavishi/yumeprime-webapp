'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './companyHero.module.scss';

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

export default function CompanyHero() {
    return (
        <div className={styles.companyHero}>
            <motion.div
                className={styles.content}
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.h2 variants={itemVariants}>
                    Your dream,
                    executed with
                    <span> prime precision. </span>
                </motion.h2>
                <motion.p variants={itemVariants}>
                    Yume Prime exists to close the distance between
                    a trader’s vision and its execution.
                </motion.p>
            </motion.div>
        </div>
    );
}

