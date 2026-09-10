'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './tradeWinWork.module.scss';

const Coin = '/assets/images/coin-img.png';

const stepsData = [
    {
        number: "01",
        title: "Register",
        description: "Create your Yume Prime account with your email and basic details. Takes under two minutes."
    },
    {
        number: "02",
        title: "Trade eligible instruments",
        description: "Forex and CFD instruments qualify toward your lot volume."
    },
    {
        number: "03",
        title: "Close trades",
        description: "Only closed trades count toward your milestone total."
    },
    {
        number: "04",
        title: "Unlock your reward",
        description: "Hit a milestone, submit your claim, and receive your reward."
    }
];

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

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
};

const coinVariants = {
    hidden: { opacity: 0, scale: 0.92, y: 30 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
};

export default function TradeWinWork() {
    return (
        <div className={styles.tradeWinWork}>
            <div className="container-xl">
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={headerVariants}
                >
                    How it works
                </motion.h2>

                <motion.div
                    className={styles.grid}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={gridContainerVariants}
                >
                    {stepsData.map((step) => (
                        <motion.div
                            key={step.number}
                            className={styles.items}
                            variants={itemVariants}
                            whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
                        >
                            <h3>{step.number}</h3>
                            <div className={styles.line}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="63" viewBox="0 0 6 63" fill="none">
                                    <path opacity="0.2" d="M2.88672 62.8868L5.77347 60L2.88672 57.1133L-3.5286e-05 60L2.88672 62.8868ZM2.88672 0L2.38672 -2.18557e-08L2.38672 60L2.88672 60L3.38672 60L3.38672 2.18557e-08L2.88672 0Z" fill="#0B1638" />
                                </svg>
                            </div>
                            <h4>{step.title}</h4>
                            <p>{step.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className={styles.coin}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={coinVariants}
                >
                    <img src={Coin} alt="Coin" />
                </motion.div>
            </div>
        </div>
    );
}


