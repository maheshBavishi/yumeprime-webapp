'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './instrumentsPricing.module.scss';

const defaultHeaders = [
    'Instrument',
    'Spread From',
    'Typical Leverage',
    'Contract Size',
];

const defaultRows = [
    [
        'Gold (XAU/USD)',
        '[0.12] pts',
        '[0.018] pts',
        '[100 oz / lot]',
    ],
    [
        'Silver (XAG/USD)',
        '[0.018] pts',
        'Up to [1:200]',
        '5,000 oz / lot',
    ],
];

const defaultNote = (
    <>
        <span>Trading hours:</span> broadly aligned with global forex sessions, Monday–Friday (server time [GMT+X]).
    </>
);

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

const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

const tableVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

const rowVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

const noteVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: 0.3,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

export default function InstrumentsPricing({
    title = "Instruments & Pricing",
    headers = defaultHeaders,
    rows = defaultRows,
    noteText = defaultNote,
}) {
    return (
        <div className={styles.instrumentsPricing}>
            <div className="container-xl">
                {title && (
                    <motion.div
                        className={styles.title}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-50px' }}
                        variants={titleVariants}
                    >
                        {typeof title === 'string' ? <h2>{title}</h2> : title}
                    </motion.div>
                )}

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
                                    : [row.instrument, row.spread, row.leverage, row.contractSize];
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

                {noteText && (
                    <motion.div
                        className={styles.tradingHoursNote}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-50px' }}
                        variants={noteVariants}
                    >
                        <div className={styles.checkCircle}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                                <circle opacity="0.15" cx="22.5" cy="22.5" r="18.75" stroke="#0B1638" stroke-width="1.3" />
                                <path d="M17.8125 17.8125L24.3748 24.3743M30 15L20.625 24.375" stroke="#0B1638" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <p>{noteText}</p>
                    </motion.div>
                )}
            </div>
        </div>
    );
}

