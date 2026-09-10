'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './programmeHighlights.module.scss';
import Arrow from '@/icons/arrow';
import Button from '@/components/button';

const Programme = '/assets/images/Programme.png';

const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
};

const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
};

const imageVariants = {
    hidden: { opacity: 0, x: 30, scale: 0.96 },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
};

export default function ProgrammeHighlights({ highlightsData }) {
    const {
        titleLine1 = "Programme",
        titleLine2 = "highlights",
        highlights = [
            {
                id: 1,
                title: "Volume-Based",
                spanText: "Rewards tied directly to lot volume, not deposit size"
            },
            {
                id: 2,
                title: "All Clients Eligible",
                spanText: "Open to both new and existing traders"
            },
            {
                id: 3,
                title: "No Limits",
                spanText: "Progress through every milestone with no cap"
            },
            {
                id: 4,
                title: "Closed Trades Only",
                spanText: "Volume counts from completed trades"
            },
            {
                id: 5,
                title: "Transparent Conditions",
                spanText: "Clear pricing, fast execution, no hidden qualifying rules"
            },
            {
                id: 6,
                title: "Performance Focused",
                spanText: "Built for active, high-volume traders"
            }
        ],
        buttonText = "Open Live Account"
    } = highlightsData || {};

    return (
        <div className={styles.programmeHighlights}>
            <div className="container-xl">
                <div className={styles.grid}>
                    <div className={styles.items}>
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={headerVariants}
                        >
                            {titleLine1} <br /> {titleLine2}
                        </motion.h2>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={listContainerVariants}
                        >
                            {highlights.map((item) => (
                                <motion.div
                                    key={item.id}
                                    className={styles.icongrid}
                                    variants={itemVariants}
                                >
                                    <Arrow />
                                    <p>
                                        {item.title} <span> {item.spanText} </span>
                                    </p>
                                </motion.div>
                            ))}

                            <motion.div
                                variants={itemVariants}
                                style={{ marginTop: '32px' }}
                            >
                                <Button text={buttonText} fill />
                            </motion.div>
                        </motion.div>
                    </div>

                    <motion.div
                        className={styles.items}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={imageVariants}
                    >
                        <img src={Programme} alt="Programme" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

