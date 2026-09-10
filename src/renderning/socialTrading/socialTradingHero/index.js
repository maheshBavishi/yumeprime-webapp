'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './socialTradingHero.module.scss';

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

export default function SocialTradingHero({ heroData }) {
    const {
        titleLine1 = "FOLLOW THE",
        titleLine2 = "STRATEGIES",
        titleSpan = "THAT WORK.",
        description = "Copy the trades of experienced strategy providers automatically, in real time, proportional to your account size. No manual execution required."
    } = heroData || {};

    return (
        <div className={styles.socialTradingHero}>
            <motion.div
                className={styles.sectionAlignment}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
            >
                <motion.h1 variants={fadeInUp}>
                    {titleLine1} <br /> {titleLine2} <span> {titleSpan} </span>
                </motion.h1>
                <motion.p variants={fadeInUp}>
                    {description}
                </motion.p>
            </motion.div>
        </div>
    );
}


