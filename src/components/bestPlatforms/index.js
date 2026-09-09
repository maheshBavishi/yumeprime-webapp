'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './bestPlatforms.module.scss';

const defaultTradeForexImage = '/assets/images/trade-forx.png';

const defaultFeatures = [
    "Advanced charting tools and built-in technical indicators",
    "One-click execution and multiple order types (Market, Limit, Stop)",
    "Automated trading via Expert Advisors on MT5",
    "Browser-based WebTrader no download required",
    "Full mobile trading on iOS and Android",
];

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

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.05,
        },
    },
};

const featureVariants = {
    hidden: { opacity: 0, x: -25 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: cubicEase,
        },
    },
};

const imageVariant = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.9,
            ease: cubicEase,
            delay: 0.2,
        },
    },
};

export default function BestPlatforms({
    title = "Best Platforms to Trade Forex",
    description = "Trade Forex on MT5, WebTrader, and the Yume Prime mobile app with the same pricing and execution standard across every device.",
    features = defaultFeatures,
    image = defaultTradeForexImage,
    titleMaxWidth,
    descriptionMaxWidth,
}) {
    return (
        <div className={styles.bestPlatforms}>
            <div className='container-xl'>
                <motion.div
                    className={styles.sectionHeader}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                >
                    <motion.h3
                        variants={fadeInUp}
                        style={titleMaxWidth ? { maxWidth: titleMaxWidth } : undefined}
                    >
                        {title}
                    </motion.h3>
                    <motion.p
                        variants={fadeInUp}
                        style={descriptionMaxWidth ? { maxWidth: descriptionMaxWidth } : undefined}
                    >
                        {description}
                    </motion.p>
                </motion.div>

                <div className={styles.grid}>
                    <motion.div
                        className={styles.items}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                    >
                        {features.map((item, index) => (
                            <motion.div
                                key={index}
                                className={styles.text}
                                variants={featureVariants}
                                whileHover={{ x: 6, transition: { duration: 0.2, ease: 'easeOut' } }}
                            >
                                <span>{item}</span>
                            </motion.div>
                        ))}
                    </motion.div>

                    <div className={styles.items}>
                        {image && (
                            <motion.img
                                src={image}
                                alt={title}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={imageVariant}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

