'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './whyPartner.module.scss';
import MoneyIcon from '@/icons/moneyIcon';

const CoinImage = '/assets/images/coin-img.png';

const whyPartnerData = [
    {
        id: 1,
        text: 'Real-time tracking dashboard clicks, registrations, funded accounts, and earnings, all in one view',
    },
    {
        id: 2,
        text: 'No cap on referred clients or on total earnings',
    },
    {
        id: 3,
        text: 'Marketing materials and banners provided',
    },
    {
        id: 4,
        text: 'Dedicated partnerships support',
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

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

export default function WhyPartnerindex() {
    return (
        <div className={styles.whyPartner}>
            <div className='container-xl'>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    Why partner with Yume Prime
                </motion.h2>

                <motion.img
                    src={CoinImage}
                    alt='CoinImage'
                    initial={{ opacity: 0, scale: 0.96, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                />

                <motion.div
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {whyPartnerData.map((item) => (
                        <motion.div
                            key={item.id}
                            className={styles.items}
                            variants={itemVariants}
                            whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
                        >
                            <div className={styles.box}>
                                <MoneyIcon />
                                <p>{item.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

