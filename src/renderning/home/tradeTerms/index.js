'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './tradeTerms.module.scss';
import Button from '@/components/button';

const LaptopImage = '/assets/images/laptop.png';
const ForexImage = '/assets/images/forex.png';
const Metals = '/assets/images/Metals.png';
const Indices = '/assets/images/Indices.png';
const Crypto = '/assets/images/Crypto1.png';
const Commodities = '/assets/images/Commodities.png';
const Stock = '/assets/images/Stock.png';

const marketItems = [
    {
        id: 'forex',
        title: 'Forex',
        image: ForexImage,
        alt: 'Forex Trading',
    },
    {
        id: 'metals',
        title: 'Metals',
        image: Metals,
        alt: 'Metals Trading',
    },
    {
        id: 'indices',
        title: 'Indices',
        image: Indices,
        alt: 'Indices Trading',
    },
    {
        id: 'crypto',
        title: 'Crypto CFDs',
        image: Crypto,
        alt: 'Crypto CFDs',
    },
    {
        id: 'commodities',
        title: 'Commodities',
        image: Commodities,
        alt: 'Commodities Trading',
        isTransparent: true,
    },
    {
        id: 'stock',
        title: 'Stock CFDs',
        image: Stock,
        alt: 'Stock CFDs Trading',
    },
];

// Motion animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 35 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.15,
        },
    },
};

const cardVariant = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

export default function TradeTerms() {
    return (
        <section className={styles.tradeTerms}>
            <div className='container'>
                {/* Section Header */}
                <div className={styles.sectionHeader}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                        variants={staggerContainer}
                    >
                        <motion.h2 variants={fadeInUp}>
                            Trade on <br />
                            your terms
                        </motion.h2>
                        <motion.p variants={fadeInUp}>
                            Trade on MetaTrader 5, our browser-based WebTrader, or
                            the Yume Prime mobile app — one account, full functionality, wherever you are.
                        </motion.p>
                    </motion.div>
                    
                    <motion.div
                        className={styles.buttonWrapper}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Button text="Explore Trading Platforms" />
                    </motion.div>
                </div>

                {/* Laptop Showcase Image */}
                <motion.div
                    className={styles.image}
                    initial={{ opacity: 0, y: 60, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                >
                    <motion.div
                        className={styles.imageInner}
                        whileHover={{ scale: 1.015 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                    >
                        <img src={LaptopImage} alt='Trading Platforms on Laptop' />
                    </motion.div>
                </motion.div>

                {/* One Account. Six Markets Section */}
                <div className={styles.oneAccount}>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        One Account. Six Market.
                    </motion.h2>

                    <motion.div
                        className={styles.grid}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                        variants={staggerContainer}
                    >
                        {marketItems.map((item) => (
                            <motion.div
                                key={item.id}
                                className={`${styles.items} ${item.isTransparent ? styles.transparentItem : ''}`}
                                variants={cardVariant}
                                whileHover="hover"
                                initial="rest"
                                animate="rest"
                            >
                                <motion.div
                                    className={styles.box}
                                    variants={{
                                        rest: { y: 0, borderColor: 'rgba(23, 37, 79, 0.6)' },
                                        hover: { 
                                            y: -8, 
                                            borderColor: 'rgba(197, 158, 99, 0.5)',
                                            boxShadow: '0 16px 32px -8px rgba(0, 0, 0, 0.4), 0 0 20px rgba(197, 158, 99, 0.15)',
                                            transition: { duration: 0.3, ease: 'easeOut' } 
                                        }
                                    }}
                                >
                                    <motion.img
                                        src={item.image}
                                        alt={item.alt}
                                        variants={{
                                            rest: { scale: 1 },
                                            hover: { scale: 1.08, transition: { duration: 0.4, ease: 'easeOut' } }
                                        }}
                                    />
                                </motion.div>

                                <div className={styles.details}>
                                    <motion.h3
                                        variants={{
                                            rest: { color: '#F7F4EC' },
                                            hover: { color: '#E8D2A7', transition: { duration: 0.25 } }
                                        }}
                                    >
                                        {item.title}
                                    </motion.h3>
                                    
                                    <motion.div 
                                        className={styles.readMoreLink}
                                        variants={{
                                            rest: { opacity: 0.4, x: 0 },
                                            hover: { opacity: 1, x: 3, transition: { duration: 0.25 } }
                                        }}
                                    >
                                        <span>Read more</span>
                                        <svg 
                                            className={styles.arrowIcon}
                                            width="12" 
                                            height="10" 
                                            viewBox="0 0 12 10" 
                                            fill="none" 
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path 
                                                d="M7 1L11 5M11 5L7 9M11 5H1" 
                                                stroke="currentColor" 
                                                strokeWidth="1.5" 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

