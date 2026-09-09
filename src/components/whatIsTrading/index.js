'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './whatIsTrading.module.scss';
import Button from '../button';

const defaultTradingImage = '/assets/images/forex-trading.png';
const cubicEase = [0.22, 1, 0.36, 1];

const fadeInUp = {
    hidden: { opacity: 0, y: 35 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: cubicEase,
        },
    },
};

const imageVariant = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.9,
            ease: cubicEase,
            delay: 0.15,
        },
    },
};

const lineVariant = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
        opacity: 1,
        scaleX: 1,
        transition: {
            duration: 0.9,
            ease: cubicEase,
        },
    },
};

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

export default function WhatIsTrading({
    title = "What is Forex trading?",
    image = defaultTradingImage,
    description = (
        <>
            Forex is the simultaneous exchange of one currency for another, with the
            aim of profiting from changes in the exchange rate. Pairs are quoted as two currencies
            <span>  (e.g. EUR/USD), </span> with the first being the base currency and the second the quote currency. Forex trades 24 hours a day, Monday
            to Friday, across overlapping global sessions.
        </>
    ),
    primaryBtnText = "Learn More",
    secondaryBtnText = "Watch Video",
    onPrimaryClick,
    onSecondaryClick,
    titleMaxWidth,
    imageMaxWidth,
}) {
    return (
        <div className={styles.whatIsTrading}>
            <div className='container-xl'>
                <motion.div
                    className={styles.contentGrid}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    <motion.h2
                        className={styles.maxwidth}
                        variants={fadeInUp}
                        style={titleMaxWidth ? { maxWidth: titleMaxWidth } : undefined}
                    >
                        {title}
                    </motion.h2>
                    {image && (
                        <motion.img
                            src={image}
                            alt='TradingImage'
                            className={styles.imgwidth}
                            variants={imageVariant}
                            style={imageMaxWidth ? { maxWidth: imageMaxWidth } : undefined}
                        />
                    )}
                </motion.div>
            </div>

            <motion.div
                className={styles.line}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                style={{ transformOrigin: 'left' }}
                variants={lineVariant}
            />

            <div className='container-xl'>
                <motion.div
                    className={styles.textAllContent}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    <motion.p variants={fadeInUp}>
                        {description}
                    </motion.p>
                    <motion.div className={styles.buttonAlignment} variants={fadeInUp}>
                        {primaryBtnText && (
                            <Button text={primaryBtnText} onClick={onPrimaryClick} />
                        )}
                        {secondaryBtnText && (
                            <Button text={secondaryBtnText} outline onClick={onSecondaryClick} />
                        )}
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                className={styles.line}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                style={{ transformOrigin: 'left' }}
                variants={lineVariant}
            />
        </div>
    );
}

