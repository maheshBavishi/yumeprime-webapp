'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './blogbanner.module.scss';
import Button from '@/components/button';

const categories = [
    'All',
    'Market Analysis',
    'Education',
    'Company News',
    'Trading Strategies',
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const buttonVariants = {
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

export default function Blogbanner() {
    return (
        <div className={styles.blogbanner}>
            <div className='container-xl'>
                <div className={styles.sectionAlignment}>
                    <div className={styles.header}>
                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                        >
                            yume prime <span> insights. </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                        >
                            Markets move on information. Here's ours daily analysis, plain-language guides, and the trading strategies our team actually uses.
                        </motion.p>
                    </div>

                    <motion.div
                        className={styles.buttonAlignment}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {categories.map((cat, index) => (
                            <motion.div
                                key={index}
                                variants={buttonVariants}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.96 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Button text={cat} lightButton />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

