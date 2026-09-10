'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './socialTradingDetails.module.scss';
import FlashIcon from '@/icons/flashIcon';
import Button from '@/components/button';

const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
};

const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
};

export default function SocialTradingDetails({ detailsData }) {
    const {
        followersSection = {
            titleLine1: "How it works",
            titleLine2: "followers",
            items: [
                {
                    id: 1,
                    text: "Browse the leaderboard of ranked strategy providers, filtered by performance, risk score, and asset class."
                },
                {
                    id: 2,
                    text: "Allocate an amount to copy and set your risk parameters."
                },
                {
                    id: 3,
                    text: "Trades are copied automatically and proportionally to your account you retain full control to stop copying at any time."
                }
            ]
        },
        providersSection = {
            titleLine1: "How it works",
            titleLine2: "Strategy Providers",
            items: [
                {
                    id: 1,
                    text: "Transparent performance history for every strategy provider"
                },
                {
                    id: 2,
                    text: "Set your own risk level per strategy you follow"
                },
                {
                    id: 3,
                    text: "Stop copying or adjust allocation at any time"
                }
            ]
        },
        buttonText = "Explore Social Trading"
    } = detailsData || {};

    return (
        <div className={styles.socialTradingDetails}>
            {/* Followers Section */}
            <div className="container-xl">
                <div className={styles.leftright}>
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={headerVariants}
                    >
                        {followersSection.titleLine1} <br /> {followersSection.titleLine2}
                    </motion.h2>

                    <motion.div
                        className={styles.grid}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={gridContainerVariants}
                    >
                        {followersSection.items?.map((item) => (
                            <motion.div
                                key={item.id}
                                className={styles.items}
                                variants={cardVariants}
                                whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
                            >
                                <div className={styles.icon}>
                                    <FlashIcon />
                                </div>
                                <div className={styles.line}></div>
                                <p>{item.text}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <div className={styles.fullline}></div>

            {/* Strategy Providers Section */}
            <div className="container-xl">
                <div className={styles.leftright}>
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={headerVariants}
                    >
                        {providersSection.titleLine1} <br /> {providersSection.titleLine2}
                    </motion.h2>

                    <motion.div
                        className={styles.grid}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={gridContainerVariants}
                    >
                        {providersSection.items?.map((item) => (
                            <motion.div
                                key={item.id}
                                className={styles.items}
                                variants={cardVariants}
                                whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
                            >
                                <div className={styles.icon}>
                                    <FlashIcon />
                                </div>
                                <div className={styles.line}></div>
                                <p>{item.text}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <div className={styles.fullline}></div>

            {/* CTA Button Section */}
            <div className="container-xl">
                <div className={styles.leftright}>
                    <motion.div
                        className={styles.center}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <Button text={buttonText} />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}


