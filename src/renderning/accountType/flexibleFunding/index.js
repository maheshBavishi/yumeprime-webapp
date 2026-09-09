'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './flexibleFunding.module.scss';

const defaultHeaders = [
    'Method',
    'Processing Time',
    'Fee',
];

const defaultRows = [
    [
        'Bank Transfer',
        '[1–2 business days]',
        '[None / bank fees may apply]',
    ],
    [
        'Debit / Credit Card',
        'Instant',
        'None',
    ],
    [
        'E-Wallets (Skrill, Neteller, etc.)',
        'Instant',
        'None',
    ],
    [
        'Local Payment Rails',
        '[Same day]',
        'None',
    ],
];

// Motion animation variants
const tableVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.15,
        },
    },
};

const rowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

const noteVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

export default function FlexibleFunding({ headers = defaultHeaders, rows = defaultRows }) {
    return (
        <div className={styles.flexibleFunding}>
            <div className='container-xl'>
                <motion.h2
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    Fast, flexible funding.
                </motion.h2>
                <motion.div
                    className={styles.tableWrapper}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={tableVariants}
                >
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                {headers.map((header, idx) => (
                                    <th key={idx}>{header}</th>
                                ))}
                            </tr>
                        </thead>
                        <motion.tbody
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-50px' }}
                        >
                            {rows.map((row, index) => {
                                const rowData = Array.isArray(row)
                                    ? row
                                    : [row.method || row.instrument, row.time || row.spread, row.fee || row.leverage];
                                return (
                                    <motion.tr key={index} variants={rowVariants}>
                                        {rowData.map((cell, cIdx) => (
                                            <td key={cIdx}>{cell}</td>
                                        ))}
                                    </motion.tr>
                                );
                            })}
                        </motion.tbody>
                    </table>
                </motion.div>

                <motion.div
                    className={styles.tradingHoursNote}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={noteVariants}
                >
                    <div className={styles.checkCircle}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                            <circle opacity="0.15" cx="22.5" cy="22.5" r="18.75" stroke="#0B1638" strokeWidth="1.3" />
                            <path d="M17.8125 17.8125L24.3748 24.3743M30 15L20.625 24.375" stroke="#0B1638" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <p>Withdrawals are processed within [X] business hours back to the original funding source.</p>
                </motion.div>
            </div>
        </div>
    );
}
