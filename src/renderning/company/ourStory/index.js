'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './ourStory.module.scss';

const StoryVec = '/assets/images/story-vec.svg';

const fadeInUp = {
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

const lineVariant = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
        opacity: 1,
        scaleX: 1,
        transition: {
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
};

export default function OurStory() {
    return (
        <div className={styles.ourStory}>
            <div className='container-xl'>
                <motion.div
                    className={styles.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    variants={fadeInUp}
                >
                    <h2>Our Story</h2>
                </motion.div>
            </div>

            <motion.div
                className={styles.line}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                style={{ transformOrigin: 'left' }}
                variants={lineVariant}
            />

            <div className='container-xl'>
                <div className={styles.contentAlignment}>
                    <motion.div
                        className={styles.grid}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                        variants={staggerContainer}
                    >
                        <motion.h3 variants={fadeInUp}>
                            “Yume” (夢)
                        </motion.h3>
                        <motion.p variants={fadeInUp}>
                            is <span> Japanese </span>  for dream not the kind you wake from, but the kind you work toward. We named this brokerage after that idea because every trader who opens an account here is turning a view on the market into a position, and our job is to make that happen with as little
                            friction, cost, and uncertainty as possible.
                        </motion.p>
                    </motion.div>

                    <div className={styles.liststyle}>
                        <motion.ul
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-60px' }}
                            variants={staggerContainer}
                        >
                            <motion.li variants={fadeInUp}>
                                That’s why we publish our spreads and commissions in full rather than advertising a best-case number, hold client funds separately from company capital, and build support
                                and account management for traders who plan to stay not just sign up.
                            </motion.li>
                            <motion.li variants={fadeInUp}>
                                We’re a multi-asset broker offering <span> forex, metals, indices, crypto CFDs, commodities, and stock CFDs </span> through MT5, WebTrader, and
                                our mobile app, serving traders across multiple countries.
                            </motion.li>
                        </motion.ul>
                    </div>
                </div>
            </div>

            <motion.div
                className={styles.image}
                initial={{ opacity: 0, x: 40, y: 40 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
                <img src={StoryVec} alt='StoryVec' />
            </motion.div>
        </div>
    );
}

