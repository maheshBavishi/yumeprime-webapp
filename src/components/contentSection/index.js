'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './contentSection.module.scss';

const cubicEase = [0.22, 1, 0.36, 1];

const fadeInUp = {
    hidden: { opacity: 0, y: 35 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: cubicEase,
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
            ease: cubicEase,
        },
    },
};

export default function ContentSection({
    title = (
        <>
            <span> Forex </span> TRADING OVERVIEW
        </>
    ),
    description = (
        <>
            The <span> forex market </span> is the world’s most liquid financial market, trading trillions of dollars daily across overlapping global sessions. Yume Prime routes orders through a direct execution model to deep liquidity, so you trade the market price not an adjusted one.
        </>
    ),
}) {
    return (
        <div className={styles.contentSection}>
            <div className='container-xl'>
                <motion.div
                    className={styles.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUp}
                >
                    <h2>{title}</h2>
                </motion.div>
            </div>

            <motion.div
                className={styles.line}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                style={{ transformOrigin: 'left' }}
                variants={lineVariant}
            />

            <div className='container-xl'>
                <div className={styles.contentAlignment}>
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                    >
                        {description}
                    </motion.p>
                </div>
            </div>
        </div>
    );
}

