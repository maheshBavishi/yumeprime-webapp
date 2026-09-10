'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './platformBanner.module.scss';
import Button from '../button';

const defaultButtons = [
    { text: 'MetaTrader 5 (MT5)', lightButton: true },
    { text: 'WebTrader', fill: true },
    { text: 'Mobile App', lightButton: true },
];

export default function PlatformBanner({
    titleMain = 'Trade on',
    titleSpan = 'your terms.',
    description = 'One account. Every device. Full execution power wherever you are.',
    buttons = defaultButtons,
}) {
    return (
        <div className={styles.platformBanner}>
            <div className='container'>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h1>
                        {titleMain} {titleSpan && <span> {titleSpan} </span>}
                    </h1>
                    {description && <p>{description}</p>}
                    {buttons && buttons.length > 0 && (
                        <div className={styles.buttonAlignment}>
                            {buttons.map((btn, idx) => (
                                <Button
                                    key={idx}
                                    text={btn.text}
                                    fill={btn.fill}
                                    lightButton={btn.lightButton}
                                    secondaryBtn={btn.secondaryBtn}
                                    href={btn.href || btn.link}
                                />
                            ))}
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}

