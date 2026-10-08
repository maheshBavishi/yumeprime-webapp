'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './forexBanner.module.scss';
import Button from '@/components/button';

const ForexCoin = '/assets/images/forex-coin.png';

// Left content stagger container
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

// Individual left content items
const itemVariants = {
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

// Infinite float animation for the right coin image
const floatVariants = {
    animate: {
        y: [0, -18, 0],
        rotate: [0, 1.5, -1.5, 0],
        transition: {
            y: {
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
            },
            rotate: {
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
            },
        },
    },
};

// Glow pulse for image wrapper
const glowVariants = {
    animate: {
        scale: [1, 1.015, 1],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
};

export default function ForexBanner() {
    return (
        <div className={styles.forexsection}>
            <div className={styles.contentAlignment}>
                {/* Left: staggered entrance */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.h1 variants={itemVariants}>
                        Trade with Yume Prime.
                    </motion.h1>

                    <motion.p variants={itemVariants}>
                        Forex, Metals, Indices, Commodities and
                        stock CFD
                    </motion.p>

                    <motion.div className={styles.buttonAlignment} variants={itemVariants}>
                        <Button text="Start Trading" />
                        <Button text="Start Trading" fill />
                    </motion.div>
                </motion.div>

                {/* Right: infinite float + glow pulse */}
                <motion.div
                    className={styles.img}
                    variants={glowVariants}
                    animate="animate"
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.img
                        src={ForexCoin}
                        alt='ForexCoin'
                        variants={floatVariants}
                        animate="animate"
                    />
                </motion.div>
            </div>
        </div>
    );
}
