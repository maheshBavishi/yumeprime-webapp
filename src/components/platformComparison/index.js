'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './platformComparison.module.scss';

const defaultHeaders = ['Feature', 'MT5', 'WebTrader', 'Mobile App'];

const defaultRows = [
    { feature: 'Advanced charting', mt5: 'Yes', webTrader: 'Yes', mobileApp: 'Yes' },
    { feature: 'Algorithmic trading (EAs)', mt5: 'Yes', webTrader: 'No', mobileApp: 'No' },
    { feature: 'One-click trading', mt5: 'Yes', webTrader: 'Yes', mobileApp: 'Yes' },
    { feature: 'Biometric login', mt5: '—', webTrader: '—', mobileApp: 'Yes' },
    { feature: 'No download required', mt5: 'No', webTrader: 'Yes', mobileApp: 'No' },
];

const tableWrapperVariants = {
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

const tbodyVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
        },
    },
};

const rowVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

export default function PlatformComparison({
    title = 'Platform comparison',
    headers = defaultHeaders,
    rows = defaultRows,
}) {
    return (
        <div className={styles.platformComparison}>
            <div className='container-xl'>
                <motion.h2
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    {title}
                </motion.h2>

                <motion.div
                    className={styles.tableWrapper}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={tableWrapperVariants}
                >
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                {headers.map((head, idx) => (
                                    <th key={idx}>{head}</th>
                                ))}
                            </tr>
                        </thead>
                        <motion.tbody
                            variants={tbodyVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-50px' }}
                        >
                            {rows.map((row, rIdx) => {
                                const cells = Array.isArray(row)
                                    ? row
                                    : [row.feature, row.mt5, row.webTrader, row.mobileApp];
                                return (
                                    <motion.tr key={rIdx} variants={rowVariants}>
                                        {cells.map((cell, cIdx) => (
                                            <td key={cIdx}>{cell}</td>
                                        ))}
                                    </motion.tr>
                                );
                            })}
                        </motion.tbody>
                    </table>
                </motion.div>
            </div>
        </div>
    );
}
