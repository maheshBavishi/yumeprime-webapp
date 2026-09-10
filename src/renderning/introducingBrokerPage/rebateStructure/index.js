'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './rebateStructure.module.scss';
import CalculatorIcon from '@/icons/calculatorIcon';

const Rebate = '/assets/images/rebate-img.png';

const rebateCards = [
    {
        id: 1,
        accountType: 'Standard',
        commission: '[Spread markup]',
        rebateShare: '80%',
        image: Rebate,
    },
    {
        id: 2,
        accountType: 'Plus',
        commission: '[$3]/lot/side',
        rebateShare: '80%',
        image: Rebate,
    },
    {
        id: 3,
        accountType: 'Pro',
        commission: '[$3.5]/lot/side',
        rebateShare: '80%',
        image: Rebate,
    },
];

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

const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

export default function RebateStructure() {
    return (
        <div className={styles.rebateStructure}>
            <div className='container-xl'>
                <div className={styles.title}>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Rebate structure
                    </motion.h2>
                </div>

                <motion.div
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {rebateCards.map((card) => (
                        <motion.div
                            key={card.id}
                            className={styles.items}
                            variants={cardVariants}
                            whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
                        >
                            <div className={styles.imageBox}>
                                <img src={card.image} alt={card.accountType} />
                            </div>

                            <div className={styles.details}>
                                <div className={styles.text}>
                                    <p>CLIENT ACCOUNT TYPE</p>
                                    <span>{card.accountType}</span>
                                </div>
                                <div className={styles.text}>
                                    <p>COMMISSION GENERATED</p>
                                    <span>{card.commission}</span>
                                </div>
                                <div className={styles.text}>
                                    <p>YOUR REBATE SHARE (UP TO)</p>
                                    <span>{card.rebateShare}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className={styles.noticeBar}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <CalculatorIcon />
                    <p>
                        Rebates are calculated per closed lot and credited to your IB wallet in real time, visible on your partner dashboard at all times.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}

