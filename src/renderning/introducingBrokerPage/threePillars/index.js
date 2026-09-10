'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './threePillars.module.scss';

const Rebate = '/assets/images/rebate.png';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
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

const pillarsData = [
    {
        id: 1,
        title: '80% Rebate Sharing',
        image: Rebate,
        description: 'Earn up to 80% of the commission Yume Prime generates from your referred clients’ trading activity, across all account types.',
    },
    {
        id: 2,
        title: 'Instant IB Account Generation',
        image: Rebate,
        description: 'Your IB account and unique referral link are generated immediately upon approval no waiting period to start referring.',
    },
    {
        id: 3,
        title: 'Instant Withdrawal',
        image: Rebate,
        description: 'Withdraw your rebate earnings the moment they’re credited, with no minimum holding period and no lock-in.',
    },
];

export default function ThreePillars() {
    return (
        <div className={styles.threePillars}>
            <div className='container-xl'>
                <div className={styles.sectionAlignment}>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Three pillars
                    </motion.h2>

                    <motion.div
                        className={styles.grid}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {pillarsData.map((pillar) => (
                            <motion.div
                                key={pillar.id}
                                className={styles.items}
                                variants={itemVariants}
                                whileHover={{ y: -6, transition: { duration: 0.3, ease: 'easeOut' } }}
                            >
                                <h3>{pillar.title}</h3>
                                <img src={pillar.image} alt={pillar.title} />
                                <span>{pillar.description}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

