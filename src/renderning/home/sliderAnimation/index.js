'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './sliderAnimation.module.scss';
import RightIcon from '@/icons/rightIcon';

const sliderItems = [
    {
        boldText: "FAST ORDER",
        lightText: "EXECUTION",
        boldFirst: true,
    },
    {
        lightText: "MULTIPLE INSTRUMENTS",
        boldText: "ACROSS 6 MARKETS",
        boldFirst: false,
    },
    {
        boldText: "INSTANT",
        lightText: "DEPOSITS & WITHDRAWALS",
        boldFirst: true,
    },
    {
        boldText: "MULTI-ASSET",
        lightText: "ACCESS",
        boldFirst: true,
    },
    {
        boldText: "24/5",
        lightText: "HUMAN SUPPORT",
        boldFirst: true,
    },
    {
        lightText: "SPREADS",
        boldText: "FROM 0.0 PIPS",
        boldFirst: false,
    },
];

export default function SliderAnimation() {
    return (
        <div className={styles.sliderAnimation}>
            <div className={styles.marqueeTrack}>
                {[0, 1].map((trackIndex) => (
                    <motion.div
                        key={trackIndex}
                        className={styles.marqueeGroup}
                        animate={{ x: ['0%', '-100%'] }}
                        transition={{
                            ease: 'linear',
                            duration: 30,
                            repeat: Infinity,
                        }}
                    >
                        {sliderItems.map((item, index) => (
                            <div key={index} className={styles.dotIconText}>
                                <div className={styles.iconText}>
                                    <RightIcon />
                                    <p>
                                        {item.boldFirst ? (
                                            <>
                                                <strong>{item.boldText}</strong> <span>{item.lightText}</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>{item.lightText}</span> <strong>{item.boldText}</strong>
                                            </>
                                        )}
                                    </p>
                                </div>
                                <div className={styles.dot} />
                            </div>
                        ))}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
