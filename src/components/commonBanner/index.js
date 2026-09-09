'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './commonBanner.module.scss';
import Button from '../button';

const defaultBannerImage = '/assets/images/forex-img.png';

const cubicEase = [0.22, 1, 0.36, 1];

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
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.9,
            ease: cubicEase,
        },
    },
};

const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: cubicEase,
        },
    },
};

export default function CommonBanner({
    title = (
        <>
            Forex <br /> Trading with <br /> <span> Yume Prime. </span>
        </>
    ),
    description = "55+ currency pairs. Transparent pricing. The market never closes neither do we.",
    image = defaultBannerImage,
    primaryBtnText = "Start Trading",
    secondaryBtnText = "Try Demo Free",
    onPrimaryClick,
    onSecondaryClick,
}) {
    return (
        <div className={styles.commonBanner}>
            <motion.div
                className={styles.contentAlignment}
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.h1 variants={titleVariants}>
                    {title}
                </motion.h1>
                <motion.div variants={contentVariants}>
                    <p>{description}</p>
                    <div className={styles.buttonAlignment}>
                        {primaryBtnText && (
                            <Button text={primaryBtnText} onClick={onPrimaryClick} />
                        )}
                        {secondaryBtnText && (
                            <Button text={secondaryBtnText} outline onClick={onSecondaryClick} />
                        )}
                    </div>
                </motion.div>
            </motion.div>
            <div className={styles.imageAlignment}>
                <motion.img
                    src={image}
                    alt='Banner'
                    initial={{ opacity: 0, scale: 0.92, y: 30 }}
                    animate={{
                        opacity: 1,
                        scale: [1, 1.03, 1],
                        y: [0, -14, 0],
                    }}
                    transition={{
                        opacity: { duration: 0.9, ease: cubicEase },
                        scale: {
                            duration: 4,
                            repeat: Infinity,
                            repeatType: 'mirror',
                            ease: 'easeInOut',
                        },
                        y: {
                            duration: 4,
                            repeat: Infinity,
                            repeatType: 'mirror',
                            ease: 'easeInOut',
                        },
                    }}
                />
            </div>
        </div>
    );
}



