'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Button from '../button';
import styles from './whatIsTrading.module.scss';

const defaultTradingVec = '/assets/images/trading-vec.png';

// Easing for modern smooth feel
const easeCurve = [0.16, 1, 0.3, 1];

// Stagger container for left items
const leftContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.16,
            delayChildren: 0.1,
        },
    },
};

// Item fade & slide-up animation
const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: easeCurve,
        },
    },
};

// Right image container entrance
const rightWrapperVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.9,
            ease: easeCurve,
            delay: 0.15,
        },
    },
};

// Continuous floating / infinite levitation animation
const infiniteFloatVariants = {
    animate: {
        y: [0, -18, 0],
        rotate: [0, 1.2, -1.2, 0],
        transition: {
            y: {
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
            },
            rotate: {
                duration: 6.5,
                repeat: Infinity,
                ease: 'easeInOut',
            },
        },
    },
};

export default function WhatIsTrading({
    title = (
        <>
            What is <br /> Forex trading?
        </>
    ),
    description = 'Forex is the simultaneous exchange of one currency for another, with the aim of profiting from changes in the exchange rate. Pairs are quoted as two currencies (e.g. EUR/USD), with the first being the base currency and the second the quote currency. Forex trades 24 hours a day, Monday to Friday, across overlapping global sessions.',
    image = defaultTradingVec,
    primaryBtnText = 'Learn More',
    secondaryBtnText = 'Watch Video',
    onPrimaryClick,
    onSecondaryClick,
    primaryBtnHref,
    secondaryBtnHref,
}) {
    return (
        <div className={styles.whatIsTrading}>
            <div className='container-xl'>
                <div className={styles.grid}>
                    {/* Left content with staggered entrance animation */}
                    <motion.div
                        className={styles.items}
                        variants={leftContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.25 }}
                    >
                        <div>
                            <motion.h2 variants={itemVariants}>
                                {title}
                            </motion.h2>
                        </div>
                        <div>
                            <motion.p variants={itemVariants}>
                                {description}
                            </motion.p>
                            <motion.div
                                className={styles.buttonAlignment}
                                variants={itemVariants}
                            >
                                {primaryBtnText && (
                                    <Button
                                        text={primaryBtnText}
                                        onClick={onPrimaryClick}
                                        href={primaryBtnHref}
                                    />
                                )}
                                {secondaryBtnText && (
                                    <Button
                                        text={secondaryBtnText}
                                        fill
                                        onClick={onSecondaryClick}
                                        href={secondaryBtnHref}
                                    />
                                )}
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right side item with entrance and infinite float animation */}
                    <motion.div
                        className={styles.items}
                        variants={rightWrapperVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.25 }}
                    >
                        <div className={styles.img}>
                            <motion.img
                                src={image || defaultTradingVec}
                                alt="TradingVec"
                                variants={infiniteFloatVariants}
                                animate="animate"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
