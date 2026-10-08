'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/button';
import styles from './tradeTerms.module.scss';

const TradeBanner = '/assets/images/trade-banner.png';
const Trustpilot = '/assets/images/Trustpilot-img.svg';

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

const bottomContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.25,
        },
    },
};

const fadeInUp = {
    hidden: { opacity: 0, y: 32 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

export default function TradeTerms() {
    return (
        <section className={styles.tradeTerms}>
            <motion.div
                className={styles.image}
                initial={{ opacity: 0, scale: 1.03 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            >
                <img src={TradeBanner} alt='TradeBanner' />
            </motion.div>
            <div className={styles.contnetAlignment}>
                <div className='container-xl'>
                    <div className={styles.spacingalignment}>
                        <motion.div
                            className={styles.top}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={containerVariants}
                        >
                            <motion.h2 variants={fadeInUp}>
                                Trade on <br />
                                your terms
                            </motion.h2>
                            <motion.p variants={fadeInUp}>
                                Trade on MetaTrader 5, our browser-based
                                WebTrader, or the Yume Prime mobile app one account, full functionality, wherever you are.
                            </motion.p>
                            <motion.div
                                variants={fadeInUp}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                style={{ width: 'fit-content' }}
                            >
                                <Button text="Explore Trading Platforms" href="/trading-platforms" />
                            </motion.div>
                        </motion.div>
                        <motion.div
                            className={styles.bottom}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={bottomContainerVariants}
                        >
                            <motion.p variants={fadeInUp}>
                                Trusted by
                                <br />
                                Traders Worldwide
                            </motion.p>
                            <motion.div
                                className={styles.imageText}
                                variants={fadeInUp}
                                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                                style={{ width: 'fit-content' }}
                            >
                                <img src={Trustpilot} alt="Trustpilot" />
                                <div>
                                    <h3>
                                        4.7/5
                                    </h3>
                                    <span>
                                        From 2965 Reviews
                                    </span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

