'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './howtoStart.module.scss';
import Button from '../button';

const Mobile = '/assets/images/mobile-dark.png';

export default function HowtoStart() {
    return (
        <div className={styles.howtoStart}>
            <div className='container-xl'>
                <div className={styles.sectionHeader}>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        How to Start <br />Trading with Yume Prime
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <Button text="Start Trading Forex Today" />
                    </motion.div>
                </div>
                <div className={styles.grid}>
                    {/* Left Column (Step 1 & Step 2) */}
                    <div className={styles.items}>
                        <motion.div
                            className={styles.text}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ x: 6, transition: { duration: 0.2 } }}
                        >
                            <h3>Register</h3>
                            <p>
                                Create your Yume Prime account online. Takes under
                                a few minutes.
                            </p>
                        </motion.div>
                        <div className={styles.empty}></div>
                        <motion.div
                            className={styles.text}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ x: 6, transition: { duration: 0.2 } }}
                        >
                            <h3>Fund</h3>
                            <p>
                                Deposit via card, bank transfer, or e-wallet.
                                Most methods are credited instantly.
                            </p>
                        </motion.div>
                        <div className={styles.empty}></div>
                    </div>

                    {/* Center Column (Mobile mockup with smooth, glitch-free float animation) */}
                    <div className={styles.items}>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            style={{
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <motion.div
                                animate={{ y: [0, -10] }}
                                transition={{
                                    repeat: Infinity,
                                    repeatType: 'reverse',
                                    duration: 3,
                                    ease: 'easeInOut'
                                }}
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    willChange: 'transform'
                                }}
                            >
                                <img
                                    src={Mobile}
                                    alt='Mobile'
                                    draggable={false}
                                    style={{
                                        display: 'block',
                                        width: '100%',
                                        userSelect: 'none',
                                        backfaceVisibility: 'hidden',
                                        WebkitBackfaceVisibility: 'hidden'
                                    }}
                                />
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Column (Step 3 & Step 4) */}
                    <div className={styles.items}>
                        <div className={styles.empty}></div>
                        <motion.div
                            className={styles.text}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ x: -6, transition: { duration: 0.2 } }}
                        >
                            <h3>Verify</h3>
                            <p>
                                Submit your ID and proof
                                of address. Verification typically completed within [24] business hours.
                            </p>
                        </motion.div>
                        <div className={styles.empty}></div>
                        <motion.div
                            className={styles.text}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.7, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ x: -6, transition: { duration: 0.2 } }}
                        >
                            <h3>Trade</h3>
                            <p>
                                Log in to MT5, WebTrader, or the mobile app, select your market, and start trading.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

