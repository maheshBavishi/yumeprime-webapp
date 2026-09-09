'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './tradeSection.module.scss';
import Button from '../button';
import BitCoinIcon from '@/icons/bitCoinIcon';
import SystemIcon from '@/icons/systemIcon';
import AutomatedIcon from '@/icons/automatedIcon';
import HedgingIcon from '@/icons/hedgingIcon';

const MetaTrader = '/assets/images/metatrader.png';

const defaultFeatures = [
    {
        icon: <BitCoinIcon />,
        text: '21 analytical objects, 38 built-in indicators, 9 timeframes',
    },
    {
        icon: <SystemIcon />,
        text: 'One-click trading and full order-book depth on supported instruments',
    },
    {
        icon: <HedgingIcon />,
        text: 'Hedging and netting account modes available',
    },
    {
        icon: <AutomatedIcon />,
        text: 'Automated trading support via Expert Advisors (EAs)',
    },
    {
        icon: <SystemIcon />,
        text: 'Available on Windows, macOS, iOS, Android, and Web no download required for WebTrader access',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

const featureVariants = {
    hidden: { opacity: 0, x: -25 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

export default function TradeSection({
    title = 'MetaTrader 5 (MT5)',
    description = 'The industry-standard platform, tuned to Yume Prime’s low-latency infrastructure. Advanced charting, algorithmic trading via Expert Advisors, and access to every instrument across all six markets from a single interface.',
    buttonText = 'Download MT5',
    features = defaultFeatures,
    image = MetaTrader,
    imageAlt = 'MetaTrader',
}) {
    return (
        <div className={styles.tradeSection}>
            <div className='container-xl'>
                <div className={styles.sectionHeader}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h2>{title}</h2>
                        {description && <p>{description}</p>}
                    </motion.div>
                    {buttonText && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <Button text={buttonText} fill />
                        </motion.div>
                    )}
                </div>

                <div className={styles.grid}>
                    <motion.div
                        className={styles.items}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-50px' }}
                    >
                        {features.map((item, idx) => (
                            <motion.div
                                key={idx}
                                className={styles.content}
                                variants={featureVariants}
                                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                            >
                                {item.icon}
                                <span>{item.text}</span>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className={styles.items}
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <motion.img
                            src={image}
                            alt={imageAlt}
                            animate={{ y: [0, -8, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                repeatType: 'reverse',
                                ease: 'easeInOut',
                            }}
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
