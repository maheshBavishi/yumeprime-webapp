'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './accountTypePlan.module.scss';

const plansData = [
    {
        id: 'standard',
        title: 'Standard',
        description: "Built for traders starting out. Simple spread-only pricing with no separate commission the easiest way to understand exactly what you're paying.",
        specs: [
            { label: 'MINIMUM DEPOSIT', value: '[$50]' },
            { label: 'SPREADS FROM', value: '[1.2] pips' },
            { label: 'COMMISSION', value: 'None' },
            { label: 'LEVERAGE', value: 'Up to [1:1000]' },
            { label: 'EXECUTION', value: 'Market execution' },
            { label: 'BEST FOR', value: 'New traders, swing traders, position traders' },
        ],
    },
    {
        id: 'plus',
        title: 'Plus',
        description: 'Our most-used account. Tighter spreads than Standard, with a modest transparent commission built for active traders who trade cost-efficiency alongside simplicity.',
        specs: [
            { label: 'MINIMUM DEPOSIT', value: '[$250]' },
            { label: 'SPREADS FROM', value: '[0.6] pips' },
            { label: 'COMMISSION', value: '[$3] per lot per side' },
            { label: 'LEVERAGE', value: 'Up to [1:500]' },
            { label: 'EXECUTION', value: 'STP, no dealing-desk intervention' },
            { label: 'BEST FOR', value: 'Active day traders, intermediate strategies' },
        ],
    },
    {
        id: 'pro',
        title: 'Pro Account',
        description: 'Raw, institutional-grade pricing for professionals and high-volume traders. The tightest spreads on the platform, with full order-book depth and priority execution.',
        specs: [
            { label: 'MINIMUM DEPOSIT', value: '[$1,000]' },
            { label: 'SPREADS FROM', value: '[0.0] pips (raw)' },
            { label: 'COMMISSION', value: '[$3.5] per lot per side' },
            { label: 'LEVERAGE', value: 'Up to [1:200]' },
            { label: 'EXECUTION', value: 'ECN, direct market access' },
            { label: 'BEST FOR', value: 'Scalpers, algorithmic traders, high-volume professionals' },
        ],
        badge: 'Dedicated relationship manager included',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.18,
            delayChildren: 0.1,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 45 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

export default function AccountTypePlan() {
    return (
        <section className={styles.accountTypePlan}>
            <div className='container-xl'>
                <motion.div
                    className={styles.planGrid}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={containerVariants}
                >
                    {plansData.map((plan) => (
                        <motion.div
                            key={plan.id}
                            className={styles.planCard}
                            variants={cardVariants}
                            whileHover={{
                                y: -6,
                                transition: { duration: 0.3, ease: 'easeOut' },
                            }}
                        >
                            <div>
                                <div className={styles.cardHeader}>
                                    <h2>{plan.title}</h2>
                                    <p>{plan.description}</p>
                                </div>

                                <div className={styles.divider} />

                                <div className={styles.specsList}>
                                    {plan.specs.map((spec, index) => (
                                        <div key={index} className={styles.specRow}>
                                            <span className={styles.label}>{spec.label}</span>
                                            <span className={styles.value}>{spec.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {plan.badge && (
                                <motion.div
                                    className={styles.badgeWrapper}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className={styles.badge}>
                                        {plan.badge}
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
